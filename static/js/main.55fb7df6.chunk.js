(this["webpackJsonpprogressive-img-loader-example"]=this["webpackJsonpprogressive-img-loader-example"]||[]).push([[0],{33:function(e,a,n){e.exports=n(73)},34:function(e,a,n){},73:function(e,a,n){"use strict";n.r(a);n(34);var t=n(1),r=n.n(t),s=n(30),i=n.n(s),c=n(2),l=n.n(c),m=n(20),o=n.n(m),d=n(11),f=n(31);function u(e,a){if(e){var n=new Image;n.onload=function(){a&&a(e)},n.src=e}}var p=o()((function(e){return{defaultImageClass:{width:"300px",height:"300px"}}})),g=o()((function(e){return{loading:{filter:"blur(20px)"}}})),b=function(e){var a=e.src,n=e.alt,t=e.transitionTime,s=void 0===t?2:t,i=e.className,c=e.isPreview,l=g(),m=c?l.loading:"";return r.a.createElement(f.Animate,{play:!0,duration:s,start:{filter:"blur(5px)"},end:{filter:"blur(0)"}},r.a.createElement("img",{src:a,alt:n,className:Object(d.a)(m,i)}))},A=function(e){var a=e.src,n=e.srcPreview,s=e.alt,i=e.loader,c=e.className,l=Object(t.useState)(null),m=l[0],o=l[1],d=Object(t.useState)(null),f=d[0],g=d[1],A=p();Object(t.useEffect)((function(){f||u(n,(function(e){return g(e)})),m||u(a,(function(e){return o(e)}))}),[]);var v=!f&&!m&&i,z=f&&!m;return r.a.createElement(r.a.Fragment,null,v&&i,z&&r.a.createElement(b,{alt:s,src:f,isPreview:!0,className:c||A.defaultImageClass}),m&&r.a.createElement(b,{alt:s,src:m,isPreview:!1,className:c||A.defaultImageClass}))};A.propTypes={src:l.a.string.isRequired,srcPreview:l.a.string,loader:l.a.element,alt:l.a.string,className:l.a.string};var v=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{src:"https://nala-staging-storage.s3.us-east-2.amazonaws.com/variants/450fxv48ix8rzqcjca4hy2k78n9n/3ee330eaf839fef102732d5d099d8bb4dac7b9dda8090e5fa991d792c02b0d1a?response-content-disposition=inline%3B%20filename%3D%22profile_picture_fabian-min.png%22%3B%20filename%2A%3DUTF-8%27%27profile_picture_fabian-min.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXZO4D7JV4U7FJRKO%2F20210105%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210105T030223Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=1bbe9a5f25ba4760fa0fb5bc466413814f58ed72328c9283b8dd7c2b04a8ee75",srcPreview:"https://nala-staging-storage.s3.us-east-2.amazonaws.com/variants/450fxv48ix8rzqcjca4hy2k78n9n/bd4f91ee6343cc82dd6c635ad3aa062006ec00f43295af4ab159607d2cea27da?response-content-disposition=inline%3B%20filename%3D%22profile_picture_fabian-min.png%22%3B%20filename%2A%3DUTF-8%27%27profile_picture_fabian-min.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXZO4D7JV4U7FJRKO%2F20210105%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210105T030159Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=9ef99ddb826c9ae34178260dddcfa80d304a81ca55a68c75217dc103d94fe2da"}));i.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.55fb7df6.chunk.js.map