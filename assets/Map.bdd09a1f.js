import{d as vn,r as t,m as a,b as Cn,e as pn,g as o,h as n,t as l,u as e,w as r,B as m,i as u,p as _n}from"./vendor.ffd19ce3.js";var hn=`<baidu-map
    class="map"
    ref="map"
    :apiKey="apiKey"
    :center="{
        lng: 116.403963,
        lat: 39.915119,
    }"
    :zoom="13"
    :enableMapClick="true"
    :enableWheelZoom="true"
    :mapType="BMapGLConstant.MapTypeId.BMAP_NORMAL_MAP"
    >
</baidu-map>`,dn=`.map {
    width: 100%;
    height: 400px;
}`;const fn={class:"page-content"},bn={class:"code"},Fn=o("div",{class:"code-title"},[o("span",null,"\u4EE3\u7801\u793A\u4F8B")],-1),kn={class:"code-content"},wn={class:"code-snippet"},En={class:"code-content"},Bn={class:"code-snippet"},yn=o("div",{class:"code-title"},[o("span",null,"\u5C55\u793A\u793A\u4F8B")],-1),Tn={class:"btns"},Mn=_n("\u6807\u9898"),Rn={class:"custom-control-content"},Pn=o("div",{class:"custom-control-title"},"\u81EA\u5B9A\u4E49\u63A7\u4EF6",-1),zn={class:"custom-control-body"},Sn=vn({setup(Nn){const j=t(hn),J=t(dn),p=t({lng:116.403963,lat:39.915119}),Z=t(13),Y=t({lng:116.403963,lat:39.915119}),L=t([{lng:116.297611,lat:40.047363},{lng:116.302839,lat:40.048219},{lng:116.308301,lat:40.050566},{lng:116.305732,lat:40.054957},{lng:116.304754,lat:40.057953},{lng:116.306487,lat:40.058312},{lng:116.307223,lat:40.056379}]),A=t(p.value),W=t(Z.value);function V(i){W.value=i.target.getZoom()}function K(i){p.value=i.target.getCenter()}const X=function(){p.value={lng:116.403963,lat:39.915119},Z.value=13,A.value=p.value,setTimeout(()=>{Y.value=p.value,W.value=Z.value},300)},B=t(!0),q=function(){B.value=!B.value},$=a(()=>B.value?"\u9690\u85CFMarker":"\u663E\u793AMarker"),v=t(!1),oo=function(){v.value=!v.value},no=a(()=>v.value?"\u9690\u85CF3DMarker":"\u663E\u793A3DMarker"),g=t(!1),to=function(){g.value=!g.value},eo=a(()=>g.value?"\u9690\u85CFMarker Info":"\u663E\u793AMarker Info"),uo=function(){g.value=!g.value},y=t(!1),lo=a(()=>y.value?"\u9690\u85CF\u7F29\u653E\u63A7\u4EF6":"\u663E\u793A\u7F29\u653E\u63A7\u4EF6"),ao=function(){y.value=!y.value},T=t(!1),co=a(()=>T.value?"\u9690\u85CF\u6BD4\u4F8B\u5C3A\u63A7\u4EF6":"\u663E\u793A\u6BD4\u4F8B\u5C3A\u63A7\u4EF6"),so=function(){T.value=!T.value},M=t(!1),io=a(()=>M.value?"\u9690\u85CF\u57CE\u5E02\u5217\u8868\u63A7\u4EF6":"\u663E\u793A\u57CE\u5E02\u5217\u8868\u63A7\u4EF6"),ro=function(){M.value=!M.value},R=t(!1),mo=a(()=>R.value?"\u9690\u85CF\u5730\u56FE\u7C7B\u578B\u63A7\u4EF6":"\u663E\u793A\u5730\u56FE\u7C7B\u578B\u63A7\u4EF6"),go=function(){R.value=!R.value},P=t(!1),Ao=a(()=>P.value?"\u9690\u85CF\u5B9A\u4F4D\u63A7\u4EF6":"\u663E\u793A\u5B9A\u4F4D\u63A7\u4EF6"),vo=function(){P.value=!P.value},z=t(!1),Co=a(()=>z.value?"\u9690\u85CF\u5BFC\u822A\u63A7\u4EF6":"\u663E\u793A\u5BFC\u822A\u63A7\u4EF6"),po=function(){z.value=!z.value},N=t(!1),_o=a(()=>N.value?"\u9690\u85CF3D\u5BFC\u822A\u63A7\u4EF6":"\u663E\u793A3D\u5BFC\u822A\u63A7\u4EF6"),ho=function(){N.value=!N.value},_=t(!1),fo=a(()=>_.value?"\u9690\u85CF\u81EA\u5B9A\u4E49\u63A7\u4EF6":"\u663E\u793A\u81EA\u5B9A\u4E49\u63A7\u4EF6"),bo=function(){_.value=!_.value},G=t(0),Fo=function(){G.value++},x=t(!1),ko=a(()=>x.value?"\u9690\u85CF\u57CE\u5E02\u8FB9\u754C":"\u663E\u793A\u57CE\u5E02\u8FB9\u754C"),wo=function(){x.value=!x.value},h=t(!1),Eo=a(()=>h.value?"\u9690\u85CF\u591A\u8FB9\u5F62":"\u663E\u793A\u591A\u8FB9\u5F62"),Bo=function(){h.value=!h.value};function yo(i){h.value=!1}const d=t(!1),To=a(()=>d.value?"\u9690\u85CF\u6298\u7EBF":"\u663E\u793A\u6298\u7EBF"),Mo=function(){d.value=!d.value};function Ro(i){d.value=!1}const f=t(!1),Po=a(()=>f.value?"\u9690\u85CF\u5706\u5F62":"\u663E\u793A\u5706\u5F62"),zo=function(){A.value={lng:116.403963,lat:39.915119},f.value=!f.value};function Q(i){f.value=!1}const b=t(!1),No=a(()=>b.value?"\u7981\u7528\u53F3\u952E\u83DC\u5355":"\u542F\u7528\u53F3\u952E\u83DC\u5355"),xo=function(){b.value=!b.value};function F(i){b.value=!1}const S=t(!1),So=a(()=>S.value?"\u7981\u7528\u89C6\u56FE\u52A8\u753B":"\u542F\u7528\u89C6\u56FE\u52A8\u753B"),Io=function(){S.value=!S.value},Oo=t([{center:{lng:116.403963,lat:39.915119},zoom:18,tilt:60,heading:0,percentage:0},{center:{lng:116.403963,lat:39.915119},zoom:18,tilt:60,heading:180,percentage:.5},{center:{lng:116.403963,lat:39.915119},zoom:18,tilt:60,heading:360,percentage:1}]),I=t(!1),Ho=a(()=>I.value?"\u7981\u7528\u8F68\u8FF9\u52A8\u753B":"\u542F\u7528\u8F68\u8FF9\u52A8\u753B"),Zo=function(){I.value=!I.value},O=t(!1),Lo=a(()=>O.value?"\u7981\u7528\u8DEF\u4E66\u52A8\u753B":"\u542F\u7528\u8DEF\u4E66\u52A8\u753B"),Wo=function(){O.value=!O.value},Do=t("data:image/png;base64,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");function Uo(i,c){if(i.getStatus()==0)for(var k=c.getPlan(0),C=[],w=0;w<k.getNumRoutes();w++){var D=k.getRoute(w);C=C.concat(D.getPath())}return{points:C}}const H=t(!1),Yo=a(()=>H.value?"\u7981\u7528\u53E0\u52A0\u5C42":"\u542F\u7528\u53E0\u52A0\u5C42"),Go=function(){A.value={lng:117.19635,lat:36.24093},H.value=!H.value};return(i,c)=>{const k=u("highlightjs"),C=u("bm-marker-icon"),w=u("bm-info-window"),D=u("bm-marker"),Qo=u("bm-marker-threed-icon"),jo=u("bm-marker-threed"),Jo=u("bm-zoom-control"),Vo=u("bm-scale-control"),Ko=u("bm-city-list-control"),Xo=u("bm-map-type-control"),qo=u("bm-location-control"),$o=u("bm-navigation-control"),on=u("bm-custom-control"),nn=u("bm-navigation-threed-control"),tn=u("bm-city-boundary"),en=u("bm-polygon"),U=u("bm-polyline"),un=u("bm-ground-overlay"),ln=u("bm-circle"),E=u("bm-context-menu-item"),an=u("bm-context-menu"),cn=u("bm-view-animation"),sn=u("bm-track-animation"),rn=u("bm-lushu"),mn=u("bm-driving-route"),gn=u("baidu-map");return Cn(),pn("div",fn,[o("div",bn,[Fn,o("div",kn,[o("div",wn,[n(k,{code:j.value},null,8,["code"])])]),o("div",En,[o("div",Bn,[n(k,{code:J.value},null,8,["code"])])])]),yn,o("div",Tn,[o("button",{onClick:X},"\u56DE\u5230\u9ED8\u8BA4\u70B9"),o("button",{onClick:q},l(e($)),1),o("button",{onClick:to},l(e(eo)),1),o("button",{onClick:oo},l(e(no)),1),o("button",{onClick:ao},l(e(lo)),1),o("button",{onClick:so},l(e(co)),1),o("button",{onClick:ro},l(e(io)),1),o("button",{onClick:go},l(e(mo)),1),o("button",{onClick:vo},l(e(Ao)),1),o("button",{onClick:po},l(e(Co)),1),o("button",{onClick:ho},l(e(_o)),1),o("button",{onClick:bo},l(e(fo)),1),o("button",{onClick:wo},l(e(ko)),1),o("button",{onClick:Bo},l(e(Eo)),1),o("button",{onClick:Mo},l(e(To)),1),o("button",{onClick:zo},l(e(Po)),1),o("button",{onClick:xo},l(e(No)),1),o("button",{onClick:Io},l(e(So)),1),o("button",{onClick:Zo},l(e(Ho)),1),o("button",{onClick:Wo},l(e(Lo)),1),o("button",{onClick:Go},l(e(Yo)),1)]),n(gn,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:A.value,zoom:W.value,zoomCenter:Y.value,enableMapClick:!0,enableWheelZoom:!0,mapType:e(m).MapTypeId.BMAP_NORMAL_MAP,onZoom_changed:V,onCenter_changed:K},{default:r(()=>[n(D,{point:A.value,show:B.value,onClick:c[1]||(c[1]=s=>g.value=!g.value)},{default:r(()=>[n(C,{size:[23,25],anchor:[10,15],imageOffset:[0,0]}),n(w,{point:A.value,show:g.value,onClose:c[0]||(c[0]=s=>g.value=!1),title:"\u6807\u9898",content:"\u5185\u5BB9"},{title:r(()=>[Mn]),default:r(()=>[o("button",{onClick:uo},"\u70B9\u51FB")]),_:1},8,["point","show"])]),_:1},8,["point","show"]),n(jo,{show:v.value,point:A.value,height:200,size:80,onClick:c[2]||(c[2]=s=>v.value=!v.value)},{default:r(()=>[n(Qo,{src:"http://webmap0.bdimg.com/image/api/marker_red.png",size:[40,40],anchor:[0,0],imageOffset:[0,0]},null,8,["src"])]),_:1},8,["show","point"]),n(Jo,{offset:[50,50],show:y.value},null,8,["show"]),n(Vo,{show:T.value,offset:[50,30],anchor:e(m).ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT},null,8,["show","anchor"]),n(Ko,{show:M.value,anchor:e(m).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,offset:[20,20]},null,8,["show","anchor"]),n(Xo,{show:R.value},null,8,["show"]),n(qo,{show:P.value,anchor:e(m).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,offset:[60,60]},null,8,["show","anchor"]),n($o,{show:z.value,anchor:e(m).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,type:e(m).NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL},null,8,["show","anchor","type"]),n(on,{show:_.value,anchor:e(m).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,offset:[300,90]},{default:r(()=>[o("div",Rn,[Pn,o("div",zn,[o("button",{onClick:Fo},"\u8BA1\u6570:"+l(G.value),1),o("button",{onClick:c[3]||(c[3]=s=>_.value=!1)},"\u9690\u85CF")])])]),_:1},8,["show","anchor"]),n(nn,{show:N.value,anchor:e(m).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,type:e(m).NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL},null,8,["show","anchor","type"]),n(tn,{show:x.value,name:"\u5317\u4EAC\u5E02",overallView:!0,anchor:e(m).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,offset:[60,60]},null,8,["show","anchor"]),n(en,{points:L.value,overallView:!0,show:h.value,onClick:yo},null,8,["points","show"]),n(U,{points:L.value,overallView:!0,show:d.value,onClick:Ro},null,8,["points","show"]),n(un,{show:H.value,startPoint:{lng:117.19635,lat:36.24093},endPoint:{lng:117.2035,lat:36.24764},url:"https://lbsyun.baidu.com/jsdemo/img/shouhuimap.png"},null,8,["show","startPoint","endPoint","url"]),n(ln,{center:A.value,overallView:!0,radius:1e3,show:f.value,onClick:Q},null,8,["center","show"]),n(an,{show:b.value,onClick:Q},{default:r(()=>[n(E,{onClick:F}),n(E,{onClick:F}),n(E,{onClick:F}),n(E,{onClick:F}),n(E,{onClick:F})]),_:1},8,["show"]),n(cn,{show:S.value,keyFrames:Oo.value,onReady:c[4]||(c[4]=s=>s.start())},null,8,["show","keyFrames"]),n(sn,{show:I.value,onReady:c[5]||(c[5]=s=>s.start())},{default:r(()=>[n(U,{points:L.value,show:!1,init:!1},null,8,["points"])]),_:1},8,["show"]),n(mn,{location:"\u5317\u4EAC",start:{lng:116.404844,lat:40},end:{lng:116.308102,lat:40.056057},onSearchComplete:Uo,onReady:c[7]||(c[7]=s=>s.search())},{default:r(({points:s})=>[n(rn,{defaultContent:"\u8D77\u98DE\u5566",overallView:!0,show:O.value,onReady:c[6]||(c[6]=An=>An.start())},{default:r(()=>[n(U,{points:s,show:!1,init:!1},null,8,["points"]),n(C,{src:Do.value,size:[80,80],imageOffset:[0,0]},null,8,["src"])]),_:2},1032,["show"])]),_:1},8,["start","end"])]),_:1},8,["center","zoom","zoomCenter","mapType"])])}}});export{Sn as default};