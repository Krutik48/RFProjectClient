<template>
  <h1>Start Driving</h1>
  <form id="form" @submit.prevent="submitForm">
    <div class="d-flex flex-row justify-content-center align-items-center">
      <label for="driver-name">Name</label>
      <input class="form-control" type="text" id="driver-name" name="name-input" v-model="driverName">
    </div>
    <div class="d-flex flex-row justify-content-center align-items-center ">
      <label for="room-input">Room</label>
      <input  class="form-control" type="text" id="room-input" name="room-input" v-model="room">
    </div>
    <button class="btn btn-primary" type="submit" id="room-button" @click="clickJoin">Join</button>
  </form>
  <ul class="d-flex flex-column justify-content-center align-items-center" id="driver-list"></ul>
</template>

<script>

import { io} from "socket.io-client" 

export default {
  name: 'HomePage',

  data(){
    return {
      socket: null,
      room: "",
      driverName: "",
    }
  },
  methods:{
    clickJoin(){
      console.log("Joining room")
    },
    submitForm(){
      console.log("Submitting form", this.driverName,this.room)
      this.socket.emit("send-name" , this.driverName,this.room)
    
    },
    displayName(name){
      const driverList = document.getElementById("driver-list")
      const driver = document.createElement("li")
      driver.innerText = name
      driverList.appendChild(driver)
    } 
  },
  mounted(){
    const socket1 = io("https://rfproject.onrender.com/")
    this.socket = socket1
    this.socket.on("connect", () => {
      console.log("Connected to server ", this.socket.id)
    })
    socket1.on("receive-name", (name) => {
      console.log("Received name ", name)
      this.displayName(name)
    }) 
  }
}
</script>

<style>
  #driver-name{
    margin: 10px;
    width: 300px;
  }
  #room-input{
    margin: 10px;
    width: 300px;
  }
  #driver-list li{
    margin: 10px;
    width: 300px;
  }
</style>
