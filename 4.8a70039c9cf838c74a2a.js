/**!
 * admin-template-for-angular v0.0.0
 *
 * Copyright (c) 2021 Bendy Zhang
 * Released under the undefined license
 */
var APP_BUILD = 'Thu Apr 01 2021 09:45:06 GMT+0000 (Coordinated Universal Time)';var APP_VERSION = '0.0.0';(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{pyZ6:function(t,n,e){"use strict";e.r(n),e.d(n,"DevModule",(function(){return et}));var o=e("ofXK"),i=e("iasb"),c=e("M0ag"),r=e("tyNb"),a=e("quSY"),s=e("fXoL"),l=e("tk/3"),b=e("dNxI"),d=e("wZkO"),u=e("UXJo"),g=e("bTqV"),p=e("NFeN"),h=e("Xl2X"),m=e("3Pt+");function f(t,n){if(1&t&&(s.Rb(0,"div",5),s.Cc(1),s.Qb()),2&t){const t=s.cc();s.zb(1),s.Ec(" ",t.title," ")}}const C=function(t){return{"no-line-numbers":t}},v=function(t,n,e){return{lineNumbers:t,mode:n,readOnly:e}};let k=(()=>{class t{constructor(t){this.clipboard=t}ngOnInit(){}copyContent(){this.clipboard.copy(this.content)}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(u.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-code-block"]],inputs:{title:"title",content:"content",language:"language",editable:"editable",hideLineNumbers:"hideLineNumbers"},decls:7,vars:11,consts:[[1,"cb",3,"ngClass"],["class","cb-header",4,"ngIf"],[1,"cb-content"],["mat-icon-button","","aria-label","Copy code snippet from ",1,"cb-copy-button",3,"click"],[3,"ngModel","preserveScrollPosition","options","ngModelChange"],[1,"cb-header"]],template:function(t,n){1&t&&(s.Rb(0,"div",0),s.Ac(1,f,2,1,"div",1),s.Rb(2,"div",2),s.Rb(3,"button",3),s.Yb("click",(function(){return n.copyContent()})),s.Rb(4,"mat-icon"),s.Cc(5,"content_copy"),s.Qb(),s.Qb(),s.Rb(6,"ngx-codemirror",4),s.Yb("ngModelChange",(function(t){return n.content=t})),s.Qb(),s.Qb(),s.Qb()),2&t&&(s.hc("ngClass",s.kc(5,C,n.hideLineNumbers)),s.zb(1),s.hc("ngIf",n.title),s.zb(5),s.hc("ngModel",n.content)("preserveScrollPosition",!1)("options",s.mc(7,v,!n.hideLineNumbers,n.language,!n.editable)))},directives:[o.j,o.l,g.b,p.a,h.a,m.k,m.n],styles:[".cb[_ngcontent-%COMP%]{position:relative}.cb.no-line-numbers[_ngcontent-%COMP%]   .cb-content[_ngcontent-%COMP%]{padding:0 0 0 .75rem}.cb-header[_ngcontent-%COMP%]{color:#fff;padding:.75rem 1rem;border-radius:5px 5px 0 0;min-height:20px}.cb-copy-button[_ngcontent-%COMP%]{position:absolute;right:5px;top:2px;z-index:10}.cb-content[_ngcontent-%COMP%]{position:relative;background-color:#fff;border:1px solid #efefef;border-top:none;border-radius:0 0 5px 5px}.cb-header[_ngcontent-%COMP%]{background-color:var(----primary)} .popular .cb-header{background-color:var(--popular--primary)} .dark .cb-header{background-color:var(--dark--primary)}  .CodeMirror,   .CodeMirror pre.CodeMirror-line,   .CodeMirror pre.CodeMirror-line-like{font-family:Roboto Mono,monospace}  .CodeMirror-gutters{border-color:#efefef}"]}),t})();function R(t,n){if(1&t&&(s.Rb(0,"mat-tab",6),s.Mb(1,"app-code-block",7),s.Qb()),2&t){const t=n.$implicit;s.ic("label",t.tag),s.zb(1),s.hc("language",t.lang)("content",t.code)("hideLineNumbers",!0)}}function M(t,n){if(1&t){const t=s.Sb();s.Rb(0,"section",3),s.Rb(1,"mat-tab-group",4),s.Yb("selectedIndexChange",(function(n){return s.rc(t),s.cc().currentTabIndex=n}))("selectedTabChange",(function(n){return s.rc(t),s.cc().changeCompFile(n)})),s.Ac(2,R,2,4,"mat-tab",5),s.Qb(),s.Qb()}if(2&t){const t=s.cc();s.zb(1),s.hc("selectedIndex",t.currentTabIndex)("@.disabled",!0),s.zb(1),s.hc("ngForOf",t.compFiles)}}let Q=(()=>{class t{constructor(t,n){this.router=t,this.http=n,this.currentTabIndex=0,this.compFiles=[],this.showCode=!0,this.fileTagLangMapping={TS:"javascript",HTML:"xml",SCSS:"css"},this.subs=new a.a,this.router.events.subscribe(t=>{if(t instanceof r.b){const n=t.urlAfterRedirects,e=n.split("/")[n.split("/").length-1],o=`${n.replace("/admin/","assets/")}/${e}.component`;if(this.title=e.toUpperCase().replace("-"," "),!t.url.includes("examples"))return void(this.showCode=!1);this.showCode=!0,this.compFiles=[],Object.keys(this.fileTagLangMapping).forEach(t=>{this.compFiles.push({tag:t,lang:this.fileTagLangMapping[t],name:`${o}.${t.toLowerCase()}`,code:""})}),this.currentTabIndex=0,this.changeCompFile({index:this.currentTabIndex,tab:null})}})}ngOnInit(){}ngOnDestroy(){this.subs.unsubscribe()}changeCompFile(t){const n=this.compFiles[t.index];n.code||this.subs.add(this.http.get(n.name,{responseType:"text"}).subscribe(t=>{n.code=t}))}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(r.e),s.Lb(l.b))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-dev"]],decls:4,vars:2,consts:[[3,"title"],[1,"page-container"],["class","code-section",4,"ngIf"],[1,"code-section"],[3,"selectedIndex","selectedIndexChange","selectedTabChange"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"language","content","hideLineNumbers"]],template:function(t,n){1&t&&(s.Mb(0,"app-page-header",0),s.Rb(1,"div",1),s.Mb(2,"router-outlet"),s.Ac(3,M,3,3,"section",2),s.Qb()),2&t&&(s.hc("title",n.title),s.zb(3),s.hc("ngIf",n.showCode))},directives:[b.a,r.i,o.l,d.b,o.k,d.a,k],styles:[".code-section[_ngcontent-%COMP%]{margin-top:2rem}"]}),t})();var y=e("fdqv"),w=e("pnFD"),O=e("0IaG"),L=e("d/rN"),x=e("kmnG"),z=e("qFsG");function I(t,n){if(1&t&&(s.Rb(0,"h3"),s.Cc(1),s.Qb()),2&t){const t=s.cc();s.zb(1),s.Ec("Hi ",t.name,"!")}}let P=(()=>{class t{constructor(t,n){this.app=t,this.dialog=n}ngOnInit(){}close(){this.dialog.close()}save(){this.pending=!0,this.app.status.requesting(),setTimeout(()=>{this.close(),this.pending=!1,this.app.status.requested(),this.app.notificaiton.info(`Saving ${name} ...`)},3e3)}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(w.a),s.Lb(O.g))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-examples-dialog-form"]],decls:17,vars:6,consts:[["title","Form",3,"showCloseIcon","loading"],["body",""],[2,"width","600px"],[1,"full-width"],["name","name","matInput","","placeholder","Your name...",3,"ngModel","ngModelChange"],["rows","8","name","des","matInput","","placeholder","Your name..."],[4,"ngIf"],["footer",""],["mat-raised-button","",3,"disabled","click"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(t,n){1&t&&(s.Rb(0,"app-dialog",0),s.Pb(1,1),s.Rb(2,"form",2),s.Rb(3,"mat-form-field",3),s.Rb(4,"mat-label"),s.Cc(5,"Name"),s.Qb(),s.Rb(6,"input",4),s.Yb("ngModelChange",(function(t){return n.name=t})),s.Qb(),s.Qb(),s.Rb(7,"mat-form-field",3),s.Rb(8,"mat-label"),s.Cc(9,"Description"),s.Qb(),s.Mb(10,"textarea",5),s.Qb(),s.Qb(),s.Ac(11,I,2,1,"h3",6),s.Ob(),s.Pb(12,7),s.Rb(13,"button",8),s.Yb("click",(function(){return n.close()})),s.Cc(14," Cancel "),s.Qb(),s.Rb(15,"button",9),s.Yb("click",(function(){return n.save()})),s.Cc(16," Save "),s.Qb(),s.Ob(),s.Qb()),2&t&&(s.hc("showCloseIcon",!0)("loading",n.pending),s.zb(6),s.hc("ngModel",n.name),s.zb(5),s.hc("ngIf",n.name),s.zb(2),s.hc("disabled",n.pending),s.zb(2),s.hc("disabled",n.pending))},directives:[L.a,m.q,m.l,m.m,x.c,x.f,z.a,m.b,m.k,m.n,o.l,g.b],styles:[""]}),t})();var _=e("J9tS");const S=function(t){return{loading:t}};let F=(()=>{class t{constructor(t,n,e,o){this.http=t,this.app=n,this.status=e,this.notification=o,this.buttonLoading=!1,this.requesting=!1}ngOnInit(){}toggleRequesting(){this.requesting=!this.requesting,this.requesting?this.status.requesting():this.status.requested()}showInfo(t){this.notification.info(t)}showSuccess(t){this.notification.success(t)}showWarning(t){this.notification.warn(t)}showError(t){this.notification.error(t)}alert(){this.app.dialog.alert("Alert Dialog","This is an alert dialog.",()=>{this.notification.info("Done")})}confirm(){this.app.dialog.confirm("Confirm Dialog","This is a confirm dialog.",()=>{this.notification.info("Done")})}delete(){this.app.dialog.deleteConfirm(()=>{this.notification.info("Done")})}formDialog(){this.app.dialog.open(P,{},()=>{})}requestError(){Object(y.c)(this.http).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(l.b),s.Lb(_.a),s.Lb(_.g),s.Lb(_.e))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-examples-button"]],decls:42,vars:22,consts:[["mat-raised-button","",3,"click"],["mat-raised-button","",3,"ngClass","click"],["mat-raised-button","","color","primary",3,"ngClass","disabled","click"],["mat-fab","","color","primary",3,"ngClass","click"],["mat-fab","","color","primary",3,"ngClass","disabled","click"],["mat-mini-fab","","color","primary",3,"ngClass","disabled","click"],["mat-icon-button","","color","primary",3,"ngClass","disabled","click"]],template:function(t,n){1&t&&(s.Rb(0,"button",0),s.Yb("click",(function(){return n.toggleRequesting()})),s.Cc(1,"Global Progress"),s.Qb(),s.Rb(2,"button",1),s.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),s.Cc(3,"Loading Button"),s.Qb(),s.Rb(4,"button",2),s.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),s.Cc(5,"Loading"),s.Qb(),s.Rb(6,"button",3),s.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),s.Rb(7,"mat-icon"),s.Cc(8,"save"),s.Qb(),s.Qb(),s.Rb(9,"button",4),s.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),s.Rb(10,"mat-icon"),s.Cc(11,"save"),s.Qb(),s.Qb(),s.Rb(12,"button",5),s.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),s.Rb(13,"mat-icon"),s.Cc(14,"save"),s.Qb(),s.Qb(),s.Rb(15,"button",6),s.Yb("click",(function(){return n.buttonLoading=!n.buttonLoading})),s.Rb(16,"mat-icon"),s.Cc(17,"save"),s.Qb(),s.Qb(),s.Mb(18,"br"),s.Mb(19,"br"),s.Rb(20,"button",0),s.Yb("click",(function(){return n.showInfo("Information")})),s.Cc(21,"Show Information"),s.Qb(),s.Rb(22,"button",0),s.Yb("click",(function(){return n.showSuccess("Success")})),s.Cc(23,"Show Success"),s.Qb(),s.Rb(24,"button",0),s.Yb("click",(function(){return n.showWarning("Warning")})),s.Cc(25,"Show Warning"),s.Qb(),s.Rb(26,"button",0),s.Yb("click",(function(){return n.showError("Error")})),s.Cc(27,"Show Error"),s.Qb(),s.Mb(28,"br"),s.Mb(29,"br"),s.Rb(30,"button",0),s.Yb("click",(function(){return n.alert()})),s.Cc(31,"Alert"),s.Qb(),s.Rb(32,"button",0),s.Yb("click",(function(){return n.confirm()})),s.Cc(33,"Confirm"),s.Qb(),s.Rb(34,"button",0),s.Yb("click",(function(){return n.delete()})),s.Cc(35,"Delete Confirm"),s.Qb(),s.Rb(36,"button",0),s.Yb("click",(function(){return n.formDialog()})),s.Cc(37,"Form Dialog"),s.Qb(),s.Mb(38,"br"),s.Mb(39,"br"),s.Rb(40,"button",0),s.Yb("click",(function(){return n.requestError()})),s.Cc(41,"Request with Error"),s.Qb()),2&t&&(s.zb(2),s.hc("ngClass",s.kc(10,S,n.buttonLoading)),s.zb(2),s.hc("ngClass",s.kc(12,S,n.buttonLoading))("disabled",n.buttonLoading),s.zb(2),s.hc("ngClass",s.kc(14,S,n.buttonLoading)),s.zb(3),s.hc("ngClass",s.kc(16,S,n.buttonLoading))("disabled",n.buttonLoading),s.zb(3),s.hc("ngClass",s.kc(18,S,n.buttonLoading))("disabled",n.buttonLoading),s.zb(3),s.hc("ngClass",s.kc(20,S,n.buttonLoading))("disabled",n.buttonLoading))},directives:[g.b,o.j,p.a],styles:["button[_ngcontent-%COMP%]{margin-right:.5rem}"]}),t})();var Y=e("Wp6s");function T(t,n){if(1&t&&(s.Rb(0,"a",1),s.Cc(1),s.Qb()),2&t){const t=n.$implicit;s.hc("routerLink",t.value),s.zb(1),s.Dc(t.key)}}let E=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["app-icon-card"]],inputs:{color:"color",icon:"icon",value:"value",label:"label",links:"links"},decls:10,vars:9,consts:[["routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active",3,"routerLink"]],template:function(t,n){1&t&&(s.Rb(0,"mat-card"),s.Rb(1,"mat-icon"),s.Cc(2),s.Qb(),s.Rb(3,"mat-card-title"),s.Cc(4),s.Qb(),s.Rb(5,"mat-card-subtitle"),s.Cc(6),s.Qb(),s.Rb(7,"mat-card-footer"),s.Ac(8,T,2,2,"a",0),s.dc(9,"keyvalue"),s.Qb(),s.Qb()),2&t&&(s.Cb("mat-",n.color,""),s.zb(2),s.Dc(n.icon),s.zb(2),s.Dc(n.value),s.zb(2),s.Dc(n.label),s.zb(2),s.hc("ngForOf",s.ec(9,7,n.links)))},directives:[Y.a,p.a,Y.h,Y.g,Y.d,o.k,r.g,r.f],pipes:[o.f],styles:["[_nghost-%COMP%]{display:block;min-width:200px;width:100%}[_nghost-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%]{transform:scale(1.25)}[color][_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:#dedede}[color][_nghost-%COMP%]   .mat-card[_ngcontent-%COMP%], [color][_nghost-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.7)}[color][_nghost-%COMP%]:hover   .mat-card[_ngcontent-%COMP%], [color][_nghost-%COMP%]:hover   .mat-card-subtitle[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]:not(:first-child), [_nghost-%COMP%]     .mat-card-title:not(:first-child){margin-top:0}a[_ngcontent-%COMP%]{text-decoration:none}.mat-icon[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;font-size:3.5rem;opacity:.2;width:inherit;height:inherit;transition:all .5s ease-in-out}.mat-card-title[_ngcontent-%COMP%]{margin-top:0}.mat-card-footer[_ngcontent-%COMP%]{display:flex;text-align:center;font-size:.85rem}.mat-card-footer[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1;cursor:pointer;padding:5px;background-color:rgba(0,0,0,.1)}.mat-card-footer[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.2)}[color=primary][_nghost-%COMP%]     .mat-card{background-color:var(----primary)}[color=accent][_nghost-%COMP%]     .mat-card{background-color:var(----accent)}[color=warn][_nghost-%COMP%]     .mat-card{background-color:var(----warn)} .popular -shadowcsshost-no-combinator[color=primary]   .mat-card{background-color:var(--popular--primary)} .popular -shadowcsshost-no-combinator[color=accent]   .mat-card{background-color:var(--popular--accent)} .popular -shadowcsshost-no-combinator[color=warn]   .mat-card{background-color:var(--popular--warn)} .dark -shadowcsshost-no-combinator[color=primary]   .mat-card{background-color:var(--dark--primary)} .dark -shadowcsshost-no-combinator[color=accent]   .mat-card{background-color:var(--dark--accent)} .dark -shadowcsshost-no-combinator[color=warn]   .mat-card{background-color:var(--dark--warn)}"]}),t})(),H=(()=>{class t{constructor(){this.links={"Link #1":"link-url","Link #2":"link-url"}}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["app-examples-card"]],decls:5,vars:4,consts:[[1,"row","gutter"],["color","primary","icon","shopping_cart","label","New Orders","value","123,231",3,"links"],["color","accent","icon","shopping_cart","label","New Orders","value","123,231",3,"links"],["color","warn","icon","shopping_cart","label","New Orders","value","123,231",3,"links"],["icon","shopping_cart","label","New Orders","value","123,231",3,"links"]],template:function(t,n){1&t&&(s.Rb(0,"div",0),s.Mb(1,"app-icon-card",1),s.Mb(2,"app-icon-card",2),s.Mb(3,"app-icon-card",3),s.Mb(4,"app-icon-card",4),s.Qb()),2&t&&(s.zb(1),s.hc("links",n.links),s.zb(1),s.hc("links",n.links),s.zb(1),s.hc("links",n.links),s.zb(1),s.hc("links",n.links))},directives:[E],styles:[""]}),t})();var D=e("lJxs");let N=(()=>{class t{constructor(t){this.route=t,this.hero={}}ngOnInit(){this.route.paramMap.pipe(Object(D.a)(t=>{this.hero.id=+t.get("id")})).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(r.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-examples-table-detail"]],decls:3,vars:1,template:function(t,n){1&t&&(s.Rb(0,"mat-card"),s.Rb(1,"h1"),s.Cc(2),s.Qb(),s.Qb()),2&t&&(s.zb(2),s.Ec(" # ",n.hero.id,""))},directives:[Y.a],styles:["[_nghost-%COMP%]{display:block}"]}),t})();var q=e("3E0/"),j=e("sh5h"),A=e("snN1");let $=(()=>{class t{constructor(t,n,e){this.el=t,this.renderer=n,this.document=e}ngOnChanges(t){t.loading&&(t.loading.currentValue?this.enable():this.disable())}enable(){this.el.nativeElement.classList.add("overlay-parent"),this.renderer.appendChild(this.el.nativeElement,this.getElement())}disable(){this.el.nativeElement.classList.remove("overlay-parent"),this.el.nativeElement.querySelector(".overlay-loading")&&this.renderer.removeChild(this.el.nativeElement,this.el.nativeElement.querySelector(".overlay-loading"))}getElement(){const t=this.document.createElement("div");t.className="overlay overlay-loading";const n=this.document.createElement("div");if(n.className="loading-body",n.innerHTML='<svg class="loading-spinner" viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>',t.appendChild(n),this.loadingText){const t=this.document.createElement("div");t.classList.add("loading-text"),t.innerHTML=this.loadingText,n.appendChild(t)}return t}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(s.l),s.Lb(s.E),s.Lb(o.d))},t.\u0275dir=s.Gb({type:t,selectors:[["","uiLoading",""]],inputs:{loading:["uiLoading","loading"],loadingText:"loadingText"},features:[s.xb]}),t})();var J=e("M9IT");const G=["contentSidebar"],W=function(t){return{active:t}};function X(t,n){if(1&t){const t=s.Sb();s.Rb(0,"tr",17),s.Rb(1,"td"),s.Cc(2),s.Qb(),s.Rb(3,"td"),s.Cc(4),s.Qb(),s.Rb(5,"td"),s.Rb(6,"a",18),s.Cc(7,"open in current page"),s.Qb(),s.Qb(),s.Rb(8,"td",19),s.Rb(9,"button",20),s.Yb("click",(function(){s.rc(t);const e=n.$implicit;return s.cc(2).gotoDetail(e.id)})),s.Rb(10,"mat-icon"),s.Cc(11,"edit"),s.Qb(),s.Qb(),s.Rb(12,"button",21),s.Yb("click",(function(){s.rc(t);const e=n.$implicit;return s.cc(2).remove(e.id)})),s.Rb(13,"mat-icon"),s.Cc(14,"delete"),s.Qb(),s.Qb(),s.Qb(),s.Qb()}if(2&t){const t=n.$implicit,e=s.cc(2);s.hc("ngClass",s.kc(4,W,e.activedHero&&t.id===e.activedHero.id)),s.zb(2),s.Dc(t.id),s.zb(2),s.Dc(t.name),s.zb(2),s.hc("routerLink",t.id)}}const Z=function(){return[5,10,25,100]};function B(t,n){if(1&t){const t=s.Sb();s.Rb(0,"div",10),s.Rb(1,"div",11),s.Rb(2,"table",12),s.Rb(3,"thead"),s.Rb(4,"tr"),s.Rb(5,"th"),s.Cc(6,"ID"),s.Qb(),s.Rb(7,"th"),s.Cc(8,"Name"),s.Qb(),s.Mb(9,"th"),s.Mb(10,"th"),s.Qb(),s.Qb(),s.Rb(11,"tbody"),s.Ac(12,X,15,6,"tr",13),s.Qb(),s.Rb(13,"tfoot"),s.Rb(14,"tr"),s.Rb(15,"td",14),s.Rb(16,"mat-paginator",15),s.Yb("page",(function(n){return s.rc(t),s.cc().getHeroes(n)})),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(17,"div",16),s.Mb(18,"router-outlet"),s.Qb(),s.Qb()}if(2&t){const t=s.cc();s.zb(1),s.hc("uiLoading",t.loading),s.zb(11),s.hc("ngForOf",t.heroes),s.zb(4),s.hc("length",100)("pageSize",10)("pageSizeOptions",s.jc(5,Z))}}function U(t,n){if(1&t){const t=s.Sb();s.Rb(0,"form",22),s.Rb(1,"mat-form-field"),s.Rb(2,"input",23),s.Yb("ngModelChange",(function(n){return s.rc(t),s.cc().activedHero.name=n})),s.Qb(),s.Qb(),s.Qb()}if(2&t){const t=s.cc();s.zb(2),s.hc("ngModel",t.activedHero.name)}}const V=function(t){return{loading:t}};let K=(()=>{class t{constructor(t,n,e){this.http=t,this.app=n,this.notification=e,this.heroes=[],this.saving=!1,this.loading=!1,this.initlizating=!1}ngOnInit(){this.getHeroes(null)}getHeroes(t){t?this.loading=!0:this.initlizating=!0,this.http.get(Object(y.a)("/assets/heroes.json?p="+(t?t.pageIndex:0))).pipe(Object(q.a)(2e3)).subscribe(n=>{this.heroes=n,t?this.loading=!1:this.initlizating=!1})}gotoDetail(t){this.activedHero=Object.assign({},this.heroes.find(n=>n.id===t))}save(){this.saving=!0,Object(y.d)().subscribe(()=>{this.saving=!1;const t=this.heroes.findIndex(t=>t.id===this.activedHero.id);this.heroes[t]=Object.assign({},this.activedHero),this.activedHero=null,this.notification.success("Save Successfully.")})}remove(t){this.app.dialog.deleteConfirm(()=>{alert("ok")})}onClosedContentSidebar(){this.activedHero=null}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(l.b),s.Lb(w.a),s.Lb(_.e))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-examples-table"]],viewQuery:function(t,n){var e;1&t&&s.Gc(G,!0),2&t&&s.nc(e=s.Zb())&&(n.contentSidebarRef=e.first)},decls:13,vars:10,consts:[[3,"loading"],["class","row",4,"ngIf"],["elementsToOpen",".btn-edit",3,"title","progressShown","open","closed"],["contentSidebar",""],[1,"padding"],["style","height: 2000px;",4,"ngIf"],[1,"footer","row"],[1,"fill","text-block"],[1,"right"],["mat-raised-button","","color","primary",3,"ngClass","disabled","click"],[1,"row"],["loadingText","Fetching data...",1,"fill",3,"uiLoading"],[1,"border-radius"],[3,"ngClass",4,"ngFor","ngForOf"],["colspan","5"],[3,"length","pageSize","pageSizeOptions","page"],[1,"margin-left"],[3,"ngClass"],[3,"routerLink"],[1,"no-padding"],["mat-icon-button","",1,"btn-edit",3,"click"],["mat-icon-button","",1,"btn-delete",3,"click"],[2,"height","2000px"],["matInput","","name","name","placeholder","Name",3,"ngModel","ngModelChange"]],template:function(t,n){1&t&&(s.Rb(0,"div"),s.Mb(1,"app-page-loading",0),s.Ac(2,B,19,6,"div",1),s.Rb(3,"app-content-sidebar",2,3),s.Yb("closed",(function(){return n.onClosedContentSidebar()})),s.Rb(5,"div",4),s.Ac(6,U,3,1,"form",5),s.Qb(),s.Rb(7,"div",6),s.Rb(8,"div",7),s.Cc(9," Here to place footer. "),s.Qb(),s.Rb(10,"div",8),s.Rb(11,"button",9),s.Yb("click",(function(){return n.save()})),s.Cc(12,"Save"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&t&&(s.zb(1),s.hc("loading",n.initlizating),s.zb(1),s.hc("ngIf",!n.initlizating),s.zb(1),s.hc("title","#"+(null==n.activedHero?null:n.activedHero.id)+" "+(null==n.activedHero?null:n.activedHero.name))("progressShown",n.saving)("open",n.activedHero),s.zb(3),s.hc("ngIf",n.activedHero),s.zb(5),s.hc("ngClass",s.kc(8,V,n.saving))("disabled",n.saving))},directives:[j.a,o.l,A.a,g.b,o.j,$,o.k,J.a,r.i,r.g,p.a,m.q,m.l,m.m,x.c,z.a,m.b,m.k,m.n],styles:[""]}),t})();const tt=[{path:"",component:Q,children:[{path:"get-started",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["app-get-started"]],decls:2,vars:0,template:function(t,n){1&t&&(s.Rb(0,"p"),s.Cc(1,"get-started works!"),s.Qb())},styles:[""]}),t})()},{path:"examples/button",component:F},{path:"examples/card",component:H},{path:"examples/table",component:K,children:[{path:":id",component:N}]}]}];let nt=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(n){return new(n||t)},imports:[[r.h.forChild(tt)],r.h]}),t})(),et=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(n){return new(n||t)},imports:[[o.c,nt,i.a,c.b]]}),t})()}}]);