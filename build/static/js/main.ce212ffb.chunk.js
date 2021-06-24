(this["webpackJsonpcontact-list-redux"]=this["webpackJsonpcontact-list-redux"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(5),r=a.n(l),s=(a(17),a(18),a(7)),o=a(3),i=(a(23),function(){return{type:"GET_ALL_CONTACTS"}}),d=a(2),b=a(0),j=Object(o.b)((function(e){return{contacts:e.contacts,contact:e.contact}}),(function(e){return{addContact:function(t){return e(function(e){return{type:"ADD_CONTACT",payload:e}}(t))},editContact:function(t,a){return e(function(e,t){return{type:"EDIT_CONTACT",payload:e,id:t}}(t,a))}}}))((function(e){var t=e.addContact,a=e.editContact,c=e.editContactData;Object(n.useEffect)((function(){j(c)}),[c]);var l=Object(n.useRef)(),r=Object(n.useState)({name:"",pno:"",mail:""}),o=Object(s.a)(r,2),i=o[0],j=o[1],u=function(e,t){var a=Object(d.a)({},i);a[e]=t,j(a)};return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"modal-dialog modal-dialog-center",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Add / Edit Contact"}),Object(b.jsx)("button",{ref:l,type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Name"}),Object(b.jsx)("input",{type:"name",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"John deo",value:i.name,onChange:function(e){return u("name",e.target.value)}})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"exampleInputPassword2",className:"form-label",children:"Number"}),Object(b.jsx)("input",{type:"number",className:"form-control",id:"exampleInputPassword1",placeholder:"+91 1234567890",value:i.pno,onChange:function(e){return u("pno",e.target.value)}})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"E-mail"}),Object(b.jsx)("input",{type:"email",placeholder:"johndeo@gmail.com",className:"form-control",id:"exampleInputPassword2",value:i.mail,onChange:function(e){return u("mail",e.target.value)}})]})]})}),Object(b.jsxs)("div",{className:"modal-footer",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancel"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return function(e){if(null!==e.id&&void 0!==e.id){a(e,e.id);var n=Object(d.a)({},e);n.id=null,j(n)}else t(e);j({name:"",pno:"",mail:""}),l.current.click()}(i)},children:"Submit"})]})]})})})})),u=Object(o.b)((function(e){return{contacts:e.contacts,contact:e.contact}}),(function(e){return{getAllContacts:function(){return e(i())},getSingleContact:function(t){return e(function(e){return{type:"GET_SINGLE_CONTACT",index:e}}(t))},deleteContact:function(t){return e({type:"DELETE_CONTACT",id:t})}}}))((function(e){var t=e.getAllContacts,a=e.contacts,c=e.contact,l=e.getSingleContact,r=e.deleteContact,s=e.value;Object(n.useEffect)((function(){t()}),[t]);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"container d-flex flex-row justify-content-between mt-4",children:[Object(b.jsx)("h1",{children:"All Contacts"}),Object(b.jsx)("button",{className:"btn btn-danger","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"+Add Contact"})]}),Object(b.jsxs)("div",{className:"container mt-4",children:[0===a.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})).length&&Object(b.jsx)("h3",{className:"text-danger text-center",children:"No Contacts available"}),a.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})).length>0&&Object(b.jsxs)("table",{className:"table table-info container",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"# S.No"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Number"}),Object(b.jsx)("th",{children:"E-mail"}),Object(b.jsx)("th",{children:"Actions"})]})}),Object(b.jsx)("tbody",{children:a.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})).map((function(e,t){return Object(b.jsxs)("tr",{className:"table-dark",children:[Object(b.jsx)("th",{children:t+1}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.pno}),Object(b.jsx)("td",{children:e.mail}),Object(b.jsx)("td",{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:"btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:function(){return l(t)},children:"Edit"}),"\xa0\xa0 \xa0",Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){return function(e){window.confirm("Are you Sure to delete")&&(r(e),console.log(c))}(t)},children:"Delete"})]})})]},t+(new Date).getTime())}))})]}),Object(b.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)(j,{editContactData:c})})]})]})})),m=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"/",children:"Contact App"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),Object(b.jsx)("form",{className:"d-flex",children:Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search for contact...","aria-label":"Search",value:a,onChange:function(e){c(e.target.value)}})})]})]})}),Object(b.jsx)(u,{value:a})]})};var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(m,{})})},h=a(12),x=a(8),p={contacts:[{name:"Ravi",pno:7702943670,mail:"mareboinaravi446@gmail.com"}],contact:{}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_CONTACTS":return Object(d.a)({},e);case"ADD_CONTACT":var a=Object(x.a)(e.contacts);return a.push(t.payload),Object(d.a)(Object(d.a)({},e),{},{contacts:a});case"EDIT_CONTACT":var n=Object(x.a)(e.contacts);return n[t.id]=t.payload,Object(d.a)(Object(d.a)({},e),{},{contacts:n});case"DELETE_CONTACT":var c=Object(x.a)(e.contacts);return c.splice(t.id,1),Object(d.a)(Object(d.a)({},e),{},{contacts:c});case"GET_SINGLE_CONTACT":return Object(d.a)(Object(d.a)({},e),{},{contact:Object(d.a)(Object(d.a)({},e.contacts[t.index]),{},{id:t.index})});default:return e}},v=Object(h.a)(f);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(o.a,{store:v,children:Object(b.jsx)(O,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ce212ffb.chunk.js.map