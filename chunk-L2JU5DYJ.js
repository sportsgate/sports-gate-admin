import{a as j}from"./chunk-VDVUZ22Q.js";import{a as ce}from"./chunk-6KG43Y3K.js";import{b as me,d as pe,e as de}from"./chunk-4VG276SR.js";import"./chunk-URGJFNBB.js";import"./chunk-ZLSPVTZ5.js";import"./chunk-QPWJ32ZV.js";import{a as F,b as v,c as V,d as T,e as ne,g as ie,h as N,i as z,j as I,k as L,l as oe,m as R,n as re,o as U,p as ae,s as le,t as se,x as A}from"./chunk-U2CVJBPD.js";import{a as X,i as ee,j as te}from"./chunk-MVNQ5FMC.js";import{W as y,X as E,oa as W}from"./chunk-KIKAS6WS.js";import"./chunk-H6LRUE3S.js";import{a as k}from"./chunk-6BXFFAWE.js";import{k as S,q as Q}from"./chunk-WXCALDQV.js";import{$b as K,Ab as n,Bb as o,Cb as m,Db as B,Gb as f,Hb as h,Lb as G,Sb as l,Ua as D,Wb as Z,Xb as $,Yb as J,Za as c,_ as Y,_a as d,_b as O,ia as w,ja as H,kb as g,n as M,qb as u,ra as P,sa as C,ta as b,wb as p}from"./chunk-UKUGK3I5.js";import"./chunk-EU2KAMEK.js";import{o as x}from"./chunk-EMXRSGQS.js";var ve=()=>({standalone:!0});function xe(r,a){r&1&&m(0,"app-loading-spinner")}function Me(r,a){r&1&&(n(0,"span",12),l(1,"ce champ est obligatoire"),o())}function we(r,a){r&1&&(n(0,"span",12),l(1,"ce champ est obligatoire"),o())}function Pe(r,a){if(r&1){let s=B();n(0,"div",2)(1,"div",4)(2,"div",5),m(3,"img",6),o(),n(4,"h2"),l(5,"Bienvenue de retour !"),o(),n(6,"p"),l(7,"Connectez-vous pour continuer sur le dashboard"),o()(),n(8,"form",7),f("keyup.enter",function(){C(s);let e=h();return b(e.login())}),n(9,"div",8)(10,"div",9)(11,"div",10),m(12,"input",11),g(13,Me,2,0,"span",12),o(),n(14,"div",10),m(15,"input",13),n(16,"i",14),f("click",function(){C(s);let e=h();return b(e.isPasswordVisible?e.isPasswordVisible=!1:e.isPasswordVisible=!0)}),o(),g(17,we,2,0,"span",12),o(),n(18,"div",10)(19,"div",15)(20,"div",16)(21,"input",17),f("click",function(){C(s);let e=h();return b(e.checkRemindMe())}),o(),n(22,"label",18),l(23," Se souvenir de moi"),o(),m(24,"br"),o(),n(25,"a",19),f("click",function(){C(s);let e=h();return b(e.interface="forget")}),l(26,"Mot de passe oubli\xE9 ?"),o()()(),n(27,"div",10)(28,"app-button",20),f("handleClick",function(){C(s);let e=h();return b(e.login())}),o()()(),n(29,"div",21)(30,"span"),l(31,"Vous n'avez pas de compte ? "),n(32,"a",22),l(33,"Inscrivez-vous"),o()(),n(34,"span",23),l(35,"Copyright \xA9 2024, Tous droits r\xE9serv\xE9s "),n(36,"a",24),l(37,"Sports gate"),o()()()()()()}if(r&2){let s=h();c(3),G("src","assets/images/brand",s.themeService.theme=="dark"?"-inverse":"",".png",D),c(5),u("formGroup",s.loginForm),c(5),p(s.submitted&&(s.loF.username.errors!=null&&s.loF.username.errors.required)?13:-1),c(2),u("type",s.isPasswordVisible?"text":"password"),c(),u("ngClass",s.isPasswordVisible?"ri-eye-off-line":"ri-eye-line"),c(),p(s.submitted&&(s.loF.password.errors!=null&&s.loF.password.errors.required)?17:-1),c(11),u("outlined",s.outlined)}}function Oe(r,a){r&1&&(n(0,"span",12),l(1,"ce champ est obligatoire"),o())}function Se(r,a){if(r&1){let s=B();n(0,"div",2)(1,"div",4)(2,"div",5),m(3,"img",6),o(),n(4,"h2"),l(5,"Mot de passe oubli\xE9 ?"),o(),n(6,"p",25),l(7," Pas de souci, nous vous enverrons des instructions de r\xE9initialisation. "),o()(),n(8,"div",8)(9,"form",26),f("keyup.enter",function(){C(s);let e=h();return b(e.sendPasswordReset(e.email))}),n(10,"div",9)(11,"div",10)(12,"input",27),J("ngModelChange",function(e){C(s);let i=h();return $(i.email,e)||(i.email=e),b(e)}),o(),g(13,Oe,2,0,"span",12),o(),n(14,"div",10)(15,"app-button",28),f("handleClick",function(){C(s);let e=h();return b(e.sendPasswordReset(e.email))}),o()()(),n(16,"div",29)(17,"div",30),m(18,"i",31),n(19,"a",19),f("click",function(){C(s);let e=h();return e.interface="login",b(e.submitted=!1)}),l(20,"Retour \xE0 la connexion"),o()()(),n(21,"div",21)(22,"span",23),l(23,"Copyright \xA9 2024, Tous droits r\xE9serv\xE9s "),n(24,"a",24),l(25,"Sports gate"),o()()()()()()}if(r&2){let s=h();c(3),G("src","assets/images/brand",s.themeService.theme=="dark"?"-inverse":"",".png",D),c(9),u("inputMask",s.emailInputMask),Z("ngModel",s.email),u("ngModelOptions",K(7,ve)),c(),p(s.submitted&&s.email==""?13:-1),c(2),u("outlined",s.outlined)}}var ue=(()=>{let a=class a{constructor(t,e,i,_,q){this.themeService=t,this.authFirebaseService=e,this.applicationService=i,this.formBuilder=_,this.router=q,this.interface="login",this.clearPassword="",this.submitted=!1,this.isPasswordVisible=!1,this.loading=!1,this.remindMe=!1,this.token="",this.otp="",this.outlined=!1,this.email="",this.emailInputMask=le}ngOnChanges(t){}ngOnDestroy(){}ngOnInit(){this.initLoginForm()}onInputPassword(t){console.log(t.target.value),this.clearPassword=t.target.value}initLoginForm(){this.loginForm=this.formBuilder.group({username:[null,[v.required]],password:[null,[v.required]]})}get loF(){return this.loginForm.controls}get loFValues(){return this.loginForm.value}login(){return x(this,null,function*(){if(this.loading=!0,this.submitted=!0,this.loginForm.invalid){this.loading=!1;return}else{console.log(this.loginForm.value);let{username:t,password:e}=this.loginForm.value;this.authFirebaseService.login(t,e).subscribe({next:i=>{console.log(i);try{this.logInToTheSession(i)}catch(_){console.log("Error handling login process",_)}},error:i=>{console.error(i),setTimeout(()=>{this.authMsg="Bad credentials.",this.applicationService.showSwalDialog(this.authMsg,"error","#ffcccc"),this.loading=!1},1e3)}})}})}loginWithGoogle(){this.loading=!0,this.authFirebaseService.loginWithGoogle().subscribe({next:t=>{console.log(t);try{this.logInToTheSession(t)}catch(e){console.log("Error handling login process",e)}},error:t=>{console.error(t),setTimeout(()=>{this.authMsg="Unknown error.",this.applicationService.showSwalDialog(this.authMsg,"error","#ffcccc"),this.loading=!1},1e3)}})}checkRemindMe(){this.remindMe=!this.remindMe}logInToTheSession(t){if(t){let e=t.user;e&&M(e.getIdToken()).subscribe(i=>x(this,null,function*(){console.log("Access Token:",i),console.log("User Info:",{uid:e.uid,email:e.email,displayName:e.displayName,photoURL:e.photoURL}),this.authMsg="Vous \xEAtes connect\xE9 !",this.loading=!1,this.applicationService.showSwalDialog(this.authMsg,"success","#cce5cc"),setTimeout(()=>{this.applicationService.saveLocalData("remind-me",this.remindMe),this.router.navigate(["/"]).then(()=>console.log("Navigated to home"))},500)}))}}sendPasswordReset(t){this.submitted=!0,console.log(t),!(this.submitted&&t=="")&&this.authFirebaseService.sendPasswordReset(t).then(e=>{this.loginForm.patchValue({username:this.email}),this.applicationService.showSwalDialog("reset link sent to your email","success","#cce5cc")})}onInputEmail(t){this.email=t.target.value,this.loginForm.patchValue({username:this.email})}};a.\u0275fac=function(e){return new(e||a)(d(ce),d(de),d(A),d(L),d(y))},a.\u0275cmp=w({type:a,selectors:[["app-login"]],standalone:!0,features:[P,O],decls:6,vars:2,consts:[[1,"login-container"],[1,"login-panel"],[1,"container","fade-in-fwd"],[1,"login-right","d-sm-none"],[1,"row","d-flex","align-center","justify-content-center","flex-column"],[1,"d-flex","align-center"],["height","60",1,"mr-5",3,"src"],[1,"x-small-mt",3,"keyup.enter","formGroup"],[1,"login-form"],[1,"row"],[1,"col-12","form-group"],["type","text","placeholder","entrez votre email","formControlName","username"],[1,"required-message"],["placeholder","entrez votre mot de passe","formControlName","password",2,"height","55px",3,"type"],[1,"password-icon",3,"click","ngClass"],[1,"d-flex","align-center","justify-content-between"],[1,"d-flex","align-center","justify-content-start"],["type","checkbox","id","remind-me",3,"click"],["for","remind-me"],[1,"primary-text","cursor-pointer",3,"click"],["label","Connexion","icon","ri-arrow-right-circle-fill",1,"mr-5",3,"handleClick","outlined"],[1,"row","d-flex","align-center","justify-content-center","small-mt","flex-column"],["routerLink","/auth/register",1,"primary-text","cursor-pointer"],[1,"x-small-mt"],["href","#"],[1,"text-align-center"],["ngForm","",3,"keyup.enter"],["type","text","placeholder","entrez votre email",2,"height","55px",3,"ngModelChange","inputMask","ngModel","ngModelOptions"],["label","R\xE9initialiser le mot de passe","icon","ri-arrow-right-circle-fill",1,"mr-5",3,"handleClick","outlined"],[1,"row","align-center","justify-content-center"],[1,"d-flex","align-center","justify-start"],[1,"ri-arrow-left-line","primary-text","mr-5"]],template:function(e,i){if(e&1&&(g(0,xe,1,0,"app-loading-spinner"),n(1,"div",0)(2,"div",1),g(3,Pe,38,8,"div",2)(4,Se,26,8,"div",2),o(),m(5,"div",3),o()),e&2){let _;p(i.loading?0:-1),c(3),p((_=i.interface)==="login"?3:_==="forget"?4:-1)}},dependencies:[Q,S,k,R,N,F,V,T,z,I,j,U,re,oe,ie,ne,E],styles:['@font-face{font-family:Ubuntu;src:url("./media/Ubuntu-Regular-55DNWN2R.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--bg-color: #ffffff;--font-color: #000000;--hover-font-color: #000000;--input-border-color: rgba(128, 128, 128, .44);--main-bg-color: #f2f2f2;--main-primary-color: #C7253E;--main-secoundary-color: #f9e9eb;--focus-border-color: #E8476057;--btn-bg-color:#C7253E;--btn-color:#ffffff;--btn-hover-color:#8b192b;--card-footer-border-color:rgba(27, 31, 35, .15);--footer-color:#000;--box-shadow: $box-shadow}[data-theme=dark][_ngcontent-%COMP%]{--bg-color: #161625;--font-color: #ffffff;--hover-font-color: #000000;--input-border-color: #E8476057;--main-bg-color: rgb(14, 14, 27);--main-primary-color: #C7253E;--main-secoundary-color: #f9e9eb;--focus-border-color: rgba(255, 255, 255, .16);--btn-bg-color:#C7253E;--btn-color:#ffffff;--btn-hover-color:#8b192b;--card-footer-border-color:rgba(60, 64, 68, .78);--footer-color:#fff;--box-shadow: $box-shadow}[_ngcontent-%COMP%]:dir(ltr){font-family:Ubuntu,sans-serif;--small-font-size: 11px;--normal-font-size: 14px;--medium-font-size: 18px;--big-font-size: 21px}[_ngcontent-%COMP%]:dir(rtl){font-family:Ubuntu,sans-serif;--small-font-size: 13px;--normal-font-size: 16px;--medium-font-size: 20px;--big-font-size: 23px}.excel-color[_ngcontent-%COMP%]{color:green!important}.pdf-color[_ngcontent-%COMP%]{color:#ff4500!important}.focus-color[_ngcontent-%COMP%]{border-color:var(--main-secoundary-color);outline:0;-webkit-box-shadow:0 0 0 .1rem rgba(199,37,62,.31);box-shadow:0 0 0 .1rem #c7253e4f}.login-container[_ngcontent-%COMP%]{box-sizing:border-box;margin:3% 15%;display:flex;position:absolute;inset:0;overflow:hidden;box-shadow:#0000003d 0 3px 8px}.login-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:55px}.login-container[_ngcontent-%COMP%]   .login-panel[_ngcontent-%COMP%]{flex:1;overflow-y:auto;background-color:var(--bg-color);color:var(--font-color);position:relative}.login-container[_ngcontent-%COMP%]   .login-panel[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:10px 8%}.login-container[_ngcontent-%COMP%]   .login-panel[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.login-container[_ngcontent-%COMP%]   .login-panel[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0}.login-container[_ngcontent-%COMP%]   .login-panel[_ngcontent-%COMP%]   .password-icon[_ngcontent-%COMP%]{position:relative;top:-37px;left:90%;font-size:17px;cursor:pointer}.login-container[_ngcontent-%COMP%]   .login-right[_ngcontent-%COMP%]{flex:1;background-image:url("./media/Login-cuate-SZADEVY4.png");background-repeat:no-repeat;background-size:cover}.login-container[_ngcontent-%COMP%]   .required-message[_ngcontent-%COMP%]{font-size:var(--small-font-size);color:#cd5c5c}.login-container[_ngcontent-%COMP%]   .or-login-with[_ngcontent-%COMP%]{height:1px;margin-top:10px;background-color:var(--font-color)}.login-container[_ngcontent-%COMP%]   .or-login-with-text[_ngcontent-%COMP%]{background-color:var(--bg-color);padding:.4em 1em}.login-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]{box-shadow:0 2px 4px #00000014;background-color:var(--main-bg-color);display:flex;align-items:center;justify-content:center;padding:.5em;margin:.5em;border-radius:.5em;cursor:pointer}.login-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]:active{transform:scale(.98);box-shadow:#63636333 0 2px 8px}.login-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:16px;width:16px;border-radius:50%}.login-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:dir(ltr){margin-right:5px}.login-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:dir(rtl){margin-left:5px}.login-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.login-container[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]{width:100%;position:absolute;bottom:15px;left:0}@media (max-width: 767px){.login-container[_ngcontent-%COMP%]{margin:1%}}']});let r=a;return r})();function ye(r,a){r&1&&m(0,"app-loading-spinner")}function Ee(r,a){r&1&&(n(0,"span",10),l(1," ce champ est requis "),o())}function ke(r,a){r&1&&(n(0,"span",10),l(1," ce champ est requis "),o())}function Fe(r,a){r&1&&(n(0,"span",10),l(1," ce champ est requis "),o())}function Ve(r,a){r&1&&(n(0,"span",10),l(1," cela doit \xEAtre un email valide ! "),o())}function Te(r,a){r&1&&(n(0,"span",10),l(1,"ce champ est requis"),o())}function Ne(r,a){r&1&&(n(0,"span",10),l(1,"Le mot de passe doit \xEAtre fort (ex : AZERTY@123)"),o(),l(2," > "))}var fe=(()=>{let a=class a{constructor(t,e,i,_,q,he){this.authService=t,this.crudService=e,this.afAuth=i,this.applicationService=_,this.formBuilder=q,this.router=he,this.clearPassword="",this.registerMsg="",this.submitted=!1,this.isPasswordVisible=!1,this.loading=!1,this.phoneNumberInputMask=ae("+999 999-99-99-99"),this.ALGERIAN_PHONE_NUMBER_PATTERN=ee}ngOnChanges(t){}ngOnDestroy(){}ngOnInit(){this.initRegisterForm()}initRegisterForm(){this.registerForm=this.formBuilder.group({email:[null,{validators:[v.required,v.email],updateOn:"blur"}],password:[null,{validators:[v.required,v.pattern(te)],updateOn:"blur"}],firstName:[null,[v.required]],lastName:[null,[v.required]]})}get reF(){return this.registerForm.controls}get reFValues(){return this.registerForm.value}register(){this.submitted=!0,!this.registerForm.invalid&&(this.loading=!0,M(this.createUser(this.registerForm.value)).subscribe({next:t=>{console.log(t),t?(this.registerMsg="Vous \xEAtes inscrit avec succ\xE8s !",this.loading=!1,this.applicationService.showSwalDialog(this.registerMsg,"success","#cce5cc"),setTimeout(()=>{this.router.navigate(["/"]).then(e=>console.log(""))},500)):(this.registerMsg="Une erreur s'est produite, veuillez contacter l'administrateur",this.applicationService.showSwalDialog(this.registerMsg,"error","#ffcccc"),this.loading=!1)},error:t=>{setTimeout(()=>{this.registerMsg="Unknown error.",this.applicationService.showSwalDialog(this.registerMsg,"error","#ffcccc"),this.loading=!1},1e3)}}))}createUser(t){return x(this,null,function*(){try{let i=(yield this.afAuth.createUserWithEmailAndPassword(t.email,t.password)).user;return i?(t.uid=i.uid,t.email=i.email,t.password=yield this.applicationService.hashPassword(t.password),t.profileColor=this.applicationService.setRandomColor(),t.isActive=!0,yield this.crudService.createItem(X.USERS,t),yield i.sendEmailVerification(),!0):!1}catch{return this.applicationService.showSuccessfulSaveDialog("User exist","error","An error has happened, please contact the Admin"),!1}})}};a.\u0275fac=function(e){return new(e||a)(d(se),d(pe),d(me),d(A),d(L),d(y))},a.\u0275cmp=w({type:a,selectors:[["app-sign-up"]],standalone:!0,features:[P,O],decls:38,vars:10,consts:[[1,"register-container"],[1,"register-panel"],[1,"container"],[1,"row","d-flex","align-center","justify-content-center","flex-column"],["src","assets/images/brand.png","height","80"],[1,"x-small-mt",3,"formGroup"],[1,"register-form"],[1,"row"],[1,"col-12","form-group"],["type","text","placeholder","Veuillez remplir votre nom de famille","formControlName","lastName",2,"height","55px"],[1,"required-message"],["type","text","placeholder","Veuillez remplir votre pr\xE9nom","formControlName","firstName",2,"height","55px"],["type","email","placeholder","Veuillez remplir votre email","formControlName","email",2,"height","55px"],["placeholder","Veuillez remplir votre mot de passe","formControlName","password",2,"height","55px",3,"type"],[1,"password-icon",3,"click","ngClass"],["label","Inscription","icon","ri-arrow-right-circle-fill",1,"mr-5",3,"handleClick"],[1,"row","d-flex","align-center","justify-content-center","small-mt","flex-column"],["routerLink","/auth/login",1,"primary-text","cursor-pointer"],[1,"x-small-mt"],["href","#"],[1,"register-right"]],template:function(e,i){e&1&&(g(0,ye,1,0,"app-loading-spinner"),n(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3),m(5,"img",4),n(6,"h2"),l(7,"Inscription"),o()(),n(8,"form",5)(9,"div",6)(10,"div",7)(11,"div",8),m(12,"input",9),g(13,Ee,2,0,"span",10),o(),n(14,"div",8),m(15,"input",11),g(16,ke,2,0,"span",10),o(),n(17,"div",8),m(18,"input",12),g(19,Fe,2,0,"span",10)(20,Ve,2,0,"span",10),o(),n(21,"div",8),m(22,"input",13),n(23,"i",14),f("click",function(){return i.isPasswordVisible?i.isPasswordVisible=!1:i.isPasswordVisible=!0}),o(),g(24,Te,2,0,"span",10)(25,Ne,3,0),o(),n(26,"div",8)(27,"app-button",15),f("handleClick",function(){return i.register()}),o()()(),n(28,"div",16)(29,"span"),l(30,"Vous avez un compte ? "),n(31,"a",17),l(32," Connexion "),o()(),n(33,"span",18),l(34,"Copyright \xA9 2024, Tous droits r\xE9serv\xE9s "),n(35,"a",19),l(36,"Sports gate"),o()()()()()()(),m(37,"div",20),o()),e&2&&(p(i.loading?0:-1),c(8),u("formGroup",i.registerForm),c(5),p(i.submitted&&(i.reF.lastName.errors!=null&&i.reF.lastName.errors.required)?13:-1),c(3),p(i.submitted&&(i.reF.firstName.errors!=null&&i.reF.firstName.errors.required)?16:-1),c(3),p(i.submitted&&(i.reF.email.errors!=null&&i.reF.email.errors.required)?19:-1),c(),p(i.reF.email.errors!=null&&i.reF.email.errors.email?20:-1),c(2),u("type",i.isPasswordVisible?"text":"password"),c(),u("ngClass",i.isPasswordVisible?"ri-eye-off-line":"ri-eye-line"),c(),p(i.submitted&&(i.reF.password.errors!=null&&i.reF.password.errors.required)?24:-1),c(),p(i.submitted&&(i.reF.password.errors!=null&&i.reF.password.errors.pattern)?25:-1))},dependencies:[k,R,N,F,V,T,z,I,S,j,U,E],styles:['@font-face{font-family:Ubuntu;src:url("./media/Ubuntu-Regular-55DNWN2R.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--bg-color: #ffffff;--font-color: #000000;--hover-font-color: #000000;--input-border-color: rgba(128, 128, 128, .44);--main-bg-color: #f2f2f2;--main-primary-color: #C7253E;--main-secoundary-color: #f9e9eb;--focus-border-color: #E8476057;--btn-bg-color:#C7253E;--btn-color:#ffffff;--btn-hover-color:#8b192b;--card-footer-border-color:rgba(27, 31, 35, .15);--footer-color:#000;--box-shadow: $box-shadow}[data-theme=dark][_ngcontent-%COMP%]{--bg-color: #161625;--font-color: #ffffff;--hover-font-color: #000000;--input-border-color: #E8476057;--main-bg-color: rgb(14, 14, 27);--main-primary-color: #C7253E;--main-secoundary-color: #f9e9eb;--focus-border-color: rgba(255, 255, 255, .16);--btn-bg-color:#C7253E;--btn-color:#ffffff;--btn-hover-color:#8b192b;--card-footer-border-color:rgba(60, 64, 68, .78);--footer-color:#fff;--box-shadow: $box-shadow}[_ngcontent-%COMP%]:dir(ltr){font-family:Ubuntu,sans-serif;--small-font-size: 11px;--normal-font-size: 14px;--medium-font-size: 18px;--big-font-size: 21px}[_ngcontent-%COMP%]:dir(rtl){font-family:Ubuntu,sans-serif;--small-font-size: 13px;--normal-font-size: 16px;--medium-font-size: 20px;--big-font-size: 23px}.excel-color[_ngcontent-%COMP%]{color:green!important}.pdf-color[_ngcontent-%COMP%]{color:#ff4500!important}.focus-color[_ngcontent-%COMP%]{border-color:var(--main-secoundary-color);outline:0;-webkit-box-shadow:0 0 0 .1rem rgba(199,37,62,.31);box-shadow:0 0 0 .1rem #c7253e4f}*[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}*[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.register-container[_ngcontent-%COMP%]{box-sizing:border-box;margin:3% 15%;display:flex;position:absolute;inset:0;overflow:hidden;box-shadow:#0000003d 0 3px 8px}.register-container[_ngcontent-%COMP%]   .register-panel[_ngcontent-%COMP%]{flex:1;overflow-y:auto;position:relative;background-color:var(--bg-color);color:var(--font-color)}.register-container[_ngcontent-%COMP%]   .register-panel[_ngcontent-%COMP%]   .return-icon[_ngcontent-%COMP%]{font-size:21px;font-weight:700;color:var(--main-primary-color);cursor:pointer}.register-container[_ngcontent-%COMP%]   .register-panel[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:10px 8%}.register-container[_ngcontent-%COMP%]   .register-panel[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.register-container[_ngcontent-%COMP%]   .register-panel[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0}.register-container[_ngcontent-%COMP%]   .register-panel[_ngcontent-%COMP%]   .password-icon[_ngcontent-%COMP%]{position:relative;top:-37px;left:90%;font-size:17px;cursor:pointer}.register-container[_ngcontent-%COMP%]   .register-right[_ngcontent-%COMP%]{flex:1;background-color:var(--main-secoundary-color);background-image:url("./media/Login-cuate-SZADEVY4.png");background-size:cover;background-repeat:no-repeat;background-position:center}.register-container[_ngcontent-%COMP%]   .required-message[_ngcontent-%COMP%]{font-size:var(--small-font-size);color:#cd5c5c}.register-container[_ngcontent-%COMP%]   .or-register-with[_ngcontent-%COMP%]{height:1px;margin-top:10px;background-color:var(--font-color)}.register-container[_ngcontent-%COMP%]   .or-register-with-text[_ngcontent-%COMP%]{background-color:var(--bg-color);padding:.4em 1em}.register-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]{box-shadow:0 2px 4px #00000014;background-color:var(--main-bg-color);display:flex;align-items:center;justify-content:center;padding:.5em;margin:.5em;border-radius:1.2em;cursor:pointer}.register-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]:active{transform:scale(.98);box-shadow:#63636333 0 2px 8px}.register-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:16px;width:16px;border-radius:50%}.register-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:dir(ltr){margin-right:5px}.register-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:dir(rtl){margin-left:5px}.register-container[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.register-container[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]{width:100%;position:absolute;transform:translateY(96%);left:0;margin-top:-20px}@media (max-width: 767px){.register-container[_ngcontent-%COMP%]{margin:1%}}']});let r=a;return r})();var ze=[{path:"login",component:ue},{path:"register",component:fe}],ft=(()=>{let a=class a{};a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=H({type:a}),a.\u0275inj=Y({imports:[W.forChild(ze),W]});let r=a;return r})();export{ft as AuthRoues,ze as routes};
