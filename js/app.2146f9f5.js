(function(){"use strict";var e={359:function(e,t,n){var i=n(963),r=n(252);function s(e,t,n,i,s,o){const l=(0,r.up)("HomePage");return(0,r.wg)(),(0,r.j4)(l)}var o=n(577);const l=(0,r._)("h1",null,"Start Driving",-1),a={class:"d-flex flex-row justify-content-center align-items-center m-2"},d=(0,r._)("label",{for:"driver-name"},"Name",-1),c={class:"d-flex flex-row justify-content-center align-items-center m-2"},h=(0,r._)("label",{for:"x"},"X:",-1),u=(0,r._)("label",{for:"y"},"Y:",-1),m={class:"d-flex flex-row justify-content-center align-items-center m-2"},p=(0,r._)("label",{for:"Angle-input"},"Angle",-1),v={class:"d-flex flex-row justify-content-center align-items-center m-2"},g=(0,r._)("label",{for:"speed-input"},"Speed",-1),f=(0,r._)("h2",null,"My Car",-1),y={class:"d-flex flex-row justify-content-around align-items-center flex-wrap",style:{width:"100%"}},b={class:"m-2"},w={class:"m-2"},k={class:"m-2"},x={class:"d-flex flex-row justify-content-center align-items-center m-2"},_=(0,r._)("label",{for:"Angle-input"},"Angle",-1),M={class:"d-flex flex-row justify-content-center align-items-center m-2"},S=(0,r._)("label",{for:"speed-input"},"Speed",-1),L=(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"m-3 col d-flex flex-column justify-content-center align-items-center"},[(0,r._)("h4",null,"Other Driver List"),(0,r._)("table",{class:"table table-striped",id:"driver-table"})]),(0,r._)("div",{class:"col m-3 messageBox",id:"messageBox"},[(0,r._)("h4",null,"Messages")])],-1),A=[L];function I(e,t,n,s,L,I){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.wy)((0,r._)("form",{id:"form",onSubmit:t[6]||(t[6]=(0,i.iM)(((...e)=>I.submitForm&&I.submitForm(...e)),["prevent"]))},[l,(0,r._)("div",a,[d,(0,r.wy)((0,r._)("input",{class:"form-control input-box",type:"text",id:"driver-name",name:"name-input","onUpdate:modelValue":t[0]||(t[0]=e=>L.driverName=e),placeholder:"driver name",required:""},null,512),[[i.nr,L.driverName]])]),(0,r._)("div",c,[h,(0,r.wy)((0,r._)("input",{class:"form-control input_cod",type:"number",id:"x",name:"X-coordinate","onUpdate:modelValue":t[1]||(t[1]=e=>L.X=e),required:""},null,512),[[i.nr,L.X]]),u,(0,r.wy)((0,r._)("input",{class:"form-control input_cod",type:"number",id:"y",name:"Y-coordinate","onUpdate:modelValue":t[2]||(t[2]=e=>L.Y=e),required:""},null,512),[[i.nr,L.Y]])]),(0,r._)("div",m,[p,(0,r.wy)((0,r._)("input",{class:"form-control input-box",type:"number",id:"Angle-input",name:"Angle-input","onUpdate:modelValue":t[3]||(t[3]=e=>L.Angle=e),placeholder:"degree",required:""},null,512),[[i.nr,L.Angle]])]),(0,r._)("div",v,[g,(0,r.wy)((0,r._)("input",{class:"form-control input-box",type:"number",id:"speed-input",name:"speed-input","onUpdate:modelValue":t[4]||(t[4]=e=>L.Speed=e),placeholder:"km/h",required:""},null,512),[[i.nr,L.Speed]])]),(0,r._)("button",{class:"btn btn-primary",type:"submit",id:"room-button",onClick:t[5]||(t[5]=(...e)=>I.clickJoin&&I.clickJoin(...e))},"Drive")],544),[[i.F8,L.driverDetailForm]]),(0,r.wy)((0,r._)("div",null,[f,(0,r._)("div",y,[(0,r._)("h5",b,(0,o.zw)(L.driverName),1),(0,r._)("h5",w,"X: "+(0,o.zw)(L.X.toFixed(2)),1),(0,r._)("h5",k,"Y: "+(0,o.zw)(L.Y.toFixed(2)),1),(0,r._)("div",x,[_,(0,r.wy)((0,r._)("input",{class:"form-control input-box",type:"text",id:"Angle-input",name:"Angle-input","onUpdate:modelValue":t[7]||(t[7]=e=>L.Angle=e),placeholder:"degree",required:""},null,512),[[i.nr,L.Angle]])]),(0,r._)("div",M,[S,(0,r.wy)((0,r._)("input",{class:"form-control input-box",type:"text",id:"speed-input",name:"speed-input","onUpdate:modelValue":t[8]||(t[8]=e=>L.Speed=e),placeholder:"km/h",required:""},null,512),[[i.nr,L.Speed]])]),(0,r._)("button",{class:"btn btn-primary m-2",type:"submit",id:"room-button",onClick:t[9]||(t[9]=(...e)=>I.startDriving&&I.startDriving(...e))},"Update")])],512),[[i.F8,L.tableShow]]),(0,r.wy)((0,r._)("hr",null,null,512),[[i.F8,L.tableShow]]),(0,r.wy)((0,r._)("div",null,A,512),[[i.F8,L.tableShow]])],64)}var T=n(367),C=n.p+"media/carStart.2a662fd4.mp3",Y=n.p+"media/receivedMessage.f23c8eec.mp3",j={name:"HomePage",data(){return{driverDetailForm:!0,tableShow:!1,socket:null,driverName:null,X:0,Y:0,Angle:0,Speed:10,driverList:[],overtake:!1,overtakingInterval:null,carUpdatingInterval:null}},methods:{clickJoin(){console.log("Joining room")},submitForm(){const e=new Audio(C);e.play(),console.log("Submitting form",this.driverName,this.X,this.Y,this.Angle,this.Speed),this.socket.emit("send-client-detail",this.driverName,this.X,this.Y,this.Angle,this.Speed),this.startDriving(),this.driverDetailForm=!1,this.tableShow=!0},sendMessage(e){const t=document.getElementById("messageBox"),n=document.createElement("p");n.className="sendMessage",n.style.textAlign="right",n.innerText=e,t.appendChild(n)},receieveMessage(e){const t=new Audio(Y);t.play();const n=document.getElementById("messageBox"),i=document.createElement("p");i.className="receieveMessage",i.style.textAlign="left",i.innerText=e,n.appendChild(i)},startDriving(){this.carUpdatingInterval&&clearInterval(this.carUpdatingInterval),this.overtakingInterval&&clearInterval(this.overtakingInterval),this.carUpdatingInterval=setInterval((()=>{this.X+=this.Speed/3.6*Math.cos(this.Angle*Math.PI/180),this.Y+=this.Speed/3.6*Math.sin(this.Angle*Math.PI/180),this.X=parseFloat(this.X.toFixed(2)),this.Y=parseFloat(this.Y.toFixed(2)),this.socket.emit("send-client-detail-update",this.X,this.Y,this.Angle,this.Speed)}),1e3),this.overtakingInterval=setInterval((()=>{if(!this.overtake)for(let t=0;t<this.driverList.length;t++)if(this.driverList[t].id!=this.socket.id){let n=Math.sqrt(Math.pow(this.X-this.driverList[t].x,2)+Math.pow(this.Y-this.driverList[t].y,2)),i=this.Speed/3.6,r=Math.abs(this.Angle-this.driverList[t].angle);if(n<=i&&r<=10&&i>this.driverList[t].speed/3.6){console.log("overtaking"),this.sendMessage("I'm overtaking "+this.driverList[t].name+" Please slow down");let r=this.driverName+" is overtaking you. Please slow down";this.socket.emit("send-message",1,this.driverList[t].id,r),this.overtake=!0,this.Angle+=5,setTimeout((()=>{this.Angle-=5}),2e3);var e=setInterval((()=>{n=Math.sqrt(Math.pow(this.X-this.driverList[t].x,2)+Math.pow(this.Y-this.driverList[t].y,2)),n>2*i&&(this.overtake=!1,console.log("overtaking done"),this.sendMessage("I have overtaken "+this.driverList[t].name+". Thank you for your cooperation"),r=this.driverName+" has overtaken you",this.socket.emit("send-message",2,this.driverList[t].id,r),r="Thank you for your cooperation",this.socket.emit("send-message",4,this.driverList[t].id,r),r="You can drive normally now",this.socket.emit("send-message",3,this.driverList[t].id,r),clearInterval(e))}),1e3)}}}),1e3)},displayTable(e,t){const n=document.getElementById("driver-table"),i=n.insertRow(-1),r=i.insertCell(0),s=i.insertCell(1),o=i.insertCell(2),l=i.insertCell(3),a=i.insertCell(4),d=i.insertCell(5);r.innerHTML=t+1,s.innerHTML=e.name,o.innerHTML=e.x,l.innerHTML=e.y,a.innerHTML=e.angle,d.innerHTML=e.speed}},mounted(){this.socket=(0,T.io)("https://rfproject.onrender.com"),this.socket.on("connect",(()=>{console.log("Connected to server ",this.socket.id)})),this.socket.on("all_driver",(e=>{this.driverList=e;const t=document.getElementById("driver-table");t.innerHTML="";const n=t.createTHead(),i=n.insertRow(0),r=i.insertCell(0),s=i.insertCell(1),o=i.insertCell(2),l=i.insertCell(3),a=i.insertCell(4),d=i.insertCell(5);r.innerHTML="ID",s.innerHTML="Name",o.innerHTML="X",l.innerHTML="Y",a.innerHTML="Angle(deg)",d.innerHTML="Speed(km/h)",e.forEach((t=>{t.id!=this.socket.id&&this.displayTable(t,e.indexOf(t))}))})),this.socket.on("receive-message",((e,t,n)=>{if(this.receieveMessage(t),1==e){this.sendMessage("Yes I have slowed down my speed from "+this.Speed+" Km/h to "+this.Speed/4*3+" Km/h"),this.sendMessage("You can overtake now");let e=this.driverName+" has slowed down speed from "+this.Speed+" Km/h to "+this.Speed/4*3+" Km/h";this.Speed=this.Speed/4*3,this.socket.emit("send-message",4,n,e),e="You can overtake now",this.socket.emit("send-message",4,n,e)}3==e&&(this.Speed=this.Speed/3*4,this.sendMessage("I'm again driving at my normal speed of "+this.Speed+" Km/h"))}))}},F=n(744);const H=(0,F.Z)(j,[["render",I]]);var X=H,O={name:"App",components:{HomePage:X}};const N=(0,F.Z)(O,[["render",s]]);var D=N;(0,i.ri)(D).mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,s){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],s=e[c][2];for(var l=!0,a=0;a<i.length;a++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(l=!1,s<o&&(o=s));if(l){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,r,s]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/RFProjectClient/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,s,o=i[0],l=i[1],a=i[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(a)var c=a(n)}for(t&&t(i);d<o.length;d++)s=o[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},i=self["webpackChunkclient"]=self["webpackChunkclient"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(359)}));i=n.O(i)})();
//# sourceMappingURL=app.2146f9f5.js.map