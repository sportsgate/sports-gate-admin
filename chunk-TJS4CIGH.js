import{a as N}from"./chunk-7QHIRDVO.js";import{v as $,w as j,x as B}from"./chunk-U2CVJBPD.js";import{$b as k,Ab as c,Bb as s,Cb as V,Db as g,Gb as a,Hb as l,Ib as F,Jb as z,Sb as f,Ub as m,Xa as I,Za as p,_a as D,_b as L,dc as y,ec as M,ia as S,kb as d,mb as w,nb as x,ra as T,sa as _,sb as E,ta as u,wb as b,xb as O,ya as G,yb as v,zb as P}from"./chunk-UKUGK3I5.js";var H=[[["validator-message"]]],U=["validator-message"],W=()=>[$],A=()=>[],R=()=>({});function Y(e,i){if(e&1){let t=g();c(0,"span",7),a("click",function(){let r=_(t).$index,n=l(4);return u(n.removeSingleOption(r))}),f(1),s()}if(e&2){let t=i.$implicit,o=l(4);p(),m("",t[o.bindLabel]," ")}}function q(e,i){if(e&1&&(c(0,"div",5),v(1,Y,2,1,"span",6,O),s()),e&2){let t=l(3);p(),P(t.selectedOption)}}function J(e,i){e&1&&(f(0),y(1,"translate")),e&2&&m(" ",M(1,1,"Selectionner une option ")," ")}function K(e,i){if(e&1&&(d(0,q,3,0)(1,J,2,3),w(2,0,null,null,1)),e&2){let t=l(2);p(2),x(t.selectedOption!=k(1,A)&&t.selectedOption!=k(2,R))}}function Q(e,i){if(e&1&&(f(0),y(1,"translate")),e&2){let t=l(2);m(" ",t.selectedOption&&t.Object.keys(t.selectedOption).length>0?t.selectedOption[t.bindLabel]:t.placeholder?t.placeholder:M(1,1,"Selectionner une option ")," ")}}function X(e,i){if(e&1&&d(0,K,4,3)(1,Q,2,3),e&2){let t=l();b(t.multiple?0:1)}}function Z(e,i){if(e&1&&f(0),e&2){let t=l();m(" ",t.placeholder," ")}}function ee(e,i){if(e&1){let t=g();c(0,"i",8),a("click",function(r){_(t);let n=l();return u(n.clearSelection(r))}),s()}}function te(e,i){if(e&1){let t=g();c(0,"li",9)(1,"input",11),a("input",function(r){_(t);let n=l(2);return u(n.filterList(r,n.bindLabel))}),s()()}}function oe(e,i){if(e&1){let t=g();c(0,"li",12),a("click",function(){let r=_(t).$implicit,n=l(2);return u(n.onSelectOption(r))}),f(1),s()}if(e&2){let t=i.$implicit,o=l(2);p(),m(" ",t[o.bindLabel]," ")}}function ne(e,i){if(e&1&&(d(0,te,2,0,"li",9),v(1,oe,2,1,"li",10,O)),e&2){let t=l();b(t.showFilterInput?0:-1),p(),P(t.options)}}function ie(e,i){e&1&&(c(0,"li",13),f(1,"there are no data"),s())}var ue=(()=>{let i=class i{constructor(o,r){this.dropdownService=o,this.applicationService=r,this.isOpen=!1,this.showFilterInput=!0,this.showDeleteSelected=!0,this.selectOption=new G,this.allOptions=[],this.Object=Object,this.Array=Array,o.bottomDropDown$.subscribe(n=>{this.optionDirectionToTop=n})}ngOnChanges(o){o.options&&(this.allOptions=[...this.options])}ngOnInit(){this.dropdownService.activeDropdown$.subscribe(o=>{this.dropDownId&&this.dropDownId!==o&&(this.isOpen=!1)})}toggleDropdown(){this.isOpen?(this.isOpen=!1,this.dropdownService.closeDropdown()):(this.isOpen=!0,this.dropDownId&&this.dropdownService.openDropdown(this.dropDownId))}onSelectOption(o){this.multiple?(this.selectedOption&&!this.selectedOption.includes(o)&&(this.selectedOption.push(o),console.log("im here !!!!!!!!!!!!!"),console.log(this.selectedOption)),this.placeholder=null,this.selectOption.emit(this.selectedOption)):(this.selectedOption=o,console.log("im here !!!!!!!!!!!!!"),console.log(this.selectedOption),this.placeholder=null,this.isOpen=!1,this.dropdownService.closeDropdown(),this.selectOption.emit(this.selectedOption))}removeSingleOption(o){this.selectedOption.splice(o,1),this.selectOption.emit(this.selectedOption)}filterList(o,r){this.options=this.allOptions;let n=o.target.value.toLowerCase();this.options=this.options.filter(h=>h[r].toLowerCase().includes(n))}clearSelection(o){this.multiple?this.selectedOption=[]:this.selectedOption={},o.stopPropagation(),this.selectOption.emit(this.selectedOption)}stopPropagation(o){o.stopPropagation()}onDocumentClick(o){this.isOpen=!1}};i.\u0275fac=function(r){return new(r||i)(D(N),D(B))},i.\u0275cmp=S({type:i,selectors:[["app-generic-drop-down"]],hostBindings:function(r,n){r&1&&a("click",function(C){return n.onDocumentClick(C)},!1,I)},inputs:{selectedOption:"selectedOption",options:"options",bindLabel:"bindLabel",bindValue:"bindValue",placeholder:"placeholder",multiple:"multiple",dropDownId:"dropDownId",showFilterInput:"showFilterInput",showDeleteSelected:"showDeleteSelected"},outputs:{selectOption:"selectOption"},standalone:!0,features:[T,L],ngContentSelectors:U,decls:16,vars:7,consts:[["tabindex","0",1,"dropdown",3,"click"],[1,"dropdown-toggle",3,"click"],[1,"ri-close-line"],[1,"ri-arrow-down-s-line"],[1,"dropdown-menu"],[1,"row","d-flex","flex-wrap","pl-5","pr-5"],[1,"closable-tag","infos-bg-text","fade-in-fwd","mr-4","mb-4"],[1,"closable-tag","infos-bg-text","fade-in-fwd","mr-4","mb-4",3,"click"],[1,"ri-close-line",3,"click"],[2,"position","sticky","top","0","z-index","3","padding","0","margin","0"],[1,"d-flex","align-center"],["type","text","placeholder","filter..",1,"dropdown-filter",3,"input"],[1,"d-flex","align-center",3,"click"],[1,"disabled"]],template:function(r,n){r&1&&(F(H),c(0,"div",0),a("click",function(C){return n.stopPropagation(C)}),c(1,"div",1),a("click",function(){return n.toggleDropdown()}),d(2,X,2,1)(3,Z,1,1),w(4,2,W,null,3),c(6,"div"),d(7,ee,1,0,"i",2),V(8,"i",3),s()(),c(9,"ul",4),d(10,ne,3,1)(11,ie,2,0),w(12,10,null,null,11),s()(),c(14,"div"),z(15),s()),r&2&&(p(4),x(!n.placeholder),p(3),b(n.selectedOption!=null&&n.showDeleteSelected?7:-1),p(2),E("option-direction-to-top",n.optionDirectionToTop)("show",n.isOpen),p(3),x(n.options.length>0))},dependencies:[j],styles:['@font-face{font-family:Ubuntu;src:url("./media/Ubuntu-Regular-55DNWN2R.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--bg-color: #ffffff;--font-color: #000000;--hover-font-color: #000000;--input-border-color: rgba(128, 128, 128, .44);--main-bg-color: #f2f2f2;--main-primary-color: #C7253E;--main-secoundary-color: #f9e9eb;--focus-border-color: #E8476057;--btn-bg-color:#C7253E;--btn-color:#ffffff;--btn-hover-color:#8b192b;--card-footer-border-color:rgba(27, 31, 35, .15);--footer-color:#000;--box-shadow: $box-shadow}[data-theme=dark][_ngcontent-%COMP%]{--bg-color: #161625;--font-color: #ffffff;--hover-font-color: #000000;--input-border-color: #E8476057;--main-bg-color: rgb(14, 14, 27);--main-primary-color: #C7253E;--main-secoundary-color: #f9e9eb;--focus-border-color: rgba(255, 255, 255, .16);--btn-bg-color:#C7253E;--btn-color:#ffffff;--btn-hover-color:#8b192b;--card-footer-border-color:rgba(60, 64, 68, .78);--footer-color:#fff;--box-shadow: $box-shadow}[_ngcontent-%COMP%]:dir(ltr){font-family:Ubuntu,sans-serif;--small-font-size: 11px;--normal-font-size: 14px;--medium-font-size: 18px;--big-font-size: 21px}[_ngcontent-%COMP%]:dir(rtl){font-family:Ubuntu,sans-serif;--small-font-size: 13px;--normal-font-size: 16px;--medium-font-size: 20px;--big-font-size: 23px}.excel-color[_ngcontent-%COMP%]{color:green!important}.pdf-color[_ngcontent-%COMP%]{color:#ff4500!important}.focus-color[_ngcontent-%COMP%]{border-color:var(--main-secoundary-color);outline:0;-webkit-box-shadow:0 0 0 .1rem rgba(199,37,62,.31);box-shadow:0 0 0 .1rem #c7253e4f}.dropdown[_ngcontent-%COMP%]{position:relative;display:inline-block;width:100%;border:none;border-radius:.5em;color:var(--font-color);font-size:14px;background-color:var(--main-bg-color);margin:.5rem 0 0}.dropdown[_ngcontent-%COMP%]:focus{border-color:var(--main-secoundary-color);outline:0;-webkit-box-shadow:0 0 0 .1rem rgba(199,37,62,.31);box-shadow:0 0 0 .1rem #c7253e4f}.dropdown-toggle[_ngcontent-%COMP%]{padding:10px 15px;cursor:pointer;display:flex;align-items:center;justify-content:space-between}.dropdown-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px}.dropdown-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:dir(ltr){margin-left:5px}.dropdown-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:dir(rtl){margin-right:5px}.dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;display:none;background-color:var(--bg-color);z-index:99;border:1px solid #ccc;box-shadow:0 2px 5px #0000001a;list-style-type:none;padding:0;height:auto;max-height:200px;box-sizing:border-box;flex-wrap:wrap;overflow:scroll;margin:5px 0 0;min-width:100px;color:var(--font-color);overflow-x:hidden;overflow-y:auto}.dropdown-menu[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]{display:block}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 15px;cursor:pointer;background-color:var(--bg-color);border-top:solid 1px #e1e0e0}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--main-primary-color);color:#fff}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:hover{background-color:transparent}.show[_ngcontent-%COMP%]{display:block}.option-direction-to-top[_ngcontent-%COMP%]{top:0!important;transform:translateY(-100%);margin-top:-10px}.focus-within[_ngcontent-%COMP%]{border-color:var(--main-secoundary-color);border-radius:.5em;outline:0;-webkit-box-shadow:0 0 0 1px rgba(199,37,62,.31);box-shadow:0 0 0 1px #c7253e4f}']});let e=i;return e})();export{ue as a};
