"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[557],{1557:function(a,e,s){s.r(e),s.d(e,{default:function(){return M}});s(2791);var n=s(6139),t=s(704),i="dialogs_wrapper__2Vhxh",r="dialogs_newMessage__ruZqn",d="dialogs_newMessageText__4mLv6",l="dialogs_messageBtn__H17Mo",o="dialogItem_dialog__JrSej",m="dialogItem_link__YK4EJ",c="dialogItem_active__oNUqt",g="dialogItem_ava__5q1QU",u=s(1087),_=s(184),f=function(a){var e=a.avatar,s=a.id,n=a.name;return(0,_.jsxs)("li",{className:o,children:[(0,_.jsx)("img",{className:g,src:e,alt:"ava"}),(0,_.jsx)(u.OL,{to:"/dialogs/"+s,className:function(a){return a.isActive?c:m},children:n})]})},v="messageItem_odd__pZxp8",x="messageItem_even__-USfV",h=function(a){var e=a.id,s=a.message;return(0,_.jsx)("div",{className:e%2===0?v:x,children:s})},j=s(2854),p=s(8610),b=(0,p.D)(10),N=(0,t.Z)({form:"dialogs"})((function(a){var e=a.handleSubmit;return(0,_.jsxs)("form",{onSubmit:e,className:r,children:[(0,_.jsx)(n.Z,{component:j.I,name:"message",validate:[p.r,b],className:d,type:"text",placeholder:"your message..."}),(0,_.jsx)("button",{className:l,type:"submit",children:"Send"})]})})),k=function(a){var e=a.dialogsData,s=a.messagesData,n=a.addMessage,t=e.map((function(a){return(0,_.jsx)(f,{name:a.name,id:a.id,avatar:a.avatar},a.id)})),r=s.map((function(a){return(0,_.jsx)(h,{message:a.message,id:a.id},a.id)}));return(0,_.jsxs)("div",{className:i,children:[(0,_.jsx)("ul",{children:t}),(0,_.jsxs)("div",{children:[r,(0,_.jsx)(N,{onSubmit:function(a){console.log(a.message),n(a.message)}})]})]})},D=s(2807),I=s(8687),S=s(7781),w=s(1548),M=(0,S.qC)((0,I.$j)((function(a){return{dialogsData:a.dialogsPage.dialogsData,messagesData:a.dialogsPage.messagesData}}),(function(a){return{addMessage:function(e){a((0,D.k)(e))}}})),w.D)(k)}}]);
//# sourceMappingURL=557.5c31567b.chunk.js.map