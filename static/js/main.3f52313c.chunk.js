(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={radio__btn:"Form_radio__btn__2kgGj",title:"Form_title__2fXiF"}},19:function(e,t,n){e.exports={contacts__list:"Todolist_contacts__list__4zDXX",item:"Todolist_item__2uJZm"}},23:function(e,t,n){e.exports={label:"Filter_label__JiAEW",input:"Filter_input__3d3ET"}},33:function(e,t,n){},34:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),i=n.n(r),s=(n(32),n(33),n(13)),o=n(3),l=(n(34),n(18)),j=n(9),u=n(16),b=n.n(u),d=n(24),O=n(25),h=n(8),m=Object(O.a)({reducerPath:"contactsApi",tagTypes:["Contacts"],baseQuery:Object(h.d)({baseUrl:"https://61935e66d3ae6d0017da850e.mockapi.io/"}),endpoints:function(e){return{fetchContact:e.query({query:function(){return"/contacts"},providesTags:function(e){return e?[].concat(Object(l.a)(e.map((function(e){return{type:"Contacts",id:e.id}}))),[{type:"Contacts",id:"LIST"}]):[{type:"Contacts",id:"LIST"}]}}),addContacts:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:Object(d.a)({},e)}},invalidatesTags:[{type:"Contacts",id:"LIST"}]}),deleteContacts:e.mutation({query:function(e){return{url:"contacts/".concat(e),method:"DELETE"}},invalidatesTags:[{type:"Contacts",id:"LIST"}]})}}}),x=m.useFetchContactQuery,p=m.useAddContactsMutation,f=m.useDeleteContactsMutation,g=n(1);var v=function(e){var t=e.contact,n=p(),a=Object(j.a)(n,1)[0],r=Object(c.useState)(""),i=Object(j.a)(r,2),s=i[0],o=i[1],u=Object(c.useState)(""),d=Object(j.a)(u,2),O=d[0],h=d[1],m=Object(c.useState)("Other"),x=Object(j.a)(m,2),f=x[0],v=x[1];return Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.reduce((function(e,t){return[].concat(Object(l.a)(e),[t.name])}),[]),c=t.reduce((function(e,t){return[].concat(Object(l.a)(e),[t.phone])}),[]);n.includes(s)||c.includes(O)?alert("".concat(s,"  ").concat(O," is already ")):n.includes(s)?alert("".concat(s,"  is already ")):""!==s&&""!==O?(a({name:s,phone:O,association:f}),o(""),h(""),v("Other")):alert("Enter data")},className:b.a.m,children:[Object(g.jsx)("h2",{className:b.a.title,children:"Phonebook"}),Object(g.jsxs)("label",{className:b.a.form__name,children:["Name",Object(g.jsx)("input",{onChange:function(e){return o(e.currentTarget.value)},type:"text",value:s,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(g.jsxs)("label",{className:b.a.form__number,children:["Number",Object(g.jsx)("input",{onChange:function(e){return h(e.currentTarget.value)},type:"tel",value:O,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(g.jsxs)("div",{className:b.a.radio__btn,children:[Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"radio",name:"association",value:"Work",onChange:function(e){return v(e.currentTarget.value)},checked:"Work"===f}),"Work"]}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"radio",name:"association",value:"Family",onChange:function(e){return v(e.currentTarget.value)},checked:"Family"===f}),"Family"]}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"radio",name:"association",value:"Friends",onChange:function(e){return v(e.currentTarget.value)},checked:"Friends"===f}),"Friends"]}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"radio",name:"association",value:"Other",onChange:function(e){return v(e.currentTarget.value)},checked:"Other"===f}),"Other"]})]}),Object(g.jsx)("button",{type:"submit",children:"Add contacts"})]})},_=n(19),y=n.n(_),C=n(6),F=function(e){return e.getFilter.filter};var T=function(e){var t=e.contact,n=f(),a=Object(j.a)(n,2),r=a[0],i=a[1].isLoading,s=Object(C.e)(F),o=Object(c.useState)([]),l=Object(j.a)(o,2),u=l[0],b=l[1];return Object(c.useEffect)((function(){var e=s.toLowerCase();try{b(t.filter((function(t){return t.name.toLowerCase().includes(e)})))}catch(n){return n}}),[t,s]),Object(g.jsx)("ul",{className:y.a.contacts__list,children:u.map((function(e){var t=e.id,n=e.name,c=e.phone,a=e.association;return Object(g.jsxs)("li",{className:y.a.item,children:[" ",Object(g.jsxs)("p",{className:y.a.name__contact,children:["Association: ",a," | ",Object(g.jsxs)("span",{children:[" name: ",n," | "]}),Object(g.jsxs)("span",{children:["number: ",c," |"]})]}),Object(g.jsxs)("button",{className:y.a.btn,type:"button",onClick:function(){return r(t)},children:[" ",i?"Deleting...":"Delete"]})]},t)}))})},k=n(23),A=n.n(k),N=n(2),S=Object(N.createAction)("filter/value");var L=function(){var e=Object(C.d)(),t=Object(C.e)(F);return Object(g.jsxs)("label",{className:A.a.label,children:["Find contacts by name",Object(g.jsx)("input",{className:A.a.input,type:"text",value:t,onChange:function(t){return e(S(t.target.value))}})]})};var E=function(){var e=x().data;return Object(g.jsxs)("div",{children:[Object(g.jsx)(v,{contact:e}),Object(g.jsx)(L,{contact:e}),e&&Object(g.jsx)(T,{contact:e})]})};function w(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h2",{children:"HOMPAGE"}),Object(g.jsx)("form",{children:Object(g.jsx)("input",{})})]})}function q(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("h2",{children:"Login Form"})})}function z(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("h2",{children:"Register Form"})})}function D(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("header",{className:"App-header",children:Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)(s.b,{to:"/",children:"Home"})}),Object(g.jsx)("li",{children:Object(g.jsx)(s.b,{to:"/phonebook",children:"Phonebook"})}),Object(g.jsx)("li",{children:Object(g.jsx)(s.b,{to:"/login",children:"Login"})}),Object(g.jsx)("li",{children:Object(g.jsx)(s.b,{to:"/register",children:"Register"})})]})})}),Object(g.jsx)("main",{children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"/",element:Object(g.jsx)(w,{})}),Object(g.jsx)(o.a,{path:"/phonebook",element:Object(g.jsx)(E,{})}),Object(g.jsx)(o.a,{path:"/login",element:Object(g.jsx)(q,{})}),Object(g.jsx)(o.a,{path:"/register",element:Object(g.jsx)(z,{})})]})})]})}var P,I=n(12),J=n(27),M=n(14),R=n(5),W=Object(N.createReducer)("",Object(I.a)({},S,(function(e,t){return t.payload}))),Z=Object(R.combineReducers)({filter:W}),X=Object(N.configureStore)({reducer:(P={},Object(I.a)(P,m.reducerPath,m.reducer),Object(I.a)(P,"getFilter",Z),P),middleware:function(e){return e({serializableCheck:{ignoredActions:[M.a,M.f,M.b,M.c,M.d,M.e]}}).concat(m.middleware)},devTools:!1});Object(J.setupListeners)(X.dispatch),i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(C.a,{store:X,children:Object(g.jsx)(s.a,{children:Object(g.jsx)(D,{})})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.3f52313c.chunk.js.map