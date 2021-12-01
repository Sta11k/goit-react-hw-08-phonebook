(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{17:function(e,t,n){e.exports={register__list:"Register_register__list__1x8yg",register__label:"Register_register__label__j8nCc",register__button:"Register_register__button__23myr"}},20:function(e,t,n){e.exports={radio__btn:"Form_radio__btn__2kgGj",title:"Form_title__2fXiF",submit:"Form_submit__2wKgn"}},25:function(e,t,n){e.exports={register__list:"Login_register__list__1jYnY",register__label:"Login_register__label__3RZVj",login__button:"Login_login__button__IY-OJ"}},27:function(e,t,n){e.exports={contacts__list:"Todolist_contacts__list__4zDXX",item:"Todolist_item__2uJZm"}},28:function(e,t,n){e.exports={label:"Filter_label__JiAEW",input:"Filter_input__3d3ET",filter:"Filter_filter__2j-m6"}},31:function(e,t,n){e.exports={nav:"Navigation_nav__38rFF",link:"Navigation_link__2T-RE"}},32:function(e,t,n){e.exports={user__button:"UserMenu_user__button__3PHo6",userMenu:"UserMenu_userMenu__38yKK"}},34:function(e,t,n){e.exports={phonebook:"Phonebook_phonebook__33LPr"}},38:function(e,t,n){e.exports={home:"Home_home__1U3PV"}},40:function(e,t,n){e.exports={header:"AppBAr_header__5iyXC"}},50:function(e,t,n){},51:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),s=n.n(c),i=(n(49),n(50),n(4)),o=(n(51),n(34)),u=n.n(o),l=n(24),b=n(7),j=n(20),d=n.n(j),h=n(5),O=n(35),p=n(11),m=Object(O.a)({reducerPath:"contactsApi",tagTypes:["Contacts"],baseQuery:Object(p.d)({baseUrl:"https://61935e66d3ae6d0017da850e.mockapi.io/"}),endpoints:function(e){return{fetchContact:e.query({query:function(){return"/contacts"},providesTags:function(e){return e?[].concat(Object(l.a)(e.map((function(e){return{type:"Contacts",id:e.id}}))),[{type:"Contacts",id:"LIST"}]):[{type:"Contacts",id:"LIST"}]}}),addContacts:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:Object(h.a)({},e)}},invalidatesTags:[{type:"Contacts",id:"LIST"}]}),deleteContacts:e.mutation({query:function(e){return{url:"contacts/".concat(e),method:"DELETE"}},invalidatesTags:[{type:"Contacts",id:"LIST"}]})}}}),f=m.useFetchContactQuery,g=m.useAddContactsMutation,_=m.useDeleteContactsMutation,x=n(1);var v=function(e){var t=e.contact,n=g(),a=Object(b.a)(n,1)[0],c=Object(r.useState)(""),s=Object(b.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(""),j=Object(b.a)(u,2),h=j[0],O=j[1],p=Object(r.useState)("Other"),m=Object(b.a)(p,2),f=m[0],_=m[1];return Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.reduce((function(e,t){return[].concat(Object(l.a)(e),[t.name])}),[]),r=t.reduce((function(e,t){return[].concat(Object(l.a)(e),[t.phone])}),[]);n.includes(i)||r.includes(h)?alert("".concat(i,"  ").concat(h," is already ")):n.includes(i)?alert("".concat(i,"  is already ")):""!==i&&""!==h?(a({name:i,phone:h,association:f}),o(""),O(""),_("Other")):alert("Enter data")},className:d.a.m,children:[Object(x.jsx)("h2",{className:d.a.title,children:"Phonebook"}),Object(x.jsxs)("label",{className:d.a.form__name,children:["Name:"," ",Object(x.jsx)("input",{onChange:function(e){return o(e.currentTarget.value)},type:"text",value:i,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(x.jsxs)("label",{className:d.a.form__number,children:[" ","Number:"," ",Object(x.jsx)("input",{onChange:function(e){return O(e.currentTarget.value)},type:"tel",value:h,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(x.jsxs)("div",{className:d.a.radio__btn,children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"radio",name:"association",value:"Work",onChange:function(e){return _(e.currentTarget.value)},checked:"Work"===f}),"Work"]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"radio",name:"association",value:"Family",onChange:function(e){return _(e.currentTarget.value)},checked:"Family"===f}),"Family"]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"radio",name:"association",value:"Friends",onChange:function(e){return _(e.currentTarget.value)},checked:"Friends"===f}),"Friends"]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"radio",name:"association",value:"Other",onChange:function(e){return _(e.currentTarget.value)},checked:"Other"===f}),"Other"]})]}),Object(x.jsx)("button",{className:d.a.submit,type:"submit",children:"Add contacts"})]})},y=n(27),k=n.n(y),N=n(66),w=(n(60),n(3)),C=function(e){return e.getFilter.filter};var A=function(e){var t=e.contact,n=_(),a=Object(b.a)(n,2),c=a[0],s=a[1].isLoading,i=Object(w.e)(C),o=Object(r.useState)([]),u=Object(b.a)(o,2),l=u[0],j=u[1];return Object(r.useEffect)((function(){var e=i.toLowerCase();try{j(t.filter((function(t){return t.name.toLowerCase().includes(e)})))}catch(n){return n}}),[t,i]),Object(x.jsx)("ul",{className:k.a.contacts__list,children:l.map((function(e){var t=e.id,n=e.name,r=e.phone,a=e.association;return Object(x.jsxs)("li",{className:k.a.item,children:[" ",Object(x.jsxs)("p",{className:k.a.name__contact,children:["Association: ",a," | ",Object(x.jsxs)("span",{children:[" name: ",n," | "]}),Object(x.jsxs)("span",{children:["number: ",r," |"]})]}),Object(x.jsx)(N.a,{variant:"outline-secondary",type:"button",onClick:function(){return c(t)},children:s?"Deleting...":"Delete"})," "]},t)}))})},S=n(28),T=n.n(S),F=n(2),L=Object(F.createAction)("filter/value");var P=function(){var e=Object(w.d)(),t=Object(w.e)(C);return Object(x.jsx)("div",{className:T.a.filter,children:Object(x.jsx)("label",{className:T.a.label,children:Object(x.jsx)("input",{placeholder:"Find contacts by name",className:T.a.input,type:"text",value:t,onChange:function(t){return e(L(t.target.value))}})})})};var E=function(){var e=f().data;return Object(x.jsxs)("div",{className:u.a.phonebook,children:[Object(x.jsx)(v,{contact:e}),Object(x.jsx)(P,{contact:e}),e&&Object(x.jsx)(A,{contact:e})]})},R=n(38),z=n.n(R);function M(){return Object(x.jsx)("div",{className:z.a.home,children:Object(x.jsx)("h2",{children:"HOMPAGE"})})}var D=n(15),J=(n(33),n(25)),W=n.n(J),q=n(16),B=n.n(q),I=n(26),U="https://connections-api.herokuapp.com",V=Object(F.createAsyncThunk)("users/register",function(){var e=Object(I.a)(B.a.mark((function e(t,n){var r,a,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,n.getState,e.prev=1,e.next=4,fetch(U+"/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(a=e.sent,console.log("response.status",a.status),201===a.status){e.next=9;break}throw D.b.error("User creation error! Please try again!"),new Error(400);case 9:return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c);case 15:e.prev=15,e.t0=e.catch(1),r({error:e.t0.message}),500===e.t0.response.status?D.b.error("Server error! Please try later!"):D.b.error("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,n){return e.apply(this,arguments)}}()),H=Object(F.createAsyncThunk)("users/login",function(){var e=Object(I.a)(B.a.mark((function e(t,n){var r,a,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,n.getState,e.prev=1,e.next=4,fetch(U+"/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(200===(a=e.sent).status){e.next=8;break}throw D.b.error("User error! Please try again!"),new Error(400);case 8:return e.next=10,a.json();case 10:return c=e.sent,e.abrupt("return",c);case 14:e.prev=14,e.t0=e.catch(1),r({error:e.t0.message}),500===e.t0.response.status?D.b.error("Server error! Please try later!"):D.b.error("Something went wrong!");case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}()),Z=Object(F.createAsyncThunk)("users/Current",function(){var e=Object(I.a)(B.a.mark((function e(t,n){var r,a,c,s,i,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.rejectWithValue,a=n.getState,c=a(),s=c.auth.token){e.next=5;break}throw new Error(200);case 5:return e.prev=5,e.next=8,fetch(U+"/users/Current",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)}});case 8:return i=e.sent,e.next=11,i.json();case 11:return o=e.sent,e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(5),r({error:e.t0.message});case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t,n){return e.apply(this,arguments)}}()),X=Object(F.createAsyncThunk)("users/logout",function(){var e=Object(I.a)(B.a.mark((function e(t,n){var r,a,c,s,i;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.rejectWithValue,a=n.getState,c=a(),s=c.auth.token){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch(U+"/users/logout",{method:"POST",headers:{Authorization:" Bearer ".concat(s)}});case 8:i=e.sent,console.log("response",i),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),r({error:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}());function G(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(b.a)(c,2),i=s[0],o=s[1],u=Object(w.d)(),l=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":a(r);break;case"password":o(r);break;default:alert("Check input name")}},j=function(){a(""),o("")};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{className:"register",onSubmit:function(e){e.preventDefault(),u(H({email:n,password:i})),j()},children:[Object(x.jsxs)("ul",{className:W.a.register__list,children:[Object(x.jsx)("li",{className:"register__item",children:Object(x.jsxs)("label",{className:W.a.register__label,children:["Email",Object(x.jsx)("input",{type:"text",name:"email",value:n,onChange:l,placeholder:"email"})]})}),Object(x.jsx)("li",{className:"register__item",children:Object(x.jsxs)("label",{className:W.a.register__label,children:[" ","Password",Object(x.jsx)("input",{type:"text",name:"password",onChange:l,value:i,placeholder:"password"})]})})]}),Object(x.jsx)("button",{type:"submit",className:W.a.login__button,children:"Login"})]}),Object(x.jsx)(D.a,{})]})}var K=n(17),Y=n.n(K);function Q(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(b.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(""),l=Object(b.a)(u,2),j=l[0],d=l[1],h=Object(w.d)(),O=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"email":o(r);break;case"password":d(r);break;default:alert("Check input name")}},p=function(){a(""),o(""),d("")};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{className:"register",onSubmit:function(e){e.preventDefault(),h(V({name:n,email:i,password:j})),p()},children:[Object(x.jsxs)("ul",{className:Y.a.register__list,children:[Object(x.jsx)("li",{className:Y.a.register__item,children:Object(x.jsxs)("label",{className:Y.a.register__label,children:["Name",Object(x.jsx)("input",{type:"text",name:"name",value:n,onChange:O,placeholder:"name"})]})}),Object(x.jsx)("li",{className:Y.a.register__item,children:Object(x.jsxs)("label",{className:Y.a.register__label,children:["Email",Object(x.jsx)("input",{type:"text",name:"email",value:i,onChange:O,placeholder:"email"})]})}),Object(x.jsx)("li",{className:Y.a.register__item,children:Object(x.jsxs)("label",{className:Y.a.register__label,children:[" ","Password",Object(x.jsx)("input",{type:"text",name:"password",onChange:O,value:j,placeholder:"password"})]})})]}),Object(x.jsx)("button",{type:"submit",className:Y.a.register__button,children:"add"})]}),Object(x.jsx)(D.a,{})]})}var $=function(e){return e.auth.isAuth},ee=function(e){return e.auth.isRefresh},te=function(e){return e.auth.user.name};function ne(e){var t=e.component,n=Object(w.e)($);return Object(x.jsx)(x.Fragment,{children:n?Object(x.jsx)(i.a,{to:"/"}):Object(x.jsx)(t,{})})}function re(e){var t=e.component,n=Object(w.e)($);return console.log("PrivateRoute",n),Object(x.jsx)(x.Fragment,{children:n?Object(x.jsx)(t,{}):Object(x.jsx)(i.a,{to:"/login"})})}var ae=n(13),ce=n(31),se=n.n(ce);var ie=function(){var e=Object(w.e)($);return Object(x.jsxs)("nav",{className:se.a.nav,children:[Object(x.jsx)(ae.b,{className:se.a.link,to:"/",children:"Home"}),e&&Object(x.jsx)(ae.b,{to:"/phonebook",children:"Phonebook"})]})},oe=n(32),ue=n.n(oe);function le(){var e=Object(w.d)(),t=Object(w.e)(te);return Object(x.jsxs)("div",{className:ue.a.userMenu,children:[Object(x.jsxs)("span",{className:ue.a.user__button,children:["Hello... ",t||" "]}),Object(x.jsx)(N.a,{color:"FFFFFF",variant:"info",type:"button",onClick:function(){console.log("click"),e(X())},children:"Log out"})]})}var be=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(ae.b,{to:"/register",style:{borderRadius:35,backgroundColor:"rgb(212, 9, 145)",color:"white",padding:"1px 25px",marginRight:"10px",fontSize:"16px"},children:"Sign up"}),Object(x.jsx)(ae.b,{to:"/login",style:{borderRadius:35,backgroundColor:"rgb(212, 9, 145)",color:"white",padding:"1px 25px",fontSize:"16px"},children:"Log in"})]})},je=n(40),de=n.n(je);function he(){var e=Object(w.e)($);return console.log("AppBar",e),Object(x.jsxs)("header",{className:de.a.header,children:[Object(x.jsx)(ie,{}),e?Object(x.jsx)(le,{}):Object(x.jsx)(be,{})]})}function Oe(){var e=Object(w.d)(),t=Object(w.e)(ee);return Object(r.useEffect)((function(){e(Z())}),[e]),!t&&Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(he,{}),Object(x.jsx)("main",{children:Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{path:"/",element:Object(x.jsx)(M,{}),redirectTo:"/Phonebook"}),Object(x.jsx)(i.b,{path:"/phonebook",isAuth:false,element:Object(x.jsx)(re,{component:E})}),Object(x.jsx)(i.b,{path:"/login",element:Object(x.jsx)(ne,{component:G})}),Object(x.jsx)(i.b,{path:"/register",element:Object(x.jsx)(ne,{isAuth:false,component:Q})})]})})]})}var pe,me,fe=n(41),ge=n(8),_e=n(43),xe=Object(F.createSlice)({name:"auth",initialState:{user:{name:"",email:""},token:"",error:null,isLoading:!1,isAuth:!1,isRefresh:!1},extraReducers:(pe={},Object(ge.a)(pe,V.pending,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0})})),Object(ge.a)(pe,V.fulfilled,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1,user:t.payload.user,token:t.payload.token,isAuth:!!t.payload.token})})),Object(ge.a)(pe,V.rejected,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1,error:t.payload,isAuth:!1})})),Object(ge.a)(pe,H.pending,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0,isAuth:!1})})),Object(ge.a)(pe,H.fulfilled,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1,user:t.payload.user,token:t.payload.token,isAuth:!!t.payload.token})})),Object(ge.a)(pe,H.rejected,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1,error:t.payload,isAuth:!1})})),Object(ge.a)(pe,Z.pending,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0,isRefresh:!0})})),Object(ge.a)(pe,Z.fulfilled,(function(e,t,n){return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1,user:t.payload,isRefresh:!1,isAuth:""!==n||"false"})})),Object(ge.a)(pe,Z.rejected,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1,isAuth:!1,error:t.payload,isRefresh:!1})})),Object(ge.a)(pe,X.pending,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0,isAuth:!1})})),Object(ge.a)(pe,X.fulfilled,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{isAuth:!1,isLoading:!1,user:{name:"",email:""},token:""})})),Object(ge.a)(pe,X.rejected,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1,error:t.payload,isAuth:!1})})),pe)}).reducer,ve=n(18),ye=n(42),ke=n.n(ye),Ne=n(9),we=Object(F.createReducer)("",Object(ge.a)({},L,(function(e,t){return t.payload}))),Ce=Object(Ne.combineReducers)({filter:we}),Ae={key:"authToken",storage:ke.a,whitelist:["token"]},Se=Object(ve.g)(Ae,xe),Te=Object(F.configureStore)({reducer:(me={},Object(ge.a)(me,m.reducerPath,m.reducer),Object(ge.a)(me,"auth",Se),Object(ge.a)(me,"getFilter",Ce),me),middleware:function(e){return e({serializableCheck:{ignoredActions:[ve.a,ve.f,ve.b,ve.c,ve.d,ve.e]}}).concat(m.middleware)},devTools:!1});Object(_e.setupListeners)(Te.dispatch);var Fe=Object(ve.h)(Te);s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(w.a,{store:Te,children:Object(x.jsx)(fe.a,{loading:null,persistor:Fe,children:Object(x.jsx)(ae.a,{children:Object(x.jsx)(Oe,{})})})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.2c094552.chunk.js.map