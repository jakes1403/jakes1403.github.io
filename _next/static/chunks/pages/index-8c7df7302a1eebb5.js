(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5030)}])},6304:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return o}});var n=t(5893),a=t(6253),s=t(5336),i=t(9479);t(7294);let l=e=>{let{children:r}=e;return(0,n.jsx)("div",{className:"bg-gradient-to-r from-red-900 via-red-600 to-orange-500 min-h-screen neon-effect",children:r})};function o(e){let{children:r}=e;return(0,n.jsxs)(l,{children:[(0,n.jsxs)(a.R,{children:[(0,n.jsx)(s.H,{children:(0,n.jsx)("p",{className:"font-bold text-inherit",children:"JacobsDevBlog"})}),(0,n.jsx)(i.U,{className:"hidden sm:flex gap-4",justify:"center"}),(0,n.jsx)(i.U,{justify:"end"})]}),r]})}},5030:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return _}});var n=t(5893),a=t(5837),s=t(3468),i=t(5607),l=t(3295),o=t(9869),c=(0,i.Gp)((e,r)=>{var t;let{as:a,className:i,children:c,...d}=e,u=(0,l.gy)(r),{slots:f,classNames:h}=(0,s.R)(),x=(0,o.W)(null==h?void 0:h.body,i);return(0,n.jsx)(a||"div",{ref:u,className:null==(t=f.body)?void 0:t.call(f,{class:x}),...d,children:c})});c.displayName="NextUI.CardBody";var d=t(9488),u=t(5512),f=(0,d.tv)({base:["relative inline-flex items-center outline-none tap-highlight-transparent",...u.Dh],variants:{size:{sm:"text-small",md:"text-medium",lg:"text-large"},color:{foreground:"text-foreground",primary:"text-primary",secondary:"text-secondary",success:"text-success",warning:"text-warning",danger:"text-danger"},underline:{none:"no-underline",hover:"hover:underline",always:"underline",active:"active:underline",focus:"focus:underline"},isBlock:{true:["px-2","py-1","hover:after:opacity-100","after:content-['']","after:inset-0","after:opacity-0","after:w-full","after:h-full","after:rounded-xl","after:transition-background","after:absolute"],false:"hover:opacity-80 active:opacity-disabled transition-opacity"},isDisabled:{true:"opacity-disabled cursor-default pointer-events-none"},disableAnimation:{true:"after:transition-none transition-none"}},compoundVariants:[{isBlock:!0,color:"foreground",class:"hover:after:bg-foreground/10"},{isBlock:!0,color:"primary",class:"hover:after:bg-primary/20"},{isBlock:!0,color:"secondary",class:"hover:after:bg-secondary/20"},{isBlock:!0,color:"success",class:"hover:after:bg-success/20"},{isBlock:!0,color:"warning",class:"hover:after:bg-warning/20"},{isBlock:!0,color:"danger",class:"hover:after:bg-danger/20"},{underline:["hover","always","active","focus"],class:"underline-offset-4"}],defaultVariants:{color:"primary",size:"md",isBlock:!1,underline:"none",isDisabled:!1}}),h=t(3136),x=t(2226),m=t(2433),v=t(1080),g=t(8145),p=t(6733),b=t(7243),y=t(9037),j=t(262),k=t(7294),N=e=>(0,n.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,n.jsx)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),(0,n.jsx)("path",{d:"M15 3h6v6"}),(0,n.jsx)("path",{d:"M10 14L21 3"})]}),w=(0,i.Gp)((e,r)=>{let{Component:t,children:a,showAnchorIcon:s,anchorIcon:o=(0,n.jsx)(N,{className:"flex mx-1 text-current self-center"}),getLinkProps:c}=function(e){var r,t,n,a;let s=(0,p.w)(),[o,c]=(0,i.oe)(e,f.variantKeys),{ref:d,as:u,children:N,anchorIcon:w,isExternal:B=!1,showAnchorIcon:_=!1,autoFocus:P=!1,className:D,onPress:C,onPressStart:T,onPressEnd:E,onClick:L,...I}=o,M=(0,l.gy)(d),A=null!=(t=null!=(r=null==e?void 0:e.disableAnimation)?r:null==s?void 0:s.disableAnimation)&&t,{linkProps:O}=function(e,r){let{elementType:t="a",onPress:n,onPressStart:a,onPressEnd:s,onClick:i,isDisabled:l,...o}=e,c={};"a"!==t&&(c={role:"link",tabIndex:l?void 0:0});let{focusableProps:d}=(0,v.k)(e,r),{pressProps:u,isPressed:f}=(0,g.r)({onPress:n,onPressStart:a,onPressEnd:s,isDisabled:l,ref:r}),p=(0,h.z)(o,{labelable:!0,isLink:"a"===t}),b=(0,x.d)(d,u),y=(0,m.tv)(),j=(0,m.eY)(e);return{isPressed:f,linkProps:(0,x.d)(p,j,{...b,...c,"aria-disabled":l||void 0,"aria-current":e["aria-current"],onClick:r=>{var t;null==(t=u.onClick)||t.call(u,r),i&&i(r),!y.isNative&&r.currentTarget instanceof HTMLAnchorElement&&r.currentTarget.href&&!r.isDefaultPrevented()&&(0,m.b0)(r.currentTarget,r)&&e.href&&(r.preventDefault(),y.open(r.currentTarget,r,e.href,e.routerOptions))}})}}({...I,onPress:C,onPressStart:T,onPressEnd:E,onClick:L,isDisabled:e.isDisabled,elementType:`${u}`},M),{isFocused:U,isFocusVisible:z,focusProps:G}=(0,b.F)({autoFocus:P});B&&(I.rel=null!=(n=I.rel)?n:"noopener noreferrer",I.target=null!=(a=I.target)?a:"_blank");let H=(0,k.useMemo)(()=>f({...c,disableAnimation:A,className:D}),[(0,y.Xx)(c),A,D]);return{Component:u||"a",children:N,anchorIcon:w,showAnchorIcon:_,getLinkProps:(0,k.useCallback)(()=>({ref:M,className:H,"data-focus":(0,j.PB)(U),"data-disabled":(0,j.PB)(e.isDisabled),"data-focus-visible":(0,j.PB)(z),...(0,x.d)(G,O,I)}),[H,U,z,G,O,I])}}({ref:r,...e});return(0,n.jsx)(t,{...c(),children:(0,n.jsxs)(n.Fragment,{children:[a,s&&o]})})});w.displayName="NextUI.Link";var B=t(6304);function _(){let[e,r]=(0,k.useState)(0);(0,k.useEffect)(()=>{let e=setInterval(()=>{r(e=>e+1)},1e3);return()=>clearInterval(e)},[]);let t="Jacob's Dev Blog";return e%2==0&&(t+="_"),(0,n.jsx)(B.default,{children:(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center h-screen",children:[(0,n.jsx)(a.w,{isBlurred:!0,className:"p-12 w-[1000px]",children:(0,n.jsx)(c,{children:(0,n.jsx)("h1",{className:"font-bold text-5xl text-left",children:t})})}),(0,n.jsx)("h2",{className:"font-medium text-2xl text-center mt-4",children:"Where I write things. (This site is a work in progress)"}),(0,n.jsxs)("h2",{className:"font-medium text-2xl text-center mt-4",children:[(0,n.jsx)(w,{className:"no-underline text-inherit",href:"/projects",children:"My Games/Other Projects"})," | Blog Posts"]})]})})}}},function(e){e.O(0,[221,837,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);