/**!
 * admin-template-for-angular v0.0.0
 *
 * Copyright (c) 2021 Bendy Zhang
 * Released under the undefined license
 */
var APP_BUILD = 'Tue Apr 13 2021 11:07:56 GMT+0000 (Coordinated Universal Time)';var APP_VERSION = '0.0.0';(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{pyZ6:function(t,n,e){"use strict";e.r(n),e.d(n,"DevModule",(function(){return ct}));var o=e("ofXK"),i=e("iasb"),c=e("M0ag"),r=e("tyNb"),a=e("quSY"),s=e("vkgz"),l=e("nYR2"),b=e("fXoL"),d=e("tk/3"),u=e("dNxI"),g=e("wZkO"),h=e("zyE8"),p=e("UXJo");let m=(()=>{class t{constructor(t,n,e){this.el=t,this.renderer=n,this.document=e}ngOnChanges(t){t.loading&&(t.loading.currentValue?this.enable():this.disable())}enable(){this.el.nativeElement.classList.add("overlay-parent"),this.renderer.appendChild(this.el.nativeElement,this.getElement())}disable(){this.el.nativeElement.classList.remove("overlay-parent"),this.el.nativeElement.querySelector(".overlay-loading")&&this.renderer.removeChild(this.el.nativeElement,this.el.nativeElement.querySelector(".overlay-loading"))}getElement(){const t=this.document.createElement("div");t.className="overlay overlay-loading";const n=this.document.createElement("div");if(n.className="loading-body",n.innerHTML='<svg class="loading-spinner" viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>',t.appendChild(n),this.loadingText){const t=this.document.createElement("div");t.classList.add("loading-text"),t.innerHTML=this.loadingText,n.appendChild(t)}return t}}return t.\u0275fac=function(n){return new(n||t)(b.Lb(b.l),b.Lb(b.E),b.Lb(o.d))},t.\u0275dir=b.Gb({type:t,selectors:[["","loading",""]],inputs:{loading:"loading",loadingText:"loadingText"},features:[b.xb]}),t})();var f=e("Xl2X"),v=e("3Pt+"),C=e("bTqV"),k=e("NFeN");function M(t,n){if(1&t&&(b.Rb(0,"div",5),b.Bc(1),b.Qb()),2&t){const t=b.cc();b.zb(1),b.Dc(" ",t.title," ")}}function O(t,n){if(1&t){const t=b.Sb();b.Rb(0,"button",6),b.Yb("click",(function(){return b.qc(t),b.cc().copyContent()})),b.Rb(1,"mat-icon"),b.Bc(2,"content_copy"),b.Qb(),b.Qb()}}const R=function(t){return{"no-line-numbers":t}};let Q=(()=>{class t{constructor(t,n){this.theme=t,this.clipboard=n,this.theme.themeChanged.subscribe(t=>{this.themeName=this.theme.isDark()?"material":"default"})}ngOnInit(){this.theme.isDark()&&(this.themeName="material")}copyContent(){this.clipboard.copy(this.content)}getOptions(){let t={lineNumbers:!this.hideLineNumbers,mode:this.language,readOnly:!this.editable};return this.themeName&&(t=Object.assign(Object.assign({},t),{theme:this.themeName})),t}}return t.\u0275fac=function(n){return new(n||t)(b.Lb(h.b),b.Lb(p.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["el-code-block"]],inputs:{title:"title",content:"content",language:"language",loading:"loading",editable:"editable",hideLineNumbers:"hideLineNumbers"},decls:5,vars:9,consts:[[1,"cb",3,"ngClass"],["class","cb-header",4,"ngIf"],[1,"cb-content",3,"loading"],["mat-icon-button","","class","cb-copy-button","aria-label","Copy",3,"click",4,"ngIf"],[3,"ngModel","preserveScrollPosition","options","ngModelChange"],[1,"cb-header"],["mat-icon-button","","aria-label","Copy",1,"cb-copy-button",3,"click"]],template:function(t,n){1&t&&(b.Rb(0,"div",0),b.zc(1,M,2,1,"div",1),b.Rb(2,"div",2),b.zc(3,O,3,0,"button",3),b.Rb(4,"ngx-codemirror",4),b.Yb("ngModelChange",(function(t){return n.content=t})),b.Qb(),b.Qb(),b.Qb()),2&t&&(b.hc("ngClass",b.kc(7,R,n.hideLineNumbers)),b.zb(1),b.hc("ngIf",n.title),b.zb(1),b.hc("loading",!0===n.loading),b.zb(1),b.hc("ngIf",n.content),b.zb(1),b.hc("ngModel",n.content)("preserveScrollPosition",!1)("options",n.getOptions()))},directives:[o.j,o.l,m,f.a,v.k,v.n,C.b,k.a],styles:[".cb[_ngcontent-%COMP%]{position:relative}.cb.no-line-numbers[_ngcontent-%COMP%]   .cb-content[_ngcontent-%COMP%]{padding:0 0 0 .75rem}.cb-header[_ngcontent-%COMP%]{color:#fff;padding:.75rem 1rem;border-radius:5px 5px 0 0;min-height:20px}.cb-copy-button[_ngcontent-%COMP%]{position:absolute;right:5px;top:2px;z-index:10}.cb-content[_ngcontent-%COMP%]{position:relative;background-color:#fff;border:1px solid #efefef;border-top:none;border-radius:0 0 5px 5px}[_nghost-%COMP%]   .cb-header[_ngcontent-%COMP%]{background-color:var(----background)}[_nghost-%COMP%]   .cb-content[_ngcontent-%COMP%]{background-color:var(----secondary-background);border-color:var(----divider)}[_nghost-%COMP%]     .CodeMirror{background-color:initial!important}.popular   [_nghost-%COMP%]   .cb-header[_ngcontent-%COMP%]{background-color:var(--popular--background)}.popular   [_nghost-%COMP%]   .cb-content[_ngcontent-%COMP%]{background-color:var(--popular--secondary-background);border-color:var(--popular--divider)}.popular   [_nghost-%COMP%]     .CodeMirror{background-color:initial!important}.dark   [_nghost-%COMP%]   .cb-header[_ngcontent-%COMP%]{background-color:var(--dark--background)}.dark   [_nghost-%COMP%]   .cb-content[_ngcontent-%COMP%]{background-color:var(--dark--secondary-background);border-color:var(--dark--divider)}.dark   [_nghost-%COMP%]     .CodeMirror{background-color:initial!important}  .CodeMirror,   .CodeMirror pre.CodeMirror-line,   .CodeMirror pre.CodeMirror-line-like{font-family:Roboto Mono,monospace}  .CodeMirror-gutters{border-color:#efefef}"]}),t})();function y(t,n){if(1&t&&(b.Rb(0,"mat-tab",6),b.Mb(1,"el-code-block",7),b.Qb()),2&t){const t=n.$implicit,e=b.cc(2);b.ic("label",t.tag),b.zb(1),b.hc("loading",e.loadingCode)("language",t.lang)("content",t.code)("hideLineNumbers",!0)}}function w(t,n){if(1&t){const t=b.Sb();b.Rb(0,"section",3),b.Rb(1,"mat-tab-group",4),b.Yb("selectedIndexChange",(function(n){return b.qc(t),b.cc().currentTabIndex=n}))("selectedTabChange",(function(n){return b.qc(t),b.cc().changeCompFile(n)})),b.zc(2,y,2,5,"mat-tab",5),b.Qb(),b.Qb()}if(2&t){const t=b.cc();b.zb(1),b.hc("selectedIndex",t.currentTabIndex)("@.disabled",!0),b.zb(1),b.hc("ngForOf",t.compFiles)}}let L=(()=>{class t{constructor(t,n){this.router=t,this.http=n,this.currentTabIndex=0,this.compFiles=[],this.showCode=!0,this.fileTagLangMapping={TS:"javascript",HTML:"xml",SCSS:"css"},this.subs=new a.a,this.router.events.subscribe(t=>{if(t instanceof r.b){const n=t.urlAfterRedirects,e=n.split("/")[n.split("/").length-1],o=`${n.replace("/admin/","assets/")}/${e}.component`;if(this.title=e.toUpperCase().replace("-"," "),!t.url.includes("examples"))return void(this.showCode=!1);this.showCode=!0,this.compFiles=[],Object.keys(this.fileTagLangMapping).forEach(t=>{this.compFiles.push({tag:t,lang:this.fileTagLangMapping[t],name:`${o}.${t.toLowerCase()}`,code:""})}),this.currentTabIndex=0,this.changeCompFile({index:this.currentTabIndex,tab:null})}})}ngOnInit(){}ngOnDestroy(){this.subs.unsubscribe()}changeCompFile(t){const n=this.compFiles[t.index];n.code||this.subs.add(this.http.get(n.name,{responseType:"text"}).pipe(Object(s.a)(()=>{this.loadingCode=!0}),Object(l.a)(()=>{this.loadingCode=!1})).subscribe(t=>{n.code=t}))}}return t.\u0275fac=function(n){return new(n||t)(b.Lb(r.e),b.Lb(d.b))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-dev"]],decls:4,vars:2,consts:[[3,"title"],[1,"page-container"],["class","code-section",4,"ngIf"],[1,"code-section"],[3,"selectedIndex","selectedIndexChange","selectedTabChange"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"loading","language","content","hideLineNumbers"]],template:function(t,n){1&t&&(b.Mb(0,"el-page-header",0),b.Rb(1,"div",1),b.Mb(2,"router-outlet"),b.zc(3,w,3,3,"section",2),b.Qb()),2&t&&(b.hc("title",n.title),b.zb(3),b.hc("ngIf",n.showCode))},directives:[u.a,r.i,o.l,g.b,o.k,g.a,Q,m],styles:[".code-section[_ngcontent-%COMP%]{margin-top:2rem}"]}),t})();var z=e("fdqv"),P=e("pnFD"),_=e("0IaG"),x=e("d/rN"),I=e("kmnG"),B=e("qFsG");function S(t,n){if(1&t&&(b.Rb(0,"h3"),b.Bc(1),b.Qb()),2&t){const t=b.cc();b.zb(1),b.Dc("Hi ",t.name,"!")}}let F=(()=>{class t{constructor(t,n){this.app=t,this.dialog=n}ngOnInit(){}close(){this.dialog.close()}save(){this.pending=!0,this.app.status.requesting(),setTimeout(()=>{this.close(),this.pending=!1,this.app.status.requested(),this.app.notificaiton.info(`Saving ${name} ...`)},3e3)}}return t.\u0275fac=function(n){return new(n||t)(b.Lb(P.a),b.Lb(_.g))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-examples-dialog-form"]],decls:17,vars:6,consts:[["title","Form",3,"showCloseIcon","loading"],["body",""],[2,"width","600px"],[1,"full-width"],["name","name","matInput","","placeholder","Your name...",3,"ngModel","ngModelChange"],["rows","8","name","des","matInput","","placeholder","Your name..."],[4,"ngIf"],["footer",""],["mat-raised-button","",3,"disabled","click"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(t,n){1&t&&(b.Rb(0,"el-dialog",0),b.Pb(1,1),b.Rb(2,"form",2),b.Rb(3,"mat-form-field",3),b.Rb(4,"mat-label"),b.Bc(5,"Name"),b.Qb(),b.Rb(6,"input",4),b.Yb("ngModelChange",(function(t){return n.name=t})),b.Qb(),b.Qb(),b.Rb(7,"mat-form-field",3),b.Rb(8,"mat-label"),b.Bc(9,"Description"),b.Qb(),b.Mb(10,"textarea",5),b.Qb(),b.Qb(),b.zc(11,S,2,1,"h3",6),b.Ob(),b.Pb(12,7),b.Rb(13,"button",8),b.Yb("click",(function(){return n.close()})),b.Bc(14," Cancel "),b.Qb(),b.Rb(15,"button",9),b.Yb("click",(function(){return n.save()})),b.Bc(16," Save "),b.Qb(),b.Ob(),b.Qb()),2&t&&(b.hc("showCloseIcon",!0)("loading",n.pending),b.zb(6),b.hc("ngModel",n.name),b.zb(5),b.hc("ngIf",n.name),b.zb(2),b.hc("disabled",n.pending),b.zb(2),b.hc("disabled",n.pending))},directives:[x.a,m,v.q,v.l,v.m,I.c,I.f,B.a,v.b,v.k,v.n,o.l,C.b],styles:[""]}),t})();var Y=e("J9tS");const T=function(t){return{loading:t}};let q=(()=>{class t{constructor(t,n,e,o){this.http=t,this.app=n,this.status=e,this.notification=o,this.buttonLoading=!1,this.requesting=!1}ngOnInit(){}toggleRequesting(){this.requesting=!this.requesting,this.requesting?this.status.requesting():this.status.requested()}showInfo(t){this.notification.info(t)}showSuccess(t){this.notification.success(t)}showWarning(t){this.notification.warn(t)}showError(t){this.notification.error(t)}alert(){this.app.dialog.alert("Alert Dialog","This is an alert dialog.",()=>{this.notification.info("Done")})}confirm(){this.app.dialog.confirm("Confirm Dialog","This is a confirm dialog.",()=>{this.notification.info("Done")})}delete(){this.app.dialog.deleteConfirm(()=>{this.notification.info("Done")})}formDialog(){this.app.dialog.open(F,{},()=>{})}requestError(){Object(z.c)(this.http).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(b.Lb(d.b),b.Lb(Y.a),b.Lb(Y.g),b.Lb(Y.e))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-examples-button"]],decls:42,vars:22,consts:[["mat-raised-button","",3,"click"],["mat-raised-button","",3,"ngClass","click"],["mat-raised-button","","color","primary",3,"ngClass","disabled","click"],["mat-fab","","color","primary",3,"ngClass","click"],["mat-fab","","color","primary",3,"ngClass","disabled","click"],["mat-mini-fab","","color","primary",3,"ngClass","disabled","click"],["mat-icon-button","","color","primary",3,"ngClass","disabled","click"]],template:function(t,n){1&t&&(b.Rb(0,"button",0),b.Yb("click",(function(){return n.toggleRequesting()})),b.Bc(1,"Global Progress"),b.Qb(),b.Rb(2,"button",1),b.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),b.Bc(3,"Loading Button"),b.Qb(),b.Rb(4,"button",2),b.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),b.Bc(5,"Loading"),b.Qb(),b.Rb(6,"button",3),b.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),b.Rb(7,"mat-icon"),b.Bc(8,"save"),b.Qb(),b.Qb(),b.Rb(9,"button",4),b.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),b.Rb(10,"mat-icon"),b.Bc(11,"save"),b.Qb(),b.Qb(),b.Rb(12,"button",5),b.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),b.Rb(13,"mat-icon"),b.Bc(14,"save"),b.Qb(),b.Qb(),b.Rb(15,"button",6),b.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),b.Rb(16,"mat-icon"),b.Bc(17,"save"),b.Qb(),b.Qb(),b.Mb(18,"br"),b.Mb(19,"br"),b.Rb(20,"button",0),b.Yb("click",(function(){return n.showInfo("Information")})),b.Bc(21,"Show Information"),b.Qb(),b.Rb(22,"button",0),b.Yb("click",(function(){return n.showSuccess("Success")})),b.Bc(23,"Show Success"),b.Qb(),b.Rb(24,"button",0),b.Yb("click",(function(){return n.showWarning("Warning")})),b.Bc(25,"Show Warning"),b.Qb(),b.Rb(26,"button",0),b.Yb("click",(function(){return n.showError("Error")})),b.Bc(27,"Show Error"),b.Qb(),b.Mb(28,"br"),b.Mb(29,"br"),b.Rb(30,"button",0),b.Yb("click",(function(){return n.alert()})),b.Bc(31,"Alert"),b.Qb(),b.Rb(32,"button",0),b.Yb("click",(function(){return n.confirm()})),b.Bc(33,"Confirm"),b.Qb(),b.Rb(34,"button",0),b.Yb("click",(function(){return n.delete()})),b.Bc(35,"Delete Confirm"),b.Qb(),b.Rb(36,"button",0),b.Yb("click",(function(){return n.formDialog()})),b.Bc(37,"Form Dialog"),b.Qb(),b.Mb(38,"br"),b.Mb(39,"br"),b.Rb(40,"button",0),b.Yb("click",(function(){return n.requestError()})),b.Bc(41,"Request with Error"),b.Qb()),2&t&&(b.zb(2),b.hc("ngClass",b.kc(10,T,n.buttonLoading)),b.zb(2),b.hc("ngClass",b.kc(12,T,n.buttonLoading))("disabled",n.buttonLoading),b.zb(2),b.hc("ngClass",b.kc(14,T,n.buttonLoading)),b.zb(3),b.hc("ngClass",b.kc(16,T,n.buttonLoading))("disabled",n.buttonLoading),b.zb(3),b.hc("ngClass",b.kc(18,T,n.buttonLoading))("disabled",n.buttonLoading),b.zb(3),b.hc("ngClass",b.kc(20,T,n.buttonLoading))("disabled",n.buttonLoading))},directives:[C.b,o.j,k.a],styles:["button[_ngcontent-%COMP%]{margin-right:.5rem}"]}),t})();var H=e("Wp6s");function N(t,n){if(1&t&&(b.Rb(0,"a",1),b.Bc(1),b.Qb()),2&t){const t=n.$implicit;b.hc("routerLink",t.value),b.zb(1),b.Cc(t.key)}}let E=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Fb({type:t,selectors:[["el-icon-card"]],inputs:{color:"color",icon:"icon",value:"value",label:"label",links:"links"},decls:10,vars:9,consts:[["routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active",3,"routerLink"]],template:function(t,n){1&t&&(b.Rb(0,"mat-card"),b.Rb(1,"mat-icon"),b.Bc(2),b.Qb(),b.Rb(3,"mat-card-title"),b.Bc(4),b.Qb(),b.Rb(5,"mat-card-subtitle"),b.Bc(6),b.Qb(),b.Rb(7,"mat-card-footer"),b.zc(8,N,2,2,"a",0),b.dc(9,"keyvalue"),b.Qb(),b.Qb()),2&t&&(b.Cb("mat-",n.color,""),b.zb(2),b.Cc(n.icon),b.zb(2),b.Cc(n.value),b.zb(2),b.Cc(n.label),b.zb(2),b.hc("ngForOf",b.ec(9,7,n.links)))},directives:[H.a,k.a,H.h,H.g,H.d,o.k,r.g,r.f],pipes:[o.f],styles:["[_nghost-%COMP%]{display:block;min-width:200px;width:100%}[_nghost-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%]{transform:scale(1.25)}[color][_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:#dedede}[color][_nghost-%COMP%]   .mat-card[_ngcontent-%COMP%], [color][_nghost-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.7)}[color][_nghost-%COMP%]:hover   .mat-card[_ngcontent-%COMP%], [color][_nghost-%COMP%]:hover   .mat-card-subtitle[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]:not(:first-child), [_nghost-%COMP%]     .mat-card-title:not(:first-child){margin-top:0}a[_ngcontent-%COMP%]{text-decoration:none}.mat-icon[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;font-size:3.5rem;opacity:.2;width:inherit;height:inherit;transition:all .5s ease-in-out}.mat-card-title[_ngcontent-%COMP%]{margin-top:0}.mat-card-footer[_ngcontent-%COMP%]{display:flex;text-align:center;font-size:.85rem}.mat-card-footer[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1;cursor:pointer;padding:5px;background-color:rgba(0,0,0,.1)}.mat-card-footer[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.2)}[color=primary][_nghost-%COMP%]     .mat-card{background-color:var(----primary)}[color=accent][_nghost-%COMP%]     .mat-card{background-color:var(----accent)}[color=warn][_nghost-%COMP%]     .mat-card{background-color:var(----warn)}.popular   [color=primary][_nghost-%COMP%]     .mat-card{background-color:var(--popular--primary)}.popular   [color=accent][_nghost-%COMP%]     .mat-card{background-color:var(--popular--accent)}.popular   [color=warn][_nghost-%COMP%]     .mat-card{background-color:var(--popular--warn)}.dark   [color=primary][_nghost-%COMP%]     .mat-card{background-color:var(--dark--primary)}.dark   [color=accent][_nghost-%COMP%]     .mat-card{background-color:var(--dark--accent)}.dark   [color=warn][_nghost-%COMP%]     .mat-card{background-color:var(--dark--warn)}"]}),t})(),D=(()=>{class t{constructor(){this.links={"Link #1":"link-url","Link #2":"link-url"}}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Fb({type:t,selectors:[["app-examples-card"]],decls:5,vars:4,consts:[[1,"row","gutter"],["color","primary","icon","shopping_cart","label","New Orders","value","123,231",3,"links"],["color","accent","icon","shopping_cart","label","New Orders","value","123,231",3,"links"],["color","warn","icon","shopping_cart","label","New Orders","value","123,231",3,"links"],["icon","shopping_cart","label","New Orders","value","123,231",3,"links"]],template:function(t,n){1&t&&(b.Rb(0,"div",0),b.Mb(1,"el-icon-card",1),b.Mb(2,"el-icon-card",2),b.Mb(3,"el-icon-card",3),b.Mb(4,"el-icon-card",4),b.Qb()),2&t&&(b.zb(1),b.hc("links",n.links),b.zb(1),b.hc("links",n.links),b.zb(1),b.hc("links",n.links),b.zb(1),b.hc("links",n.links))},directives:[E],styles:[""]}),t})();var j=e("lJxs");let $=(()=>{class t{constructor(t){this.route=t,this.hero={}}ngOnInit(){this.route.paramMap.pipe(Object(j.a)(t=>{this.hero.id=+t.get("id")})).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(b.Lb(r.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-examples-table-detail"]],decls:3,vars:1,template:function(t,n){1&t&&(b.Rb(0,"mat-card"),b.Rb(1,"h1"),b.Bc(2),b.Qb(),b.Qb()),2&t&&(b.zb(2),b.Dc(" # ",n.hero.id,""))},directives:[H.a],styles:["[_nghost-%COMP%]{display:block}"]}),t})();var J=e("3E0/"),A=e("sh5h"),G=e("snN1"),W=e("M9IT");const X=["contentSidebar"],Z=function(t){return{active:t}};function U(t,n){if(1&t){const t=b.Sb();b.Rb(0,"tr",17),b.Rb(1,"td"),b.Bc(2),b.Qb(),b.Rb(3,"td"),b.Bc(4),b.Qb(),b.Rb(5,"td"),b.Rb(6,"a",18),b.Bc(7,"open in current page"),b.Qb(),b.Qb(),b.Rb(8,"td",19),b.Rb(9,"button",20),b.Yb("click",(function(){b.qc(t);const e=n.$implicit;return b.cc(2).gotoDetail(e.id)})),b.Rb(10,"mat-icon"),b.Bc(11,"edit"),b.Qb(),b.Qb(),b.Rb(12,"button",21),b.Yb("click",(function(){b.qc(t);const e=n.$implicit;return b.cc(2).remove(e.id)})),b.Rb(13,"mat-icon"),b.Bc(14,"delete"),b.Qb(),b.Qb(),b.Qb(),b.Qb()}if(2&t){const t=n.$implicit,e=b.cc(2);b.hc("ngClass",b.kc(4,Z,e.activedHero&&t.id===e.activedHero.id)),b.zb(2),b.Cc(t.id),b.zb(2),b.Cc(t.name),b.zb(2),b.hc("routerLink",t.id)}}const V=function(){return[5,10,25,100]};function K(t,n){if(1&t){const t=b.Sb();b.Rb(0,"div",10),b.Rb(1,"div",11),b.Rb(2,"table",12),b.Rb(3,"thead"),b.Rb(4,"tr"),b.Rb(5,"th"),b.Bc(6,"ID"),b.Qb(),b.Rb(7,"th"),b.Bc(8,"Name"),b.Qb(),b.Mb(9,"th"),b.Mb(10,"th"),b.Qb(),b.Qb(),b.Rb(11,"tbody"),b.zc(12,U,15,6,"tr",13),b.Qb(),b.Rb(13,"tfoot"),b.Rb(14,"tr"),b.Rb(15,"td",14),b.Rb(16,"mat-paginator",15),b.Yb("page",(function(n){return b.qc(t),b.cc().getHeroes(n)})),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(17,"div",16),b.Mb(18,"router-outlet"),b.Qb(),b.Qb()}if(2&t){const t=b.cc();b.zb(1),b.hc("loading",t.loading),b.zb(11),b.hc("ngForOf",t.heroes),b.zb(4),b.hc("length",100)("pageSize",10)("pageSizeOptions",b.jc(5,V))}}function tt(t,n){if(1&t){const t=b.Sb();b.Rb(0,"form",22),b.Rb(1,"mat-form-field"),b.Rb(2,"input",23),b.Yb("ngModelChange",(function(n){return b.qc(t),b.cc().activedHero.name=n})),b.Qb(),b.Qb(),b.Qb()}if(2&t){const t=b.cc();b.zb(2),b.hc("ngModel",t.activedHero.name)}}const nt=function(t){return{loading:t}};let et=(()=>{class t{constructor(t,n,e){this.http=t,this.app=n,this.notification=e,this.heroes=[],this.saving=!1,this.loading=!1,this.initlizating=!1}ngOnInit(){this.getHeroes(null)}getHeroes(t){t?this.loading=!0:this.initlizating=!0,this.http.get(Object(z.a)("/assets/heroes.json?p="+(t?t.pageIndex:0))).pipe(Object(J.a)(2e3)).subscribe(n=>{this.heroes=n,t?this.loading=!1:this.initlizating=!1})}gotoDetail(t){this.activedHero=Object.assign({},this.heroes.find(n=>n.id===t))}save(){this.saving=!0,Object(z.d)().subscribe(()=>{this.saving=!1;const t=this.heroes.findIndex(t=>t.id===this.activedHero.id);this.heroes[t]=Object.assign({},this.activedHero),this.activedHero=null,this.notification.success("Save Successfully.")})}remove(t){this.app.dialog.deleteConfirm(()=>{alert("ok")})}onClosedContentSidebar(){this.activedHero=null}}return t.\u0275fac=function(n){return new(n||t)(b.Lb(d.b),b.Lb(P.a),b.Lb(Y.e))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-examples-table"]],viewQuery:function(t,n){var e;1&t&&b.Fc(X,!0),2&t&&b.mc(e=b.Zb())&&(n.contentSidebarRef=e.first)},decls:13,vars:10,consts:[[3,"show"],["class","row",4,"ngIf"],["elementsToOpen",".btn-edit",3,"title","progressShown","open","closed"],["contentSidebar",""],[1,"padding"],["style","height: 2000px;",4,"ngIf"],[1,"footer","row"],[1,"fill","text-block"],[1,"right"],["mat-raised-button","","color","primary",3,"ngClass","disabled","click"],[1,"row"],["loadingText","Fetching data...",1,"fill",3,"loading"],[1,"border-radius"],[3,"ngClass",4,"ngFor","ngForOf"],["colspan","5"],[3,"length","pageSize","pageSizeOptions","page"],[1,"margin-left"],[3,"ngClass"],[3,"routerLink"],[1,"no-padding"],["mat-icon-button","",1,"btn-edit",3,"click"],["mat-icon-button","",1,"btn-delete",3,"click"],[2,"height","2000px"],["matInput","","name","name","placeholder","Name",3,"ngModel","ngModelChange"]],template:function(t,n){1&t&&(b.Rb(0,"div"),b.Mb(1,"el-page-loading",0),b.zc(2,K,19,6,"div",1),b.Rb(3,"el-content-sidebar",2,3),b.Yb("closed",(function(){return n.onClosedContentSidebar()})),b.Rb(5,"div",4),b.zc(6,tt,3,1,"form",5),b.Qb(),b.Rb(7,"div",6),b.Rb(8,"div",7),b.Bc(9," Here to place footer. "),b.Qb(),b.Rb(10,"div",8),b.Rb(11,"button",9),b.Yb("click",(function(){return n.save()})),b.Bc(12,"Save"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&t&&(b.zb(1),b.hc("show",n.initlizating),b.zb(1),b.hc("ngIf",!n.initlizating),b.zb(1),b.hc("title","#"+(null==n.activedHero?null:n.activedHero.id)+" "+(null==n.activedHero?null:n.activedHero.name))("progressShown",n.saving)("open",n.activedHero),b.zb(3),b.hc("ngIf",n.activedHero),b.zb(5),b.hc("ngClass",b.kc(8,nt,n.saving))("disabled",n.saving))},directives:[A.a,o.l,G.a,C.b,o.j,m,o.k,W.a,r.i,r.g,k.a,v.q,v.l,v.m,I.c,B.a,v.b,v.k,v.n],styles:[""]}),t})();const ot=[{path:"",component:L,children:[{path:"get-started",component:(()=>{class t{constructor(t){this.http=t}ngOnInit(){this.http.get("/assets/README.md",{responseType:"text"}).subscribe(t=>{const n=new showdown.Converter;this.readMe=n.makeHtml(t)})}}return t.\u0275fac=function(n){return new(n||t)(b.Lb(d.b))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-get-started"]],decls:1,vars:1,consts:[[3,"innerHTML"]],template:function(t,n){1&t&&b.Mb(0,"div",0),2&t&&b.hc("innerHTML",n.readMe,b.rc)},styles:["[_nghost-%COMP%]     img{max-width:100%}"]}),t})()},{path:"examples/button",component:q},{path:"examples/card",component:D},{path:"examples/table",component:et,children:[{path:":id",component:$}]}]}];let it=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(n){return new(n||t)},imports:[[r.h.forChild(ot)],r.h]}),t})(),ct=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(n){return new(n||t)},imports:[[o.c,it,i.a,c.b]]}),t})()}}]);