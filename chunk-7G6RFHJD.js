import{a as F}from"./chunk-7QHIRDVO.js";import{x as C}from"./chunk-XLRDFYX2.js";import{Ab as i,Bb as o,Cb as l,Db as j,Gb as _,Hb as g,Ib as v,Jb as m,Kb as z,Rb as I,Z as k,Za as d,_a as b,_b as h,ca as P,g as y,ia as p,kb as u,qb as T,ra as O,rb as s,sa as S,sb as D,ta as E,wb as x,ya as w}from"./chunk-UKUGK3I5.js";var ne=[{label:"English",value:"en",img:"assets/images/flags/en.png"},{label:"Fran\xE7ais",value:"fr",img:"assets/images/flags/fr.png"},{label:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629",value:"ar",img:"assets/images/flags/ar.png"}],U=new Date,ie=Array.from({length:30},(t,e)=>{let r=new Date(U);return r.setDate(U.getDate()-e),{label:e==0?"Aujourdhui":r.toLocaleDateString(),value:r.toISOString()}});var R=[[["","modal-body",""]],[["","modal-header",""]],[["","modal-footer",""]]],A=["[modal-body]","[modal-header]","[modal-footer]"];function W(t,e){if(t&1){let r=j();i(0,"i",7),_("click",function(){S(r);let n=g(2);return E(n.onCloseModal())}),o()}}function X(t,e){if(t&1&&(i(0,"div",2)(1,"div",5),m(2,1),o(),u(3,W,1,0,"i",6),o()),t&2){let r=g();d(3),x(r.closable?3:-1)}}function B(t,e){t&1&&(i(0,"div",4),m(1,2),o())}var be=(()=>{let e=class e{constructor(a,n){this.applicationService=a,this.dropdownService=n,this.closable=!0,this.showHeader=!0,this.closeModal=new w}onCloseModal(){this.applicationService.removeClassFromDiv(this.modalId,"scale-in-center"),this.applicationService.addClassToDiv(this.modalId,"scale-out-center"),setTimeout(()=>{this.showModal=!1,this.closeModal.emit(this.showModal)},500)}ngOnInit(){}ngOnChanges(a){this.applicationService.removeClassFromDiv(this.modalId,"scale-out-center"),this.applicationService.addClassToDiv(this.modalId,"scale-in-center")}onScroll(a){}};e.\u0275fac=function(n){return new(n||e)(b(C),b(F))},e.\u0275cmp=p({type:e,selectors:[["app-modal"]],inputs:{showModal:"showModal",closable:"closable",showFooter:"showFooter",showHeader:"showHeader",icon:"icon",title:"title",height:"height",top:"top",width:"width",showDetails:"showDetails",modalId:"modalId"},outputs:{closeModal:"closeModal"},standalone:!0,features:[O,h],ngContentSelectors:A,decls:6,vars:10,consts:[[1,"modal"],[1,"modal-content",3,"id"],[1,"d-flex","align-center","justify-content-between","header"],[1,"body",3,"scroll"],[1,"footer"],[1,"row","d-flex","align-center","justify-start"],[1,"ri-close-fill","close-icon","clickable","cursor-pointer"],[1,"ri-close-fill","close-icon","clickable","cursor-pointer",3,"click"]],template:function(n,c){n&1&&(v(R),i(0,"div",0)(1,"div",1),u(2,X,4,1,"div",2),i(3,"div",3),_("scroll",function(N){return c.onScroll(N)}),m(4),o(),u(5,B,2,0,"div",4),o()()),n&2&&(I("--modal-width:",c.width,`;
--modal-height:`,c.height," ; --modal-top:",c.top,""),D("show",c.showModal),d(),z("id",c.modalId),d(),x(c.showHeader?2:-1),d(3),x(c.showFooter?5:-1))},styles:["[_nghost-%COMP%]{position:relative}.modal[_ngcontent-%COMP%]{display:none;position:fixed;z-index:100;left:0;top:0;width:100%;height:100%;overflow:hidden;background-color:#0006;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.modal.show[_ngcontent-%COMP%]{display:block}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{background-color:var(--bg-color);margin:1rem auto;border:1px solid #888;width:var(--modal-width);border-radius:.5rem;display:flex;flex-direction:column;overflow:hidden;height:var(--modal-height);max-height:90vh;overflow-y:auto;color:var(--font-color);position:relative;top:var(--modal-top)}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:.5rem 1.25rem;margin-bottom:0;border-bottom:1px solid rgba(0,0,0,.1)}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:1.25rem 2rem;overflow:auto;height:100%}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{padding:.5rem 1.25rem;margin-bottom:0;border-top:1px solid rgba(0,0,0,.1)}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:var(--main-primary-color);background-color:var(--main-bg-color);border-radius:50%;border:solid 1px var(--main-primary-color);cursor:pointer}@media (max-width: 767px){.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{width:95%}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:1rem .5rem}}@media only screen and (min-width: 900px) and (max-width: 1400px) and (min-height: 1300px) and (max-height: 2000px){.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{width:95%}}"]});let t=e;return t})();function V(t,e){if(t&1&&(i(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8)(4,"div",9),l(5,"div",10),o(),i(6,"div",11),l(7,"div",12)(8,"div",12),o()()(),i(9,"div",7)(10,"div",13),l(11,"div",14)(12,"div",14),o()()()()),t&2){let r=g();s("height",r.height+"%")("max-height",r.maxHeight,"px")}}function L(t,e){if(t&1&&(i(0,"div",15),l(1,"div",16)(2,"div",17)(3,"div",17),o()),t&2){let r=g();s("height",r.height+"%")("max-height",r.maxHeight,"px")}}function q(t,e){t&1&&(i(0,"div",2),l(1,"div",18),o())}function G(t,e){if(t&1&&(i(0,"div",2)(1,"div",19)(2,"div",20),l(3,"div",21),o(),i(4,"div",22),l(5,"div",12),o(),i(6,"div",22),l(7,"div",12),o(),i(8,"div",22),l(9,"div",12),o(),i(10,"div",22),l(11,"div",12),o(),i(12,"div",22),l(13,"div",12),o()()()),t&2){let r=g();s("height",r.height+"px")("max-height",r.maxHeight,"px")}}function J(t,e){t&1&&(i(0,"div",2),l(1,"div",23),o())}function K(t,e){t&1&&(i(0,"div",24)(1,"div",25),l(2,"div",26)(3,"div",27),o()()),t&2&&(s("width",100)("margin",0),d(2),s("height",20,"px")("width",20,"px"),d(),s("width",50,"px")("height",11,"px")("min-height",11,"px"))}function Q(t,e){if(t&1&&(i(0,"div",2),l(1,"div",28),o()),t&2){let r=g();s("height",r.height,"px")("max-height",r.maxHeight,"px")}}var xe=(()=>{let e=class e{constructor(){this.height=100,this.maxHeight=100}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-skelton"]],inputs:{shape:"shape",height:"height",maxHeight:"maxHeight"},standalone:!0,features:[h],decls:7,vars:1,consts:[[1,"skeleton-card","d-flex","justify-content-center","small-padding",3,"height","max-height"],[1,"skeleton-card","d-flex","flex-column","small-padding",3,"height","max-height"],[1,"skeleton-card","small-padding"],[1,"skeleton-card","small-padding",3,"height","max-height"],[1,"small-padding",3,"width","margin"],[1,"skeleton-card","d-flex","justify-content-center","small-padding"],[1,"row","col-12"],[1,"col-6"],[1,"row","align-center"],[1,"col-2","mr-20"],[1,"skeleton","skeleton-circle"],[1,"col-5"],[1,"skeleton","skeleton-text"],[1,"d-flex","flex-column"],[1,"skeleton","skeleton-text","mb-5"],[1,"skeleton-card","d-flex","flex-column","small-padding"],[1,"skeleton","skeleton-rectangle","w-50"],[1,"skeleton","skeleton-text","mt-10"],[1,"skeleton","skeleton-text","w-100"],[1,"row"],[1,"col-2"],[1,"skeleton","skeleton-rectangle",2,"height","80px","width","80px"],[1,"col-2","content-center"],[1,"skeleton","skeleton-rectangle",2,"height","40px","width","40px"],[1,"small-padding"],[1,"h-100","w-100","d-flex","align-center","justify-start"],[1,"skeleton","skeleton-circle","mr-5"],[1,"skeleton","skeleton-rectangle"],[1,"h-100","w-100","skeleton-rectangle"]],template:function(n,c){if(n&1&&u(0,V,13,4,"div",0)(1,L,4,4,"div",1)(2,q,2,0,"div",2)(3,G,14,4,"div",3)(4,J,2,0,"div",2)(5,K,4,14,"div",4)(6,Q,2,4,"div",3),n&2){let f;x((f=c.shape)==="dr-banner"?0:f==="notification-card"?1:f==="inputs-shape"?2:f==="data"?3:f==="menu-shape"?4:f==="top-bar-shape"?5:6)}},styles:[".skeleton-card[_ngcontent-%COMP%]{background-color:var(--bg-color);border-radius:1em;box-shadow:0 2px 4px #00000014;padding:10px;margin-bottom:20px;width:100%;height:auto}.skeleton[_ngcontent-%COMP%]{background-color:#f0f0f0;border-radius:4px;min-height:20px}.skeleton-text[_ngcontent-%COMP%]{background-color:#e0e0e0;height:1em;margin:.5em 0;border-radius:4px;animation:_ngcontent-%COMP%_skeleton-loading 1s linear infinite alternate}.skeleton-circle[_ngcontent-%COMP%]{background-color:#e0e0e0;border-radius:50%;height:80px;width:80px;animation:_ngcontent-%COMP%_skeleton-loading 1s linear infinite alternate}.skeleton-rectangle[_ngcontent-%COMP%]{background-color:#e0e0e0;height:100px;width:100%;border-radius:4px;animation:_ngcontent-%COMP%_skeleton-loading 1s linear infinite alternate}@keyframes _ngcontent-%COMP%_skeleton-loading{0%{background-color:#dcdada}to{background-color:#f3f1f1}}"]});let t=e;return t})();var Y=[[["","toggle-from-icon",""]],[["","toggle-to-icon",""]]],Z=["[toggle-from-icon]","[toggle-to-icon]"],ye=(()=>{let e=class e{constructor(){this.toggle=new w,this.isToggled=!1,this.disable=!1}ngOnInit(){}onToggle(){this.disable||(this.isToggled=!this.isToggled,this.toggle.emit(this.isToggled))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-toggle"]],inputs:{isToggled:"isToggled",disable:"disable"},outputs:{toggle:"toggle"},standalone:!0,features:[h],ngContentSelectors:Z,decls:6,vars:4,consts:[[1,"d-flex","align-center","justify-content-between"],[1,"switch"],["type","checkbox",3,"click","checked","disabled"],[1,"slider","round"]],template:function(n,c){n&1&&(v(Y),i(0,"div",0),m(1),i(2,"label",1)(3,"input",2),_("click",function(){return c.onToggle()}),o(),l(4,"span",3),o(),m(5,1),o()),n&2&&(d(2),s("opacity",c.disable?50:100,"%"),d(),T("checked",c.isToggled)("disabled",c.disable))},styles:['@font-face{font-family:Ubuntu;src:url("./media/Ubuntu-Regular-55DNWN2R.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--bg-color: #ffffff;--font-color: #000000;--hover-font-color: #000000;--input-border-color: rgba(128, 128, 128, .44);--main-bg-color: #f2f2f2;--main-primary-color: #C7253E;--main-secoundary-color: #f9e9eb;--focus-border-color: #E8476057;--btn-bg-color:#C7253E;--btn-color:#ffffff;--btn-hover-color:#8b192b;--card-footer-border-color:rgba(27, 31, 35, .15);--footer-color:#000;--box-shadow: $box-shadow}[data-theme=dark][_ngcontent-%COMP%]{--bg-color: #161625;--font-color: #ffffff;--hover-font-color: #000000;--input-border-color: #E8476057;--main-bg-color: rgb(14, 14, 27);--main-primary-color: #C7253E;--main-secoundary-color: #f9e9eb;--focus-border-color: rgba(255, 255, 255, .16);--btn-bg-color:#C7253E;--btn-color:#ffffff;--btn-hover-color:#8b192b;--card-footer-border-color:rgba(60, 64, 68, .78);--footer-color:#fff;--box-shadow: $box-shadow}[_ngcontent-%COMP%]:dir(ltr){font-family:Ubuntu,sans-serif;--small-font-size: 11px;--normal-font-size: 14px;--medium-font-size: 18px;--big-font-size: 21px}[_ngcontent-%COMP%]:dir(rtl){font-family:Ubuntu,sans-serif;--small-font-size: 13px;--normal-font-size: 16px;--medium-font-size: 20px;--big-font-size: 23px}.excel-color[_ngcontent-%COMP%]{color:green!important}.pdf-color[_ngcontent-%COMP%]{color:#ff4500!important}.focus-color[_ngcontent-%COMP%]{border-color:var(--main-secoundary-color);outline:0;-webkit-box-shadow:0 0 0 .1rem rgba(199,37,62,.31);box-shadow:0 0 0 .1rem #c7253e4f}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:1em}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#7b747470;-webkit-transition:.4s;transition:.4s;font-size:1em!important;box-shadow:#3c40434d 0 1px 2px,#3c404326 0 2px 6px 2px}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:1em;width:1em;background-color:#fff;-webkit-transition:.4s;transition:.4s}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:var(--main-primary-color)}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px var(--main-bg-color)}input[_ngcontent-%COMP%]:checked:dir(ltr) + .slider[_ngcontent-%COMP%]:before{-webkit-transform:translateX(1em);-ms-transform:translateX(1em);transform:translate(1em)}input[_ngcontent-%COMP%]:checked:dir(rtl) + .slider[_ngcontent-%COMP%]:before{-webkit-transform:translateX(-1em);-ms-transform:translateX(-1em);transform:translate(-1em)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}']});let t=e;return t})();var $=(()=>{let e=class e{constructor(a){this.applicationService=a,this.schedulingSubscription=null,this.schedulingSubject=new y({}),this.scheduling$=this.schedulingSubject.asObservable()}};e.\u0275fac=function(n){return new(n||e)(P(C))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var te=[[["","right-content",""]]],oe=["[right-content]"],Ee=(()=>{let e=class e{constructor(a,n){this.applicationService=a,this.schedulingService=n}ngOnInit(){this.schedulingService.scheduling$.subscribe(a=>{this.data=a})}};e.\u0275fac=function(n){return new(n||e)(b(C),b($))},e.\u0275cmp=p({type:e,selectors:[["app-right"]],standalone:!0,features:[h],ngContentSelectors:oe,decls:2,vars:0,consts:[[1,"d-flex","flex-column","align-center"]],template:function(n,c){n&1&&(v(te),i(0,"div",0),m(1),o())},styles:['@font-face{font-family:Ubuntu;src:url("./media/Ubuntu-Regular-55DNWN2R.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--bg-color: #ffffff;--font-color: #000000;--hover-font-color: #000000;--input-border-color: rgba(128, 128, 128, .44);--main-bg-color: #f2f2f2;--main-primary-color: #C7253E;--main-secoundary-color: #f9e9eb;--focus-border-color: #E8476057;--btn-bg-color:#C7253E;--btn-color:#ffffff;--btn-hover-color:#8b192b;--card-footer-border-color:rgba(27, 31, 35, .15);--footer-color:#000;--box-shadow: $box-shadow}[data-theme=dark][_ngcontent-%COMP%]{--bg-color: #161625;--font-color: #ffffff;--hover-font-color: #000000;--input-border-color: #E8476057;--main-bg-color: rgb(14, 14, 27);--main-primary-color: #C7253E;--main-secoundary-color: #f9e9eb;--focus-border-color: rgba(255, 255, 255, .16);--btn-bg-color:#C7253E;--btn-color:#ffffff;--btn-hover-color:#8b192b;--card-footer-border-color:rgba(60, 64, 68, .78);--footer-color:#fff;--box-shadow: $box-shadow}[_ngcontent-%COMP%]:dir(ltr){font-family:Ubuntu,sans-serif;--small-font-size: 11px;--normal-font-size: 14px;--medium-font-size: 18px;--big-font-size: 21px}[_ngcontent-%COMP%]:dir(rtl){font-family:Ubuntu,sans-serif;--small-font-size: 13px;--normal-font-size: 16px;--medium-font-size: 20px;--big-font-size: 23px}.excel-color[_ngcontent-%COMP%]{color:green!important}.pdf-color[_ngcontent-%COMP%]{color:#ff4500!important}.focus-color[_ngcontent-%COMP%]{border-color:var(--main-secoundary-color);outline:0;-webkit-box-shadow:0 0 0 .1rem rgba(199,37,62,.31);box-shadow:0 0 0 .1rem #c7253e4f}.history[_ngcontent-%COMP%]{margin:0 20px;height:180px;max-height:180px;overflow-y:scroll;padding:0 0 13px}.history-title[_ngcontent-%COMP%]{margin-bottom:20px;color:var(--font-color);font-weight:600;font-size:17px;position:sticky;top:0;z-index:2;background-color:var(--bg-color);width:100%;text-align:center}.history-data[_ngcontent-%COMP%]{margin-bottom:10px;text-align:left}.history-data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--font-color);font-weight:600;font-size:10px}']});let t=e;return t})();export{ne as a,ie as b,ye as c,be as d,xe as e,Ee as f};
