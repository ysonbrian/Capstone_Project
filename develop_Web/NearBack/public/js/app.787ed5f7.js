(function(i){function t(t){for(var n,s,l=t[0],c=t[1],r=t[2],u=0,d=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(i[n]=c[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,r||[]),e()}function e(){for(var i,t=0;t<a.length;t++){for(var e=a[t],n=!0,l=1;l<e.length;l++){var c=e[l];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),i=s(s.s=e[0]))}return i}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=i,s.c=n,s.d=function(i,t,e){s.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:e})},s.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,t){if(1&t&&(i=s(i)),8&t)return i;if(4&t&&"object"===typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var n in i)s.d(e,n,function(t){return i[t]}.bind(null,n));return e},s.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return s.d(t,"a",t),t},s.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var r=0;r<l.length;r++)t(l[r]);var p=c;a.push([0,"chunk-vendors"]),e()})({0:function(i,t,e){i.exports=e("56d7")},"034f":function(i,t,e){"use strict";var n=e("85ec"),o=e.n(n);o.a},"0688":function(i,t,e){},"0fe4":function(i,t,e){"use strict";var n=e("5f06"),o=e.n(n);o.a},1:function(i,t){},1897:function(i,t,e){},2982:function(i,t,e){i.exports=e.p+"img/NumberOne.114f536b.png"},"2a26":function(i,t,e){},"336d":function(i,t,e){},"56d7":function(i,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"leftBox"},[e("near-map")],1),e("div",{staticClass:"rightBox"},[e("near-menu"),e("router-view")],1)])},a=[],s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",[e("NearHeader")],1),e("div",[e("NearSecondHeader")],1),e("div",[e("NearStatus")],1),e("div",{staticStyle:{"padding-left":"5px"}},[e("b-nav",[e("b-nav-item",{on:{click:function(t){return i.changeToggle(i.title)}}},[e("router-link",{attrs:{to:"/popup"}},[i._v(i._s(this.title[0].label))])],1),e("b-nav-item",{on:{click:function(t){return i.changeToggle(i.title)}}},[e("router-link",{attrs:{to:"/missionComplete"}},[i._v(i._s(this.title[1].label))])],1)],1)],1)])},l=[],c=function(){var i=this,t=i.$createElement;i._self._c;return i._m(0)},r=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"check"},[e("img",{staticClass:"imgSet",attrs:{src:"NearLogo.svg",width:"100px"}})])}],p={},u=p,d=(e("7ef5"),e("2877")),m=Object(d["a"])(u,c,r,!1,null,null,null),v=m.exports,f=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("b-container",{staticClass:"bv-example-row"},[e("div",[e("b-row",{staticClass:"divOut"},[e("b-col",[e("b-row",{staticClass:"divIn"},[e("b-col",{staticStyle:{"padding-left":"2%"}},[e("i",{staticClass:"fas fa-circle first"}),e("span",[i._v(" 신고접수 "),e("span",{staticStyle:{color:"#707070"}},[i._v(i._s(i.victimCall)+"건")]),e("span",{staticClass:"divLine"},[i._v("|")])])]),e("b-col",[e("i",{staticClass:"fas fa-circle second"}),e("span",[i._v(" 출동 배정 "),e("span",{staticStyle:{color:"#707070"}},[i._v(i._s(i.askingCall)+"건")]),e("span",{staticClass:"divLine"},[i._v("|")])])]),e("b-col",[e("i",{staticClass:"fas fa-circle third"}),e("span",[i._v(" 출동 중 "),e("span",{staticStyle:{color:"#707070"}},[i._v(i._s(i.policeCall)+"건")]),e("span",{staticClass:"divLine2"},[i._v("|")])])]),e("b-col",{staticStyle:{"padding-right":"10px"}},[e("i",{staticClass:"fas fa-circle fourth"}),e("span",[i._v("보호 관찰")]),e("span",{staticStyle:{color:"#707070","padding-left":"2px"}},[i._v(i._s(i.victimSafe)+"건")])])],1)],1)],1)],1)])},g=[],h=new n["default"],C={data:function(){return{victimCall:0,askingCall:0,policeCall:0,victimSafe:3}},created:function(){var i=this;h.$on("victimCall",(function(){i.victimCall+=1,i.victimSafe-=1})),h.$on("askingPolice",(function(){i.askingCall+=1})),h.$on("policeCall",(function(){i.askingCall-=1,i.policeCall+=1})),h.$on("statusReset",(function(){i.victimCall=0,i.askingCall=0,i.policeCall=0,i.victimSafe=3})),h.$on("victimSafeCall",(function(){i.victimSafe-=1})),h.$on("victimSafeCallBack",(function(){i.victimCall-=1,i.victimSafe+=1}))}},_=C,k=(e("82d4"),Object(d["a"])(_,f,g,!1,null,null,null)),y=k.exports,b=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"secondHeader"},[i._v(" 현재 상황 "),e("span",{staticClass:"timeShow"},[i._v(i._s(i.timeShow))])])},w=[],B=(e("0d03"),{data:function(){return{timeShow:""}},methods:{timeFunction:function(){var i=this;setInterval((function(){var t=(new Date).toLocaleDateString(),e=(new Date).toLocaleTimeString();i.timeShow=t+" "+e}),100)}},mounted:function(){this.timeShow=this.timeFunction()}}),O=B,$=(e("0fe4"),Object(d["a"])(O,b,w,!1,null,null,null)),x=$.exports,D={data:function(){return{title:[{label:"알림",clicked:!1},{label:"사건완료",clicked:!1}],checked:!1}},methods:{changeToggle:function(){this.title.clicked=!this.title.clicked}},components:{NearHeader:v,NearStatus:y,NearSecondHeader:x}},N=D,W=(e("8b0e"),Object(d["a"])(N,s,l,!1,null,"f25c5206",null)),I=W.exports,P=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("gmap-map",{ref:"gmap",staticStyle:{width:"100%",height:"100vh"},attrs:{center:{lat:i.currentLocation.lat,lng:i.currentLocation.lng},zoom:8}},[i._l(i.markers,(function(t,n){return e("gmap-marker",{key:n,attrs:{position:t.position,icon:t.icon},on:{click:function(e){return i.toggleInfoWindow(t,n)}}})})),e("gmap-info-window",{attrs:{options:i.infoOptions,position:i.infoWindowPos,opened:i.infoWinOpen},on:{closeclick:function(t){i.infoWinOpen=!1}}},[e("div",{domProps:{innerHTML:i._s(i.infoContent)},on:{Click:function(t){return i.changedInfo()}}}),i.clickedVictim?e("NearChart"):i._e(),e("NearMapModal")],1)],2)],1)},S=[],M=(e("a4d3"),e("e01a"),e("d28b"),e("99af"),e("b0c0"),e("d3b7"),e("3ca3"),e("38cf"),e("ddb0"),e("bc3a")),E=e.n(M),j=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[i.isPolice?e("button",{style:i.policeButton,on:{click:function(t){return i.policeButtonClick()}}},[i._v(" "+i._s(i.pMessage)+" ")]):i.isWaiting?e("button",{style:i.policeButton,on:{click:function(t){return i.policeButtonClick()}}},[i._v(" "+i._s(i.pMessage)+" ")]):i.isBusy?e("button",{style:i.policeBusyButton},[i._v(i._s(i.pMessage))]):i.isVictim?e("button",{style:i.victimButton,on:{click:function(t){return i.victimButtonClick()}}},[i._v(" "+i._s(i.vMessage)+" ")]):i._e()])},A=[],L=e("2fa7"),T=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"dv"},[n("div",[n("div",{staticClass:"rightBox"},[i.victim|i.police|i.policeWay?n("div",{staticClass:"testline"},[i.victim?n("div",{staticClass:"firstDiv",style:i.red},[n("img",{staticClass:"imgMv",attrs:{src:e("2982"),width:"30px",align:"left"}})]):i.police?n("div",{staticClass:"firstDiv",style:i.purple},[n("img",{staticClass:"imgMv",attrs:{src:e("6d03"),width:"30px",align:"left"}})]):i.policeWay?n("div",{staticClass:"firstDiv",style:i.blue},[n("img",{staticClass:"imgMv",attrs:{src:e("5e84"),width:"30px",align:"left"}})]):i._e(),i.victim?n("div",{staticClass:"secondDiv"},[i._v(i._s(i.callInfo1))]):i.police?n("div",{staticClass:"secondDiv"},[i._v(i._s(i.callInfo3))]):i.policeWay?n("div",{staticClass:"secondDiv"},[i._v(i._s(i.callInfo2))]):i._e(),n("div",[i.victim?n("span",{staticClass:"thirdDiv"},[i._v(" "+i._s(i.victimName)+", "),n("span",[i._v(i._s(i.typeOfCall[0]))])]):i._e(),i.police?n("span",{staticClass:"thirdDiv"},[i._v(" "+i._s(i.victimWHO)+" "),n("span",[i._v("수동 신고")])]):i._e(),i.policeWay?n("span",{staticClass:"thirdDiv"},[i._v(" "+i._s(i.victimWHO)+" "),n("span",[i._v("수동 신고")])]):i._e()]),i.victim?n("span",{staticClass:"fourthDiv"},[i._v(i._s(i.currentSituation[0]))]):i.police?n("span",{staticClass:"fourthDiv"},[i._v(" "+i._s(i.policeName)+" "),n("span",[i._v(i._s(i.policeClass))]),n("span",[i._v("("+i._s(i.policeWorkArea)+")")]),n("span",{staticStyle:{"padding-left":"5px"}},[i._v(i._s(i.messages[1]))])]):i.policeWay?n("span",{staticClass:"fourthDiv"},[i._v(" "+i._s(i.policeName)+" "),n("span",[i._v(i._s(i.policeClass))]),n("span",[i._v("("+i._s(i.policeWorkArea)+")")]),n("span",{staticStyle:{"padding-left":"5px"}},[i._v(i._s(i.messages[3]))])]):i._e()]):i._e()])])])},H=[],V={data:function(){return{newPosition:{},messages:["신고접수","출동 배정","출동 중","출동 승인"],currentSituation:["담당 경찰관이 배정되지 않았습니다."],typeOfCall:["수동 신고","자동 신고"],red:{backgroundColor:"#E60012",width:"15%",height:"100%",alignItem:"center",justifyContent:"center",position:"center"},purple:{backgroundColor:"#7E318E",idth:"15%",height:"100%",alignItem:"center",justifyContent:"center",position:"center"},blue:{backgroundColor:"#036EB8",idth:"15%",height:"100%",alignItem:"center",justifyContent:"center",position:"center"},victim:!1,police:!1,policeWay:!1,callInfo1:"",callInfo2:"",callInfo3:"",victimName:"",policeName:"",policeClass:"",policeWorkArea:"",victimWHO:""}},mounted:function(){}},R=V,F=(e("6edf"),Object(d["a"])(R,T,H,!1,null,"7c699f19",null)),J=F.exports,K=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"dv"},[i.isDone?n("div",[n("div",[n("div",{staticClass:"rightBox"},[n("div",{staticClass:"testline"},[n("div",{staticClass:"firstDiv",style:i.finish},[n("img",{staticClass:"imgMv",attrs:{src:e("60b0"),width:"30px",align:"left"}})]),n("span",{staticClass:"secondDiv"},[i._v("사건완료")]),n("div",[n("span",{staticClass:"thirdDiv"},[i._v(i._s(i.victimName))])]),n("div",{staticClass:"fourthDiv"},[n("span",{staticClass:"fourthDiv"},[i._v(i._s(i.policeName))]),n("span",{staticStyle:{"padding-left":"5px"}},[i._v(i._s(i.policeClass))]),n("span",[i._v("("+i._s(i.policeWorkArea)+")")]),n("span",[i._v("담당")]),n("span")])])])])]):i._e()])},Y=[],z={data:function(){return{isDone:!1,marker:[],policeId:"",victimId:"",finish:{backgroundColor:"#707070",width:"15%",height:"50px",alignItem:"center",justifyContent:"center",position:"center"},policeName:"",victimName:"",policeClass:"",policeWorkArea:"",whiteCall:"white.png",yellowCall:"yellow.ico",policeBackID:"",victimBackID:""}},created:function(){}},U=z,G=(e("5ae1"),Object(d["a"])(U,K,Y,!1,null,"68a5d847",null)),Z=G.exports,q=e("8055"),Q=e.n(q),X={data:function(){var i;return i={socket:Q()("http://192.168.219.107:7499"),markers:[{id:0,name:"유승훈(남)",age:"27 (931027)",bloodType:"O형 (RH+)",position:{lat:37.550378,lng:127.073192},info:"조선실세 사건 증인 보호 중",img:"MrYoo.jpeg",report:!1,identity:"victim",icon:{url:"yellow.png"}},{id:1,name:"박원형(남)",workArea:"광진 경찰서",class:"경위",bloodType:"AB형(RH+)",position:{lat:37.545344,lng:127.07664},img:"Police.png",report:!1,waitingCall:!1,acceptCall:!1,finishCall:!1,identity:"police",icon:{url:"white.png"}}],vMessage:"신고 여부 확인",pMessage:"출동 대기중",message:"출동 배정",policeMessage:"출동 대기중",victimMessage:"출동 배정",backPolice:!1,backVictim:!1,buttonClicked:!1,victimCall:1,victimBackCall:-1,policeCall:1,policeBackCall:-1,waitingCall:1,isVictim:!1,isPolice:!1,isWaiting:!1,isBusy:!1,isDone:!1,isFinished:1,victimButton:{width:"100%",height:"40px",marginTop:"20px",backgroundColor:"#E60012",color:"white",border:0,outline:0,fontSize:"17px"},policeButton:{width:"100%",height:"40px",backgroundColor:"#036EB8",color:"white",padding:0,margin:30,border:0,outline:0,fontSize:"17px"},policeBusyButton:{width:"100%",height:"40px",backgroundColor:"gray",color:"white",padding:0,margin:30,border:0,outline:0,fontSize:"17px"},redCall:"red.png",whiteCall:"white.png",yellowCall:"yellow.png",blueCall:"blue.png",purpleCall:"purple.png",policeBackCALLID:"",victimBackCALLID:""},Object(L["a"])(i,"purpleCall","purple.png"),Object(L["a"])(i,"waitingCall",1),Object(L["a"])(i,"blueCall","blue.png"),Object(L["a"])(i,"victimCallName",""),Object(L["a"])(i,"isAccept",!1),Object(L["a"])(i,"policeBBB",!1),i},created:function(){var i=this;h.$on("getPosition",(function(t,e,n,o){i.markers=t,console.log(i.markers.identity),i.victimCall=e,"police"===i.markers.identity?!0===o?(console.log("경찰이 바쁜상태"),i.isPolice=!1,i.isWaiting=!1,i.isVictim=!1,i.isBusy=!0):!1===o&&(console.log("경찰이 안바쁜 상태"),i.isPolice=!0,i.policeButton.backgroundColor="#036EB8",i.isWaiting=!1,i.isVictim=!1,i.isBusy=!1):(i.isVictim=!0,i.isWaiting=!1,i.isPolice=!1,i.isBusy=!1,i.victimCallName=t.name)})),h.$on("doneCall",(function(t){console.log("doneCall identity",t),!1===i.policeBBB?(i.isVictim=!0,i.isPolice=!1,i.vMessage="신고 여부 확인",i.pMessage="출동 대기중"):!0===i.policeBBB&&(i.isVictim=!1,i.isPolice=!0,i.policeButton.backgroundColor="#036EB8",i.vMessage="신고 여부 확인",i.pMessage="출동 대기중"),h.$emit("statusReset")})),this.socket.on("SEND_POLICE_INFO",(function(t){console.log("SEND_POLICE_INFO 작동해서 내 프런트에서 변화 시작!"),console.log("경찰 버튼 및 상태 출동중으로 바뀜!");t.id;i.policeButton.backgroundColor="#036EB8",i.isWaiting=!1,i.isPolice=!0,i.isWaiting=!1,i.isVictim=!1,i.pMessage="출동 중",h.$emit("policeCall",console.log("status에 파란색 값 증가!")),console.log("파란색!! 파란색!!"),h.$emit("changeBlue",i.blueCall,t.id),h.$emit("policeDONE",t,t.id),h.$emit("getPosition2",t)})),h.$on("victimCancelCAll",(function(){console.log("버튼 색깔 및 표시를 바꿈!"),i.isPolice=!1,i.isWaiting=!1,i.isBusy=!1,i.isVictim=!0,i.vMessage="신고 여부 확인",i.pMessage="출동 대기중",i.victimButton.backgroundColor="#E60012",i.policeButton.backgroundColor="#036EB8",i.markers[0].report=!1,i.markers[1].report=!1})),this.socket.on("CHECK_BUTTON",(function(){console.log("사용자 버튼 빨간색으로 바뀐뒤! 신고접수 표시!"),i.victimButton.backgroundColor="#E60012",i.vMessage="신고 접수"})),h.$on("police_isBusy",(function(){console.log("바빠요! 버튼바꿔!"),i.isPolice=!1,i.isWaiting=!1,i.isVictim=!1,i.isBusy=!0,i.markers[1].report=!0,i.pMessage="출동 불가"})),h.$on("police_canWork",(function(){console.log("다시 일할수 있어요!"),i.isBusy=!1,i.isWaiting=!1,i.isVictim=!1,i.isPolice=!0,i.pMessage="출동 대기중",i.markers[1].report=!1,h.$emit("police_not_busy")})),h.$on("victim_no_button",(function(){console.log("15초가 지난후에 사용자가 신고취소를 누름!!"),i.isVictim=!0,i.isBusy=!1,i.isWaiting=!1,i.isPolice=!1,i.vMessage="사건여부 확인",i.victimButton.backgroundColor="#E60012"}))},methods:{policeButtonClick:function(){!1===this.markers.report&&!0===this.isPolice&&(this.isWaiting=!0,this.isPolice=!1,this.isVictim=!1,this.isBusy=!1,this.markers.report=!this.markers.report,h.$emit("buttonPurple",this.markers,this.victimCallName),this.policeButton.backgroundColor="gray",h.$emit("changePurple",this.purpleCall,this.markers.id),h.$emit("askingPolice"),this.socket.emit("POLICE_CALLNOW",console.log("YES!")),this.policeBBB=!0,this.pMessage=" 확인 중",this.policeBackCALLID=this.markers.id)},victimButtonClick:function(){if(!1===this.markers.report&&!0===this.isVictim){this.policeBBB=!1,this.markers.report=!this.markers.report,this.victimButton.backgroundColor="gray",this.vMessage="신고 여부 확인중 ",this.victimBackCALLID=this.markers.id;var i=this.markers.id;h.$emit("victimSafeCall"),h.$emit("redImage",this.redCall,i),h.$emit("getPosition2",this.markers),h.$emit("victimDONE",this.markers,i),this.socket.emit("VICTIM_CHECK",console.log("victim check! from the button"))}}},components:{NearPopUp:J,NearMissionComplete:Z}},ii=X,ti=Object(d["a"])(ii,j,A,!1,null,"3bc69810",null),ei=ti.exports,ni=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",{staticStyle:{"padding-top":"10px"},style:i.bpmWord},[i._v(" 현재 심장박동 "),e("span",{style:i.bpm},[i._v(i._s(i.pulseNumber))]),e("span",{style:i.bpmBpm},[i._v("bpm")])]),e("trend",{key:i.componentKey,attrs:{data:i.numbers,gradient:["#6fa8dc","#42b983","#2c3e50"],"auto-draw":"",autoDrawDuration:5e3,smooth:""}})],1)},oi=[],ai={data:function(){return{componentKey:0,bpm:{paddingLeft:"290px",fontWeight:"bold",fontSize:"25px"},bpmWord:{fontWeight:"bold",paddingLeft:0,paddingBottom:"15px",fontSize:"17px"},bpmBpm:{fontWeight:"normal"},numbers:[-.1,-0,1,-.1,-.1,.5,.3,.1,-.7,-.8,.1,.7,.8,.1,-.7,-.8,.2,.2,.2,-.1,-.1,-.1,-.1,-0,1,-.1,-.1,.5,.3,.1,-.7,-.8,.1,.7,.8,.1,-.7,-.8,.2,.2,.2,-.1,-.1,-.1,-.1,-0,1,-.1,-.1,.5,.3,.1,-.7,-.8,.1,.7,.8,.1,-.7,-.8,.2,.2,.2,-.1,-.1,-.1,-.1,-0,1,-.1,-.1,.5,.3,.1,-.7,-.8,.1,.7,.8,.1,-.7,-.8,.2,.2,.2,-.1,-.1,-.1,-.1,-0,1,-.1,-.1,.5,.3,.1,-.7,-.8,.1,.7,.8,.1,-.7,-.8,.2,.2,.2,-.1,-.1,-.1,-.1,-0,1,-.1,-.1,.5,.3,.1,-.7,-.8,.1,.7,.8,.1,-.7,-.8,.2,.2,.2,-.1,-.1,-.1,-.1,-0,1,-.1,-.1,.5,.3,.1,-.7,-.8,.1,.7,.8,.1,-.7,-.8,.2,.2,.2,-.1,-.1,-.1,-.1,-0,1,-.1,-.1,.5,.3,.1,-.7,-.8,.1,.7,.8,.1,-.7,-.8,.2,.2,.2,-.1,-.1,-.1],pulseNumber:""}},methods:{callFunction:function(){var i=this;setInterval((function(){i.componentKey+=1}),5e3)},checkPulse:function(){var i=this;i.pulseNumber=0,setInterval((function(){i.pulseNumber=Math.ceil(21*Math.random()+60)}),1e4)}},mounted:function(){this.callFunction(),this.checkPulse()}},si=ai,li=(e("90c1"),Object(d["a"])(si,ni,oi,!1,null,null,null)),ci=li.exports,ri={name:"GoogleMap",data:function(){return{socket:Q()("http://192.168.219.107:7499"),currentLocation:{lat:0,lng:0},map:null,infoContent:"",infoWindowPos:{lat:0,lng:0},infoWinOpen:!1,currentMidx:null,countCall:1,infoOptions:{pixelOffset:{width:0,height:-35}},callfunction:!1,markers:[{id:0,name:"유승훈(남)",age:"27 (931027)",bloodType:"O형 (RH+)",position:{lat:37.550378,lng:127.073192},info:"조선실세 사건 증인 보호 중",img:"MrYoo.jpeg",report:!1,identity:"victim",icon:{url:"yellow.png"}},{id:1,name:"박원형(남)",workArea:"광진 경찰서",class:"경위",bloodType:"AB형(RH+)",position:{lat:37.545344,lng:127.07664},img:"Police.png",report:!1,waitingCall:!1,acceptCall:!1,finishCall:!1,identity:"police",icon:{url:"white.png"}},{id:2,name:"여소빈",age:"22 (981001)",bloodType:"B형 (RH+)",position:{lat:37.539704,lng:127.065603},info:"최근 스토커로부터 전화 협박 받음",img:"Victim.jpg",report:!1,identity:"victim",icon:{url:"yellow.png"}},{id:3,name:"손영덕",age:"27 (930304)",bloodType:"A형 (RH+)",position:{lat:37.537928,lng:127.071459},img:"MrYoo.jpeg",info:"신변보호 필요",report:!1,identity:"victim",icon:{url:"yellow.png"}},{id:4,name:"김장수(남)",workArea:"광진 파출소",class:"경위",bloodType:"O형(RH+)",position:{lat:37.55974,lng:127.085245},img:"Police2.jpg",report:!1,waitingCall:!1,acceptCall:!1,finishCall:!1,identity:"police",icon:{url:"white.png"}},{id:5,name:"이지광(남)",workArea:"광진 파출소",class:"경위",bloodType:"A형(RH+)",position:{lat:37.548439,lng:127.04845},img:"Police3.jpg",report:!1,waitingCall:!1,acceptCall:!1,finishCall:!1,identity:"police",icon:{url:"white.png"}},{id:6,name:"김목수(남)",workArea:"광진 파출소",class:"경위",bloodType:"B형(RH+)",position:{lat:37.545554,lng:127.099834},img:"Police4.jpg",report:!1,waitingCall:!1,acceptCall:!1,finishCall:!1,identity:"police",icon:{url:"white.png"}},{id:7,name:"최태형(남)",workArea:"광진 파출소",class:"경위",bloodType:"O형(RH+)",position:{lat:37.538233,lng:127.053206},img:"Police.jpg",report:!1,waitingCall:!1,acceptCall:!1,finishCall:!1,identity:"police",icon:{url:"white.png"}}],clickedPosition:{lat:0,lng:0},clickedPolice:!1,clickedVictim:!1,componentKey:0,purpleCall:"purple.png",waitingCall:1,policeBackID:"",victimBackID:"",policeBusy:!1,rasberryCall:null,calling:!0,clear:!0,repeat:!1,repeat2:!1}},created:function(){var i=this;h.$on("redImage",(function(t,e){i.markers[e].icon=t})),h.$on("yellowImage",(function(t,e){i.markers[e].icon=t})),h.$on("changeBlue",(function(t,e){i.markers[e].icon=t})),h.$on("whiteImage",(function(t,e){i.markers[e].icon=t})),h.$on("backYellow",(function(t){i.victimBackID=t,i.markers[t].icon="yellow.png"})),h.$on("backWhite",(function(t){i.markers[t].icon="white.png"})),h.$on("changePurple",(function(t,e){i.markers[e].icon=t})),h.$on("FinishJob",(function(t,e){i.markers[t.id].report=!1,i.markers[e.id].report=!1})),this.socket.on("victim_cancel",(function(){console.log("사용자로부터 취소신청 받고 맵 마커 색깔이 바뀐후에 버튼으로 이벤트 발생!"),i.markers[0].icon="yellow.png",i.markers[0].report=!1,h.$emit("victimCancelCAll"),h.$emit("victimSafeCallBack"),i.repeat=!0,i.repeat2=!1})),this.socket.on("POLICE_CAN_WORK",(function(){console.log("NearMap에서 이벤트 받고 경찰이 다시 일할수있음"),i.markers[1].icon="white.png",i.policeBusy=!1,h.$emit("police_canWork")})),this.socket.on("VICTIM_NO_NEED_HELP",(function(t){console.log("사용자가 신고접수후 경찰이 출동했는데 사용자가 취소를 눌렀다!"),i.markers[0].icon="yellow.png",i.markers[0].report=!1,i.markers[1].icon="white.png",i.markers[1].report=!1,h.$emit("victim_no_need_help"),h.$emit("victim_no_button"),h.$emit("victimSafeCallBack"),h.$emit("doneCall",t),h.$emit("statusReset"),i.repeat=!0,i.repeat2=!1})),this.socket.on("JOBS_done",(function(t){i.markers[0].icon="yellow.png",i.markers[1].icon="white.png",i.markers[0].report=!1,i.markers[1].report=!1,console.log("JOBS_done 받고 JOBSDONE을 NearFlow로 보냄! "),h.$emit("JOBSDONE",t,i.markers[0]),h.$emit("doneCall"),h.$emit("statusReset"),i.repeat=!0,i.repeat2=!1})),h.$on("police_not_busy",(function(){i.policeBusy=!1})),this.socket.on("KILL_POLICE",(function(){i.markers[1].icon=NULL})),this.socket.emit("POLICE_YES_OR_NO",(function(){})),this.socket.on("VICTIM_CALL",(function(){i.markers[0].icon="red.png",h.$emit("getPosition2",i.markers[0]),h.$emit("victimCall")}))},mounted:function(){var i=this;this.$refs.gmap.$mapPromise.then((function(t){var e=new google.maps.LatLngBounds,n=!0,o=!1,a=void 0;try{for(var s,l=i.markers[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var c=s.value;e.extend(c.position)}}catch(r){o=!0,a=r}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}t.fitBounds(e)}))},methods:{toggleInfoWindow:function(i,t){this.infoWindowPos=i.position,this.infoContent=this.getInfoWindowContent(i),this.currentMidx==t?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=t)},geolocation:function(){var i=this;navigator.geolocation.getCurrentPosition((function(t){i.currentLocation={lat:t.coords.latitude,lng:t.coords.longitude}}))},getInfoWindowContent:function(i,t){this.clickedPosition=i,h.$emit("getPosition",this.clickedPosition,this.countCall,this.clickedPosition.id,this.policeBusy);var e=JSON.stringify(i.img);return"police"===i.identity?(this.clickedVictim=!1,"<div>\n            <div >\n                <img  src=".concat(e,' align="left" width="128px" height="128px" class="imgMv">\n                <div class="policeFrontContents">이름    <span class="policeBackContents">').concat(i.name,'</span></div>\n               <div class="policeFrontContents">소속    <span class="policeBackContents">').concat(i.workArea,'</span></div>\n               <div class="policeFrontContents">계급   <span class="policeBackContents" >').concat(i.class,'</span></div>\n               <div class="policeFrontContents">혈액형    <span class="policeBackContents" style="padding-left:8px;">').concat(i.bloodType,'</span></div>\n            </div>\n          </div>\n          <div class="dv"></div>\n          </div>')):(this.clickedPolice=!1,this.clickedVictim=!0,"<div>\n            <div>\n                <img  src=".concat(e,' align="left" width="106.2px" height="141.6px" class="imgMv" >\n                <div class="contents-word">이름    <span class="contents-dword">').concat(i.name,'</span></div>\n               <div class="contents-word">나이    <span class="contents-dword">').concat(i.age,'</span></div>\n               <div class="contents-word">혈액형   <span class="contents-dword" style="padding-left:8px;">').concat(i.bloodType,'</span></div>\n               <div class="contents-word">정보    <span class="contents-dword">').concat(i.info,'</span></div>\n            </div>\n            <div class="divChange"></div>\n            </div>\n          </div>\n          </div>'))}},components:{NearMapModal:ei,NearChart:ci,NearMissionComplete:Z,NearMPopUp:J}},pi=ri,ui=(e("7426"),Object(d["a"])(pi,P,S,!1,null,null,null)),di=ui.exports,mi={components:{NearMenu:I,NearMap:di}},vi=mi,fi=(e("034f"),Object(d["a"])(vi,o,a,!1,null,null,null)),gi=fi.exports,hi=e("8c4f"),Ci=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"dv"},[i.isBefore?n("div",[i.victim|i.police|i.policeWay?n("div",{staticClass:"rightBox"},[n("div",{staticClass:"testline"},[i.victim?n("div",{staticClass:"firstDiv",style:i.red},[n("img",{staticClass:"imgMv",attrs:{src:e("2982"),width:"30px",align:"left"}})]):i.police?n("div",{staticClass:"firstDiv",style:i.purple},[n("img",{staticClass:"imgMv",attrs:{src:e("6d03"),width:"30px",align:"left"}})]):i.policeWay?n("div",{staticClass:"firstDiv",style:i.blue},[n("img",{staticClass:"imgMv",attrs:{src:e("5e84"),width:"30px",align:"left"}})]):i._e(),i.victim?n("div",{staticClass:"secondDiv"},[i._v(i._s(i.callInfo1))]):i.police?n("div",{staticClass:"secondDiv"},[i._v(i._s(i.callInfo3))]):i.policeWay?n("div",{staticClass:"secondDiv"},[i._v(i._s(i.callInfo2))]):i._e(),n("div",[i.victim?n("span",{staticClass:"thirdDiv"},[i._v(" "+i._s(i.victimName)+", "),n("span",[i._v(i._s(i.typeOfCall[0]))])]):i._e(),i.police?n("span",{staticClass:"thirdDiv"},[i._v(" "+i._s(i.victimWHO)+" "),n("span",[i._v("수동 신고")])]):i._e(),i.policeWay?n("span",{staticClass:"thirdDiv"},[i._v(" "+i._s(i.victimWHO)+" "),n("span",[i._v("수동 신고")])]):i._e()]),i.victim?n("span",{staticClass:"fourthDiv"},[i._v(i._s(i.currentSituation[0]))]):i.police?n("span",{staticClass:"fourthDiv"},[i._v(" "+i._s(i.policeName)+" "),n("span",[i._v(i._s(i.policeClass))]),n("span",[i._v("("+i._s(i.policeWorkArea)+")")]),n("span",{staticStyle:{"padding-left":"5px"}},[i._v(i._s(i.messages[1]))])]):i.policeWay?n("span",{staticClass:"fourthDiv"},[i._v(" "+i._s(i.policeName)+" "),n("span",[i._v(i._s(i.policeClass))]),n("span",[i._v("("+i._s(i.policeWorkArea)+")")]),n("span",{staticStyle:{"padding-left":"5px"}},[i._v(i._s(i.messages[3]))])]):i._e()])]):i._e()]):i.isDone?n("div",[n("div",[n("div",{staticClass:"rightBox"},[n("div",{staticClass:"testline"},[n("div",{staticClass:"Div1",style:i.finish},[n("img",{staticClass:"imgMv",attrs:{src:e("60b0"),width:"30px",align:"left"}})]),n("span",{staticClass:"Div2"},[i._v("사건완료")]),n("div",[n("span",{staticClass:"Div3"},[i._v(" "+i._s(i.victimName)+" "),n("span",[i._v(i._s(i.typeOfCall[0]))])])]),n("div",{staticClass:"Div4"},[n("span",{staticClass:"Div4"},[i._v(i._s(i.policeName))]),n("span",{staticStyle:{"padding-left":"5px"}},[i._v(i._s(i.policeClass))]),n("span",[i._v("("+i._s(i.policeWorkArea)+")")]),n("span",[i._v("담당")]),n("span")])])])])]):i.cancelCall?n("div",[n("div",[n("div",{staticClass:"rightBox"},[n("div",{staticClass:"testline"},[n("div",{staticClass:"Div1",style:i.finish},[n("img",{staticClass:"imgMv",attrs:{src:e("60b0"),width:"30px",align:"left"}})]),n("span",{staticClass:"Div2"},[i._v("신고취소")]),n("div",[n("span",{staticClass:"Div3"},[i._v(" 유승훈(남) "),n("span",[i._v(i._s(i.typeOfCall[0]))])])]),i._m(0)])])])]):i._e()])},_i=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"Div4"},[e("span",{staticClass:"Div4"},[i._v("박원형(남)")]),e("span",{staticStyle:{"padding-left":"5px"}},[i._v("경위")]),e("span",[i._v("(광진 경찰서)")]),e("span",[i._v("담당")]),e("span")])}],ki={data:function(){var i;return i={isBefore:!0,markers:[{id:0,name:"유승훈(남)",age:"27 (931027)",bloodType:"O형 (RH+)",position:{lat:37.550378,lng:127.073192},info:"조선실세 사건 증인 보호 중",img:"MrYoo.jpeg",report:!1,identity:"victim",icon:{url:"yellow.png"}},{id:1,name:"박원형(남)",workArea:"광진 경찰서",class:"경위",bloodType:"AB형(RH+)",position:{lat:37.545344,lng:127.07664},img:"Police.png",report:!1,waitingCall:!1,acceptCall:!1,finishCall:!1,identity:"police",icon:{url:"white.png"}}],newPosition:{},messages:["신고접수","출동 배정","출동 중","출동 승인"],currentSituation:["담당 경찰관이 배정되지 않았습니다."],typeOfCall:["수동 신고","자동 신고"],red:{backgroundColor:"#E60012",width:"15%",height:"100%",alignItem:"center",justifyContent:"center",position:"center"},purple:{backgroundColor:"#7E318E",idth:"15%",height:"100%",alignItem:"center",justifyContent:"center",position:"center"},blue:{backgroundColor:"#036EB8",idth:"15%",height:"100%",alignItem:"center",justifyContent:"center",position:"center"},victim:!1,police:!1,policeWay:!1,callInfo1:"",callInfo2:"",callInfo3:"",victimName:"",policeName:"",policeClass:"",policeWorkArea:"",victimWHO:"",isDone:!1,cancelCall:!1,marker:[],policeId:"",victimId:"",finish:{backgroundColor:"#707070",width:"15%",height:"50px",alignItem:"center",justifyContent:"center",position:"center"}},Object(L["a"])(i,"policeName",""),Object(L["a"])(i,"victimName",""),Object(L["a"])(i,"policeClass",""),Object(L["a"])(i,"policeWorkArea",""),Object(L["a"])(i,"whiteCall","white.png"),Object(L["a"])(i,"yellowCall","yellow.png"),Object(L["a"])(i,"policeBackID",""),Object(L["a"])(i,"victimBackID",""),i},created:function(){var i=this;h.$on("policeDONE",(function(t,e){i.policeId=e,i.policeName=t.name,i.policeClass=t.class,i.policeWorkArea=t.workArea})),h.$on("victimDONE",(function(t,e){i.victimId=e,i.victimName=t.name})),h.$on("JOBSDONE",(function(t,e){i.isBefore=!1,i.cancelCall=!1,i.isDone=!0,console.log("모든일이 끝났습니다! JOBS DONE!"),h.$emit("backYellow",e.id),h.$emit("backWhite",t.id),h.$emit("backPoliceButton"),h.$emit("backVictimButton"),h.$emit("doneCall"),h.$emit("FinishJob",t,e)})),h.$on("victim_no_need_help",(function(){i.isBefore=!1,i.cancelCall=!0,i.isDone=!1,h.$emit("victimSafeCallBack")}))},mounted:function(){var i=this;h.$on("getPosition2",(function(t){i.newPosition=t,i.isBefore=!0,i.isDone=!1,i.cancelCall=!1,"victim"===t.identity?(i.victim=!0,i.police=!1,i.policeWay=!1,i.callInfo1="신고 접수",i.victimName=t.name):"police"===t.identity&&(i.police=!1,i.policeWay=!0,i.victim=!1,i.callInfo2="출동 중",i.policeName=t.name,i.policeClass=t.class,i.policeWorkArea=t.workArea)})),h.$on("buttonPurple",(function(t,e){i.newPosition=t,"police"===t.identity&&(i.police=!0,i.policeWay=!1,i.victim=!1,i.callInfo3="확인 중",i.policeName=t.name,i.policeClass=t.class,i.policeWorkArea=t.workArea,i.victimWHO=e)}))}},yi=ki,bi=(e("c8ab"),Object(d["a"])(yi,Ci,_i,!1,null,"6f38d846",null)),wi=bi.exports;n["default"].use(hi["a"]);var Bi=new hi["a"]({mode:"history",routes:[{path:"/",redirect:"/flow"},{path:"/popup",name:"popup",component:J},{path:"/missionComplete",name:"missionComplete",component:Z},{path:"/flow",name:"flow",component:wi}]}),Oi=e("2f62");n["default"].use(Oi["a"]);var $i=new Oi["a"].Store({}),xi=e("755e"),Di=e("5f5b"),Ni=(e("f9e3"),e("2dd8"),e("da19"));n["default"].use(xi,{load:{key:"AIzaSyA0vOfiRA790kgJ4-7Rx22ZvJL2g4VHA-c",libraries:"places"}}),n["default"].use(Di["a"]),n["default"].use(Ni["a"]),n["default"].prototype.$eventBus=new n["default"],n["default"].prototype.$http=E.a,n["default"].config.productionTip=!1,new n["default"]({render:function(i){return i(gi)},router:Bi,store:$i}).$mount("#app")},"5ae1":function(i,t,e){"use strict";var n=e("2a26"),o=e.n(n);o.a},"5c6a":function(i,t,e){},"5e84":function(i,t,e){i.exports=e.p+"img/NumberThree.ea0d9f66.png"},"5f06":function(i,t,e){},"60b0":function(i,t,e){i.exports=e.p+"img/finish.0956fc9b.png"},"6d03":function(i,t,e){i.exports=e.p+"img/NumberTwo.91922fc0.png"},"6edf":function(i,t,e){"use strict";var n=e("1897"),o=e.n(n);o.a},7426:function(i,t,e){"use strict";var n=e("0688"),o=e.n(n);o.a},7507:function(i,t,e){},"7ef5":function(i,t,e){"use strict";var n=e("eff3"),o=e.n(n);o.a},"82d4":function(i,t,e){"use strict";var n=e("5c6a"),o=e.n(n);o.a},"85ec":function(i,t,e){},"8b0e":function(i,t,e){"use strict";var n=e("7507"),o=e.n(n);o.a},"90c1":function(i,t,e){"use strict";var n=e("336d"),o=e.n(n);o.a},ad56:function(i,t,e){},c8ab:function(i,t,e){"use strict";var n=e("ad56"),o=e.n(n);o.a},eff3:function(i,t,e){}});
//# sourceMappingURL=app.787ed5f7.js.map