(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[13],{431:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},432:function(e,t,n){"use strict";var a=n(7),r=n(86),i=n(352),c=n(104),s=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(r.a)(e,o);return Object(s.jsx)(c.a,Object(a.a)(Object(a.a)({boxShadow:!0,shadow:"0px 4px 16px rgba(0, 0, 0, 0.25)",sx:{boxShadow:"0px 4px 16px rgba(0, 0, 0, 0.25)",border:"1px solid #CCCCCC",borderRadius:"24px",maxWidth:{xs:400,lg:384},margin:{xs:1.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(s.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},433:function(e,t,n){"use strict";var a=n(9),r=Object(a.a)("div")((function(e){e.theme;return{backgroundImage:"url(images/img_bg_login.png)",backgroundSize:"cover",minHeight:"100vh"}}));t.a=r},467:function(e,t,n){"use strict";var a=n(362),r=n(130),i=n(388),c=n(1);t.a=function(){return Object(c.jsxs)(a.a,{direction:"row",justifyContent:"space-between",children:[Object(c.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover"}),Object(c.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://codedthemes.com",target:"_blank",underline:"hover"})]})}},704:function(e,t,n){"use strict";n.r(t);var a=n(43),r=n(44),i=n(358),c=n(380),s=n(130),o=n(306),l=n(433),j=n(432),b=n(179),d=n(7),u=n(6),m=n(2),x=n.n(m),h=n(402),O=n(377),p=n(390),g=n(403),f=n(352),v=n(382),w=n(13),y=n(26),C=n(419),S=n(418),k=n(176),E=n(107),I=n(431),A=n(133),B=n(1),_=function(e){var t=Object.assign({},e),n=Object(r.a)(),a=Object(I.a)(),i=Object(w.d)(),c=Object(y.f)(),s=Object(E.a)().resetPassword;return Object(B.jsx)(S.a,{initialValues:{email:"",password:"",submit:null},validationSchema:C.b().shape({email:C.c().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=Object(u.a)(x.a.mark((function e(t,n){var r,o,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setErrors,o=n.setStatus,l=n.setSubmitting,e.prev=1,e.next=4,s(t.email);case 4:a.current&&(o({success:!0}),l(!1),i(Object(A.c)({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){c("/login",{replace:!0})}),1500)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),a.current&&(o({success:!1}),r({submit:e.t0.message}),l(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var a=e.errors,r=e.handleBlur,i=e.handleChange,c=e.handleSubmit,s=e.isSubmitting,o=e.touched,l=e.values;return Object(B.jsxs)("form",Object(d.a)(Object(d.a)({noValidate:!0,onSubmit:c},t),{},{children:[Object(B.jsxs)(h.a,{fullWidth:!0,error:Boolean(o.email&&a.email),sx:Object(d.a)({},n.typography.customInput),children:[Object(B.jsx)(O.a,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address / Username"}),Object(B.jsx)(p.a,{id:"outlined-adornment-email-forgot",type:"email",value:l.email,name:"email",onBlur:r,onChange:i,label:"Email Address / Username",inputProps:{}}),o.email&&a.email&&Object(B.jsx)(g.a,{error:!0,id:"standard-weight-helper-text-email-forgot",children:a.email})]}),a.submit&&Object(B.jsx)(f.a,{sx:{mt:3},children:Object(B.jsx)(g.a,{error:!0,children:a.submit})}),Object(B.jsx)(f.a,{sx:{mt:2},children:Object(B.jsx)(k.a,{children:Object(B.jsx)(v.a,{disableElevation:!0,disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send Mail"})})})]}))}})},z=n(467);t.default=function(){var e=Object(r.a)(),t=Object(E.a)().isLoggedIn,n=Object(i.a)(e.breakpoints.down("md"));return Object(B.jsx)(l.a,{children:Object(B.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(B.jsx)(c.a,{item:!0,xs:12,children:Object(B.jsx)(c.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(B.jsx)(c.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(B.jsx)(j.a,{children:Object(B.jsxs)(c.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(B.jsx)(c.a,{item:!0,sx:{mb:3},children:Object(B.jsx)(a.b,{to:"#",children:Object(B.jsx)(b.a,{})})}),Object(B.jsx)(c.a,{item:!0,xs:12,children:Object(B.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"center",textAlign:"center",spacing:2,children:[Object(B.jsx)(c.a,{item:!0,xs:12,children:Object(B.jsx)(s.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Forgot password?"})}),Object(B.jsx)(c.a,{item:!0,xs:12,children:Object(B.jsx)(s.a,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Enter your email address below and we'll send you password reset OTP."})})]})}),Object(B.jsx)(c.a,{item:!0,xs:12,children:Object(B.jsx)(_,{})}),Object(B.jsx)(c.a,{item:!0,xs:12,children:Object(B.jsx)(o.a,{})}),Object(B.jsx)(c.a,{item:!0,xs:12,children:Object(B.jsx)(c.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(B.jsx)(s.a,{component:a.b,to:t?"/pages/login/login3":"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),Object(B.jsx)(c.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(B.jsx)(z.a,{})})]})})}}}]);
//# sourceMappingURL=13.562e2873.chunk.js.map