"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[314],{2314:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r=t(2791),a=t(9434),s=t(3634),o=function(e){return e.contacts.items},i=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},u=t(9439),c=function(e){return e.filter},m=t(2732),d=t(2739),h=t(2817),b=t(6747),f=t(5206),p=t(5705),_="UpdateContactForm_form__928GT",x="UpdateContactForm_label__VnYi7",j="UpdateContactForm_input__rlPkT",v=t(184),C=function(e){var n=e.onClose,t=e.id,r=e.name,o=e.number,i=(0,a.I0)(),l=(0,p.TA)({id:t,initialValues:{name:r,number:o},onSubmit:function(e,r){var a=r.resetForm;i((0,s.Tk)({id:t,values:e})).unwrap().then((function(){n()})).catch((function(){return f.Am.error("Something went wrong. Please try again")})),a()}});return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("form",{className:_,onSubmit:l.handleSubmit,children:[(0,v.jsxs)("label",{className:x,id:"name",htmlFor:"name",children:["Name",(0,v.jsx)("input",{className:j,type:"text",name:"name",value:l.values.name,id:"name",onChange:l.handleChange,error:l.touched.name&&l.errors.name})]}),(0,v.jsxs)("label",{className:x,id:"number",htmlFor:"number",children:["Phone",(0,v.jsx)("input",{className:j,type:"tel",name:"number",value:l.values.number,id:"number",onChange:l.handleChange,error:l.touched.name&&l.errors.name})]}),(0,v.jsx)("button",{type:"submit",children:"Update contact"})]})})},g={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,zIndex:1e3,borderRadius:"15px"},N=function(e){var n=e.isOpenModal,t=e.onClose,r=e.id,a=e.name,s=e.number;return(0,v.jsx)(m.Z,{open:n,onClose:t,closeAfterTransition:!0,backdrop:d.Z,props:{timeout:500},"aria-labelledby":"spring-modal-name","aria-describedby":"spring-modal-number",children:(0,v.jsx)(h.Z,{in:n,children:(0,v.jsx)(b.Z,{sx:g,children:(0,v.jsx)(C,{onClose:t,id:r,name:a,number:s})})})})},F="ContactsList_list__mmE3Y",y="ContactsList_item__6gc1x",k="ContactsList_updateBtn__Ncq-d",w="ContactsList_name__cbzy1",L="ContactsList_number__9xIVj";function S(){var e=(0,a.v9)(o),n=(0,a.v9)(c),t=(0,a.I0)(),i=(0,r.useState)(!1),l=(0,u.Z)(i,2),m=l[0],d=l[1],h=function(){return d(!0)},b=function(){return d(!1)},f=function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e}(e,n);return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ul",{className:F,children:f.map((function(e){var n=e.id,r=e.name,a=e.number;return(0,v.jsxs)("li",{className:y,children:[(0,v.jsx)("button",{type:"button",onClick:h,className:k,children:"Update"}),(0,v.jsx)(N,{isOpenModal:m,onClose:b,id:n,name:r,number:a}),(0,v.jsx)("p",{className:w,children:r}),(0,v.jsx)("p",{className:L,children:a}),(0,v.jsx)("button",{type:"button",onClick:function(){return function(e){return t((0,s.GK)(e))}(n)},children:"Delete"})]},n)}))})})}var T=t(1634),I="Filter_label__vEd1E",P="Filter_input__N7T3z";function Z(){var e=(0,a.v9)(c),n=(0,a.I0)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("label",{className:I,name:"filter",value:"filterValue",htmlFor:"filter",children:["Find contact by name",(0,v.jsx)("input",{className:P,type:"text",value:e,id:"filter",onChange:function(e){return n((0,T.T)(e.target.value))}})]})})}var A=t(2007),U=t.n(A),V="ContactForm_form__dhl+T",q="ContactForm_label__-cVXI",E="ContactForm_input__Bl93P";function R(){var e=(0,r.useState)(""),n=(0,u.Z)(e,2),t=n[0],i=n[1],l=(0,r.useState)(""),c=(0,u.Z)(l,2),m=c[0],d=c[1],h=(0,a.v9)(o),b=(0,a.I0)(),f=function(e){e.preventDefault();if(function(e){return h.some((function(n){return n.name.toLowerCase()===e.toLowerCase()}))}(t))return alert("".concat(t," is already in contacts"));!function(e,n){b((0,s.uK)({name:e,number:n}))}(t,m),i(""),d("")};return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("form",{className:V,onSubmit:function(e){return f(e)},autoComplete:"off",children:[(0,v.jsxs)("label",{className:q,id:"name",htmlFor:"name",children:["Name",(0,v.jsx)("input",{className:E,type:"text",name:"name",value:t,id:"name",onChange:function(e){return i(e.target.value)}})]}),(0,v.jsxs)("label",{className:q,id:"number",htmlFor:"number",children:["Phone",(0,v.jsx)("input",{className:E,type:"tel",name:"number",value:m,id:"number",onChange:function(e){return d(e.target.value)}})]}),(0,v.jsx)("button",{type:"submit",disabled:!(t&&m),children:"Add contact"})]})})}R.propTyps={contacts:U().arrayOf(U().object).isRequired,onAddContact:U().func.isRequired};var z="ContactsPage_section__WlQMx";function M(){var e=(0,a.I0)(),n=(0,a.v9)(i),t=(0,a.v9)(o),u=(0,a.v9)(l);return(0,r.useEffect)((function(){e((0,s.yF)())}),[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:z,children:[(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)(R,{}),n&&!u&&(0,v.jsx)("b",{children:"Request in progress..."})]}),t.length?(0,v.jsxs)("div",{className:z,children:[(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)(Z,{}),(0,v.jsx)(S,{})]}):null]})}}}]);
//# sourceMappingURL=314.9042b92c.chunk.js.map