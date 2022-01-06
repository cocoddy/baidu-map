import{d as Ko,r as t,m as l,h as u,b as $o,e as Xo,g as o,i as n,t as a,u as e,w as m,B as s,p as Uo}from"./vendor.320141b3.js";const Yo={class:"page-content"},qo={class:"code"},Jo=o("div",{class:"code-title"},[o("span",null,"\u4EE3\u7801\u793A\u4F8B")],-1),Qo={class:"code-content"},Wo={class:"code-snippet"},on={class:"code-content"},nn={class:"code-snippet"},tn=o("div",{class:"code-title"},[o("span",null,"\u5C55\u793A\u793A\u4F8B")],-1),en={class:"btns"},un=Uo("\u6807\u9898"),cn=Ko({setup(ln){const R=t(`<baidu-map
    class="map"
    ref="map"
    :apiKey="apiKey"
    :center="{
        lng: 116.403963,
        lat: 39.915119,
    }"
    :zoom="13"
    :enableMapClick="true"
    :mapType="BMapGL.MapTypeId.BMAP_NORMAL_MAP"
    >
</baidu-map>`),H=t(`.map {
    width: 100%;
    height: 400px;
}`),g=t({lng:116.403963,lat:39.915119}),P=t(13),S=t({lng:116.403963,lat:39.915119}),L=t([{lng:116.297611,lat:40.047363},{lng:116.302839,lat:40.048219},{lng:116.308301,lat:40.050566},{lng:116.305732,lat:40.054957},{lng:116.304754,lat:40.057953},{lng:116.306487,lat:40.058312},{lng:116.307223,lat:40.056379}]),_=t(g.value),O=t(P.value);function V(i){O.value=i.target.getZoom()}function G(i){g.value=i.target.getCenter()}const z=function(){g.value={lng:116.403963,lat:39.915119},P.value=13,_.value=g.value,setTimeout(()=>{S.value=g.value,O.value=P.value},300)},d=t(!1),Z=function(){d.value=!d.value},j=l(()=>d.value?"\u9690\u85CFMarker":"\u663E\u793AMarker"),C=t(!1),K=function(){C.value=!C.value},$=l(()=>C.value?"\u9690\u85CF3DMarker":"\u663E\u793A3DMarker"),c=t(!1),X=function(){c.value=!c.value},U=l(()=>c.value?"\u9690\u85CFMarker Info":"\u663E\u793AMarker Info"),Y=function(){c.value=!c.value},b=t(!1),q=l(()=>b.value?"\u9690\u85CF\u7F29\u653E\u63A7\u4EF6":"\u663E\u793A\u7F29\u653E\u63A7\u4EF6"),J=function(){b.value=!b.value},k=t(!1),Q=l(()=>k.value?"\u9690\u85CF\u6BD4\u4F8B\u5C3A\u63A7\u4EF6":"\u663E\u793A\u6BD4\u4F8B\u5C3A\u63A7\u4EF6"),W=function(){k.value=!k.value},F=t(!1),oo=l(()=>F.value?"\u9690\u85CF\u57CE\u5E02\u5217\u8868\u63A7\u4EF6":"\u663E\u793A\u57CE\u5E02\u5217\u8868\u63A7\u4EF6"),no=function(){F.value=!F.value},w=t(!1),to=l(()=>w.value?"\u9690\u85CF\u5730\u56FE\u7C7B\u578B\u63A7\u4EF6":"\u663E\u793A\u5730\u56FE\u7C7B\u578B\u63A7\u4EF6"),eo=function(){w.value=!w.value},y=t(!1),uo=l(()=>y.value?"\u9690\u85CF\u5B9A\u4F4D\u63A7\u4EF6":"\u663E\u793A\u5B9A\u4F4D\u63A7\u4EF6"),lo=function(){y.value=!y.value},E=t(!1),ao=l(()=>E.value?"\u9690\u85CF\u5BFC\u822A\u63A7\u4EF6":"\u663E\u793A\u5BFC\u822A\u63A7\u4EF6"),co=function(){E.value=!E.value},B=t(!1),so=l(()=>B.value?"\u9690\u85CF3D\u5BFC\u822A\u63A7\u4EF6":"\u663E\u793A3D\u5BFC\u822A\u63A7\u4EF6"),io=function(){B.value=!B.value},T=t(!1),ro=l(()=>T.value?"\u9690\u85CF\u57CE\u5E02\u8FB9\u754C":"\u663E\u793A\u57CE\u5E02\u8FB9\u754C"),_o=function(){T.value=!T.value},v=t(!1),Co=l(()=>v.value?"\u9690\u85CF\u591A\u8FB9\u5F62":"\u663E\u793A\u591A\u8FB9\u5F62"),vo=function(){v.value=!v.value};function mo(i){v.value=!1}const M=t(!1),go=l(()=>M.value?"\u9690\u85CF\u6298\u7EBF":"\u663E\u793A\u6298\u7EBF"),po=function(){M.value=!M.value};function ho(i){v.value=!1}const p=t(!1),fo=l(()=>p.value?"\u9690\u85CF\u5706\u5F62":"\u663E\u793A\u5706\u5F62"),Ao=function(){z(),p.value=!p.value};function D(i){p.value=!1}const h=t(!1),bo=l(()=>h.value?"\u7981\u7528\u53F3\u952E\u83DC\u5355":"\u542F\u7528\u53F3\u952E\u83DC\u5355"),ko=function(){h.value=!h.value};function f(i){h.value=!1}const x=t(!1),Fo=l(()=>x.value?"\u7981\u7528\u89C6\u56FE\u52A8\u753B":"\u542F\u7528\u89C6\u56FE\u52A8\u753B"),wo=function(){x.value=!x.value},yo=t([{center:{lng:116.403963,lat:39.915119},zoom:18,tilt:60,heading:0,percentage:0},{center:{lng:116.403963,lat:39.915119},zoom:18,tilt:60,heading:180,percentage:.5},{center:{lng:116.403963,lat:39.915119},zoom:18,tilt:60,heading:360,percentage:1}]);return(i,r)=>{const I=u("highlightjs"),Eo=u("bm-marker-icon"),Bo=u("bm-info-window"),To=u("bm-marker"),Mo=u("bm-marker-threed-icon"),xo=u("bm-marker-threed"),No=u("bm-zoom-control"),Po=u("bm-scale-control"),Oo=u("bm-city-list-control"),So=u("bm-map-type-control"),Lo=u("bm-location-control"),zo=u("bm-navigation-control"),Do=u("bm-navigation-threed-control"),Io=u("bm-city-boundary"),Ro=u("bm-polygon"),Ho=u("bm-polyline"),Vo=u("bm-circle"),A=u("bm-context-menu-item"),Go=u("bm-context-menu"),Zo=u("bm-view-animation"),jo=u("baidu-map");return $o(),Xo("div",Yo,[o("div",qo,[Jo,o("div",Qo,[o("div",Wo,[n(I,{code:R.value},null,8,["code"])])]),o("div",on,[o("div",nn,[n(I,{code:H.value},null,8,["code"])])])]),tn,o("div",en,[o("button",{onClick:z},"\u56DE\u5230\u9ED8\u8BA4\u70B9"),o("button",{onClick:Z},a(e(j)),1),o("button",{onClick:X},a(e(U)),1),o("button",{onClick:K},a(e($)),1),o("button",{onClick:J},a(e(q)),1),o("button",{onClick:W},a(e(Q)),1),o("button",{onClick:no},a(e(oo)),1),o("button",{onClick:eo},a(e(to)),1),o("button",{onClick:lo},a(e(uo)),1),o("button",{onClick:co},a(e(ao)),1),o("button",{onClick:io},a(e(so)),1),o("button",{onClick:_o},a(e(ro)),1),o("button",{onClick:vo},a(e(Co)),1),o("button",{onClick:po},a(e(go)),1),o("button",{onClick:Ao},a(e(fo)),1),o("button",{onClick:ko},a(e(bo)),1),o("button",{onClick:wo},a(e(Fo)),1)]),n(jo,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:_.value,zoom:O.value,zoomCenter:S.value,enableMapClick:!0,mapType:e(s).MapTypeId.BMAP_NORMAL_MAP,onZoom_changed:V,onCenter_changed:G},{default:m(()=>[n(To,{point:_.value,show:d.value,onClick:r[1]||(r[1]=N=>c.value=!c.value)},{default:m(()=>[n(Eo,{size:[23,25],anchor:[10,15],imageOffset:[0,0]}),n(Bo,{point:_.value,show:c.value,onClose:r[0]||(r[0]=N=>c.value=!1),title:"\u6807\u9898",content:"\u5185\u5BB9"},{title:m(()=>[un]),default:m(()=>[o("button",{onClick:Y},"\u70B9\u51FB")]),_:1},8,["point","show"])]),_:1},8,["point","show"]),n(xo,{show:C.value,point:_.value,height:200,size:80,onClick:r[2]||(r[2]=N=>C.value=!C.value)},{default:m(()=>[n(Mo,{src:"http://webmap0.bdimg.com/image/api/marker_red.png",size:[40,40],anchor:[0,0],imageOffset:[0,0]},null,8,["src"])]),_:1},8,["show","point"]),n(No,{offset:[50,50],show:b.value},null,8,["show"]),n(Po,{show:k.value,offset:[50,30],anchor:e(s).ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT},null,8,["show","anchor"]),n(Oo,{show:F.value,anchor:e(s).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,offset:[20,20]},null,8,["show","anchor"]),n(So,{show:w.value},null,8,["show"]),n(Lo,{show:y.value,anchor:e(s).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,offset:[60,60]},null,8,["show","anchor"]),n(zo,{show:E.value,anchor:e(s).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,type:e(s).NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL},null,8,["show","anchor","type"]),n(Do,{show:B.value,anchor:e(s).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,type:e(s).NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL},null,8,["show","anchor","type"]),n(Io,{show:T.value,name:"\u5317\u4EAC\u5E02",anchor:e(s).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,offset:[60,60]},null,8,["show","anchor"]),n(Ro,{points:L.value,overallView:!0,show:v.value,onClick:mo},null,8,["points","show"]),n(Ho,{points:L.value,overallView:!0,show:M.value,onClick:ho},null,8,["points","show"]),n(Vo,{center:_.value,radius:1e3,show:p.value,onClick:D},null,8,["center","show"]),n(Go,{show:h.value,onClick:D},{default:m(()=>[n(A,{onClick:f}),n(A,{onClick:f}),n(A,{onClick:f}),n(A,{onClick:f}),n(A,{onClick:f})]),_:1},8,["show"]),n(Zo,{show:x.value,keyFrames:yo.value,onReady:r[3]||(r[3]=N=>N.start())},null,8,["show","keyFrames"])]),_:1},8,["center","zoom","zoomCenter","mapType"])])}}});export{cn as default};
