function _templateObject14(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject14=function(){return e},e}function _templateObject13(){var e=_taggedTemplateLiteral([":\u241f642fb8eaf79852b6d813ddb81c4dbf7f3529ebeb\u241f6845184443201904975: Import ",":START_TAG_CODE:TuiFieldErrorModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject13=function(){return e},e}function _templateObject12(){var e=_taggedTemplateLiteral([":\u241f878e6fe461fd9ca2712122350e24522f5de8fd18\u241f8087109270529539309:With custom messages for validators"]);return _templateObject12=function(){return e},e}function _templateObject11(){var e=_taggedTemplateLiteral([":\u241f4dd4c0a5cc2f0b5edcf6ce49c7de250516eb991e\u241f2219993318238885702:async validator"]);return _templateObject11=function(){return e},e}function _templateObject10(){var e=_taggedTemplateLiteral([":\u241ff168335edcd7a2503812f5cdb86f5fdf3f53881e\u241f296183290148574667:With adding new controls (FormArray)"]);return _templateObject10=function(){return e},e}function _templateObject9(){var e=_taggedTemplateLiteral([":\u241fbeedd8b329a8f8773c3b0f41eefeeb5e601578a9\u241f7592818721454246340:with a template"]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241f3f27c72dea09d55e44acaf9c2da962eca6048e41\u241f3207439097338829675:",":START_TAG_CODE:FieldError",":CLOSE_TAG_CODE: shows a validation error of a field. If you do not use forms, see ",":START_LINK:",":START_TAG_CODE:TuiError",":CLOSE_TAG_CODE:",":CLOSE_LINK: . "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f87a9e0f6ceb1444cab6185424f933a376357a91c\u241f3646762244302681891: Required "]);return _templateObject5=function(){return e},e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f7d66ae66a6f955b1eb6f5c00aac4d4e2584cdeed\u241f2295031025708706060:Enter company name"]);return _templateObject4=function(){return e},e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f740e12c058c1a630b11478b272764bf7d7d5f028\u241f124757051077109908: If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f4de3cc8dba3c7b052f74a1db4752f51bda859e9c\u241f8591875090862306452:Set a password"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fc2f188eeca60463782738d8247914bf170df5098\u241f3772154377692784553:Type the ultimate answer"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{pzXc:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFieldErrorModule",(function(){return _e}));var r,o=n("An66"),a=n("3kIJ"),l=n("1VvW"),i=n("SVIu"),u=n("Qq0t"),m=n("dvRg"),s=n("cWK9"),d=n("kZht"),c=n("OZlg"),p=n("e0eB"),f=n("yZWP"),h=n("iyc4"),b=n("1Nkj"),g=n("GdrL"),C=n("2wTY"),V=n("gEyt"),x=n("kNZY"),y=["label",$localize(_templateObject())],v=["label",$localize(_templateObject2())];r=$localize(_templateObject3());var T=/^[a-zA-Z]+$/;function _(e){return e.value&&T.test(e.value)?null:{other:"Only latin letters are allowed"}}function E(e){return"42"===e.value?null:{other:"Wrong"}}var w,F=((w=function e(){var t=this;_classCallCheck(this,e),this.testValue1=new a.FormControl("",[a.Validators.required,_]),this.testForm=new a.FormGroup({testValue1:this.testValue1,testValue2:new a.FormControl("",[a.Validators.required,E])}),this.testValue1.valueChanges.subscribe((function(){t.testValue1.markAsTouched()}))}).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=d["\u0275\u0275defineComponent"]({type:w,selectors:[["tui-field-error-example-1"]],decls:13,vars:3,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","",1,"tui-space_bottom-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2"],["tuiLabel","",6,"label"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue1"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"label",1),d["\u0275\u0275i18nAttributes"](2,y),d["\u0275\u0275elementStart"](3,"tui-input",2),d["\u0275\u0275text"](4," to the Question of Life, the Universe, and Everything "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-field-error",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"label",4),d["\u0275\u0275i18nAttributes"](7,v),d["\u0275\u0275elementStart"](8,"tui-input",5),d["\u0275\u0275text"](9," Latin letters only "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](10,"tui-field-error",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"p"),d["\u0275\u0275i18n"](12,r),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,b.a,g.a,a.NgControlStatus,a.FormControlName,C.b,V.b,x.a],encapsulation:2,changeDetection:0}),w),O=n("l4xa"),S=n("zV1d"),L=["errorContent"],A=["bigErrorContent"],N=["label",$localize(_templateObject4())];function j(e,t){1&e&&(d["\u0275\u0275text"](0," Secret number must contain "),d["\u0275\u0275elementStart"](1,"strong"),d["\u0275\u0275text"](2,"10 or 12 digits"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](3," . "))}function k(e,t){1&e&&(d["\u0275\u0275text"](0," This company is already registered "),d["\u0275\u0275elementStart"](1,"button",9),d["\u0275\u0275text"](2," It is mine "),d["\u0275\u0275elementEnd"]())}var G,z=function(){return["required","inn"]},D=/^\d{10}$/,I=/^\d{12}$/,M=((G=function(){function e(){var t=this;_classCallCheck(this,e),this.errorContent="",this.bigErrorContent="",this.testValue2=new a.FormControl(""),this.testForm=new a.FormGroup({testValue1:new a.FormControl("",[a.Validators.required,this.getSecretValidator()]),testValue2:this.testValue2}),this.companyValidator=function(e){return e.value?{inn:new O.TuiValidationError(t.bigErrorContent)}:null}}return _createClass(e,[{key:"ngOnInit",value:function(){this.testValue2.setValidators([a.Validators.required,this.companyValidator])}},{key:"getSecretValidator",value:function(){var e=this;return function(t){return t.value&&(D.test(t.value)||I.test(t.value))?null:{secret:new O.TuiValidationError(e.errorContent)}}}}]),e}()).\u0275fac=function(e){return new(e||G)},G.\u0275cmp=d["\u0275\u0275defineComponent"]({type:G,selectors:[["tui-field-error-example-2"]],viewQuery:function(e,t){var n;1&e&&(d["\u0275\u0275viewQuery"](L,!0),d["\u0275\u0275viewQuery"](A,!0)),2&e&&(d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.errorContent=n.first),d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.bigErrorContent=n.first))},decls:12,vars:5,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Secret number"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["errorContent",""],["formControlName","testValue1",3,"order"],["tuiLabel","",1,"tui-space_top-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["bigErrorContent",""],["formControlName","testValue2"],["tuiButton","","type","button",1,"tui-space_top-2"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"label",1),d["\u0275\u0275element"](2,"tui-input",2),d["\u0275\u0275template"](3,j,4,0,"ng-template",null,3,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275element"](5,"tui-field-error",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"label",5),d["\u0275\u0275i18nAttributes"](7,N),d["\u0275\u0275element"](8,"tui-input",6),d["\u0275\u0275template"](9,k,3,0,"ng-template",null,7,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275element"](11,"tui-field-error",8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("order",d["\u0275\u0275pureFunction0"](4,z)),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,b.a,g.a,a.NgControlStatus,a.FormControlName,C.b,V.b,x.a,S.a],encapsulation:2,changeDetection:0}),G),P=n("bYz0"),q=n("CDxv"),R=["phoneErrorContent"];function $(e,t){1&e&&d["\u0275\u0275text"](0," Invalid phone number length ")}function B(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"label",4),d["\u0275\u0275elementStart"](1,"span",5),d["\u0275\u0275element"](2,"tui-input-phone",6),d["\u0275\u0275elementStart"](3,"button",7),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.index;return d["\u0275\u0275nextContext"]().removePhone(e)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](4,$,1,0,"ng-template",null,8,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275element"](6,"tui-field-error",9),d["\u0275\u0275elementEnd"]()}if(2&e){var r=t.index;d["\u0275\u0275propertyInterpolate1"]("label","Phone number ",r+1,""),d["\u0275\u0275advance"](2),d["\u0275\u0275propertyInterpolate"]("formControlName",r),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),d["\u0275\u0275advance"](4),d["\u0275\u0275propertyInterpolate"]("formControlName",r)}}var U,Q,W,Z=((U=function(){function e(){_classCallCheck(this,e),this.phoneErrorContent="",this.testForm=new a.FormGroup({phones:new a.FormArray([new a.FormControl("",[a.Validators.required,this.getPhoneLengthValidator()])],[this.getPhoneArrayValidator()])})}return _createClass(e,[{key:"addPhone",value:function(){this.formData.push(new a.FormControl("",this.addValidators()))}},{key:"removePhone",value:function(e){this.formData.removeAt(e);for(var t=0;t<=1&&this.formData.controls[t];)this.formData.controls[t].setValidators([a.Validators.required,this.getPhoneLengthValidator()]),t++}},{key:"addValidators",value:function(){return this.formData.controls.length<2?[a.Validators.required,this.getPhoneLengthValidator()]:null}},{key:"getPhoneLengthValidator",value:function(){var e=this;return function(t){return 12!==t.value.length?{lenght:new O.TuiValidationError(e.phoneErrorContent)}:null}}},{key:"getPhoneArrayValidator",value:function(){return function(e){return e.controls.length<2||e.controls.filter((function(e){return e.errors})).length&&e.controls.length?{length:new O.TuiValidationError("You should add at least 2 phone number")}:null}}},{key:"formData",get:function(){return this.testForm.get("phones")}}]),e}()).\u0275fac=function(e){return new(e||U)},U.\u0275cmp=d["\u0275\u0275defineComponent"]({type:U,selectors:[["tui-field-error-example-3"]],viewQuery:function(e,t){var n;1&e&&d["\u0275\u0275viewQuery"](R,!0),2&e&&d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.phoneErrorContent=n.first)},decls:5,vars:2,consts:[[3,"formGroup"],["tuiLabel","","formArrayName","phones","class","tui-space_bottom-4",3,"label",4,"ngFor","ngForOf"],["formArrayName","phones",1,"form-array-error"],["tuiButton","","type","button","size","s",1,"tui-space_top-4",3,"click"],["tuiLabel","","formArrayName","phones",1,"tui-space_bottom-4",3,"label"],[1,"row"],["tuiTextfieldAutocomplete","off","tuiTextfieldSize","m",1,"input",3,"formControlName","tuiTextfieldLabelOutside"],["tuiIconButton","","type","button","size","m","title","Delete phone number","appearance","icon","icon","tuiIconTrash",1,"tui-space_left-2","icon",3,"click"],["phoneErrorContent",""],[3,"formControlName"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275template"](1,B,7,4,"label",1),d["\u0275\u0275element"](2,"tui-field-error",2),d["\u0275\u0275elementStart"](3,"button",3),d["\u0275\u0275listener"]("click",(function(){return t.addPhone()})),d["\u0275\u0275text"](4," Add a phone number "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",t.formData.controls))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,o.s,x.a,a.FormArrayName,S.a,b.a,P.a,q.b,C.b,a.NgControlStatus,a.FormControlName,V.b],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),U),Y=n("ROBh"),H=n("BwBJ"),J=/^[a-zA-Z]+$/,K=((Q=function e(t){_classCallCheck(this,e),this.fb=t,this.form=this.fb.group({text:["\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",a.Validators.required]}),this.form.controls.text.setAsyncValidators((function(e){return e.value&&J.test(e.value)?Object(Y.a)(null).pipe():Object(Y.a)({error:new O.TuiValidationError("Only latin letters allowed")}).pipe(Object(H.a)(5e3))})),this.form.controls.text.markAsTouched()}).\u0275fac=function(e){return new(e||Q)(d["\u0275\u0275directiveInject"](a.FormBuilder))},Q.\u0275cmp=d["\u0275\u0275defineComponent"]({type:Q,selectors:[["tui-field-error-example-4"]],decls:5,vars:1,consts:[[3,"formGroup"],[1,"tui-form__row"],["formControlName","text",1,"input"],["formControlName","text"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"tui-input",2),d["\u0275\u0275text"](3," Enter some text "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](4,"tui-field-error",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&d["\u0275\u0275property"]("formGroup",t.form)},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,g.a,a.NgControlStatus,a.FormControlName,x.a],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),Q),X=n("3p4X"),ee=n("SrNW"),te=n("YtkY"),ne=n("jIqt"),re=n("okGw");function oe(e){return"Maximum length \u2014 "+e.requiredLength}function ae(e){return"Minimum length \u2014 "+e.requiredLength}W=$localize(_templateObject5());var le,ie,ue=((le=function e(){var t=this;_classCallCheck(this,e),this.testValue1=new a.FormControl("",[a.Validators.minLength(4),a.Validators.maxLength(4)]),this.testValue2=new a.FormControl("",[a.Validators.required,a.Validators.email]),this.testValue3=new a.FormControl(2,[a.Validators.min(3)]),this.testForm=new a.FormGroup({testValue1:this.testValue1,testValue2:this.testValue2,testValue3:this.testValue3}),this.testValue1.valueChanges.subscribe((function(){t.testValue1.markAsTouched()}))}).\u0275fac=function(e){return new(e||le)},le.\u0275cmp=d["\u0275\u0275defineComponent"]({type:le,selectors:[["tui-field-error-example-5"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:m.TUI_VALIDATION_ERRORS,useValue:{required:"Enter this!",email:"Enter a valid email",maxlength:oe,minlength:ae,min:Object(X.a)(2e3).pipe(Object(ee.a)((function(e){return!e}),!1),Object(te.a)((function(e){return e?"Fix please":"Min number 3"})),Object(ne.a)("Min number 3"))}}])],decls:13,vars:2,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Enter an email",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2"],["tuiLabel","","label","Minimum and maximum length",1,"tui-space_bottom-4"],["formControlName","testValue1","tuiTextfieldSize","m"],["formControlName","testValue1"],["tuiLabel","","label","Minimum number"],["formControlName","testValue3","tuiTextfieldSize","m"],["formControlName","testValue3"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"label",1),d["\u0275\u0275elementStart"](2,"tui-input",2),d["\u0275\u0275i18n"](3,W),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](4,"tui-field-error",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"label",4),d["\u0275\u0275elementStart"](6,"tui-input",5),d["\u0275\u0275text"](7," 4 letters word... "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](8,"tui-field-error",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"label",7),d["\u0275\u0275elementStart"](10,"tui-input-count",8),d["\u0275\u0275text"](11," number "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](12,"tui-field-error",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,b.a,g.a,a.NgControlStatus,a.FormControlName,C.b,V.b,x.a,re.a],encapsulation:2,changeDetection:0}),le),me=n("u8jZ"),se=["pageTab",$localize(_templateObject6())];ie=$localize(_templateObject7(),"[\ufffd#2\ufffd|\ufffd#4\ufffd]","[\ufffd/#2\ufffd|\ufffd/#4\ufffd]","\ufffd#3\ufffd","[\ufffd#2\ufffd|\ufffd#4\ufffd]","[\ufffd/#2\ufffd|\ufffd/#4\ufffd]","\ufffd/#3\ufffd"),ie=d["\u0275\u0275i18nPostprocess"](ie);var de,ce,pe=["heading",$localize(_templateObject8())],fe=["heading",$localize(_templateObject9())],he=["heading",$localize(_templateObject10())],be=["heading",$localize(_templateObject11())],ge=["heading",$localize(_templateObject12())],Ce=function(){return["/components/error"]};function Ve(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18nStart"](1,ie),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275elementStart"](3,"a",3),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",4),d["\u0275\u0275i18nAttributes"](6,pe),d["\u0275\u0275element"](7,"tui-field-error-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"tui-doc-example",5),d["\u0275\u0275i18nAttributes"](9,fe),d["\u0275\u0275element"](10,"tui-field-error-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"tui-doc-example",6),d["\u0275\u0275i18nAttributes"](12,he),d["\u0275\u0275element"](13,"tui-field-error-example-3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"tui-doc-example",7),d["\u0275\u0275i18nAttributes"](15,be),d["\u0275\u0275element"](16,"tui-field-error-example-4"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"tui-doc-example",8),d["\u0275\u0275i18nAttributes"](18,ge),d["\u0275\u0275element"](19,"tui-field-error-example-5"),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("routerLink",d["\u0275\u0275pureFunction0"](6,Ce)),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",n.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.example2),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.example3),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.example4),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.example5)}}function xe(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",9),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,de),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",10),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,ce),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",n.exampleImportModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}de=$localize(_templateObject13(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),ce=$localize(_templateObject14());var ye,ve,Te=((ve=function e(){_classCallCheck(this,e),this.exampleImportModule="import {ReactiveFormsModule} from '@angular/forms';\nimport {TuiFieldErrorModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        ReactiveFormsModule,\n        TuiFieldErrorModule,\n        TuiContentModule\n    ],\n...\n",this.exampleInsertTemplate='<ng-container [formGroup]="testForm">\n    <tui-input formControlName="testValue1"></tui-input>\n    <tui-field-error formControlName="testValue1"></tui-field-error>\n</ng-container>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nexport function passwordValidator(field: AbstractControl): Validators | null {\n    return field.value && latinChars.test(field.value)\n        ? null\n        : {\n              other: 'Only latin letters are allowed',\n          };\n}\n\nexport function superComputerValidator(field: AbstractControl): Validators | null {\n    return field.value === '42'\n        ? null\n        : {\n              other: 'Wrong',\n          };\n}\n\n@Component({\n    selector: 'tui-field-error-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample1 {\n    readonly testValue1 = new FormControl('', [Validators.required, passwordValidator]);\n\n    readonly testForm = new FormGroup({\n        testValue1: this.testValue1,\n        testValue2: new FormControl('', [Validators.required, superComputerValidator]),\n    });\n\n    constructor() {\n        this.testValue1.valueChanges.subscribe(() => {\n            this.testValue1.markAsTouched();\n        });\n    }\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <label\n        i18n-label\n        tuiLabel\n        label="Type the ultimate answer"\n        class="tui-space_bottom-4"\n    >\n        <tui-input\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            to the Question of Life, the Universe, and Everything\n        </tui-input>\n\n        <tui-field-error formControlName="testValue2"></tui-field-error>\n    </label>\n\n    <label tuiLabel i18n-label label="Set a password">\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Latin letters only\n        </tui-input>\n\n        <tui-field-error formControlName="testValue1"></tui-field-error>\n    </label>\n\n    <p i18n>\n        If you need to show validation message as early as a user started to\n        type something, subscribe on form value changes and call markAsTouched\n        on control on first value change\n    </p>\n</form>\n'},this.example2={TypeScript:"import {Component, OnInit, ViewChild} from '@angular/core';\nimport {\n    AbstractControl,\n    FormControl,\n    FormGroup,\n    ValidationErrors,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\nconst secretRegexTen = /^\\d{10}$/;\nconst secretRegexTwelve = /^\\d{12}$/;\n\nexport function innValidator(field: AbstractControl): any {\n    return field.value &&\n        (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))\n        ? null\n        : {\n              inn: new TuiValidationError('Secret number contains 10 or 12 digits'),\n          };\n}\n\n@Component({\n    selector: 'tui-field-error-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample2 implements OnInit {\n    @ViewChild('errorContent')\n    errorContent: PolymorpheusContent = '';\n\n    @ViewChild('bigErrorContent')\n    bigErrorContent: PolymorpheusContent = '';\n\n    readonly testValue2 = new FormControl('');\n\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl('', [Validators.required, this.getSecretValidator()]),\n        testValue2: this.testValue2,\n    });\n\n    ngOnInit() {\n        this.testValue2.setValidators([Validators.required, this.companyValidator]);\n    }\n\n    private readonly companyValidator = (\n        field: AbstractControl,\n    ): ValidationErrors | null =>\n        field.value\n            ? {\n                  inn: new TuiValidationError(this.bigErrorContent),\n              }\n            : null;\n\n    private getSecretValidator(): (field: AbstractControl) => ValidationErrors | null {\n        return (field: AbstractControl): ValidationErrors | null =>\n            field.value &&\n            (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))\n                ? null\n                : {\n                      secret: new TuiValidationError(this.errorContent),\n                  };\n    }\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel label="Secret number">\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input>\n\n        <ng-template #errorContent>\n            Secret number must contain\n            <strong>10 or 12 digits</strong>\n            .\n        </ng-template>\n\n        <tui-field-error\n            formControlName="testValue1"\n            [order]="[\'required\', \'inn\']"\n        ></tui-field-error>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="Enter company name"\n        class="tui-space_top-4"\n    >\n        <tui-input\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input>\n\n        <ng-template #bigErrorContent>\n            This company is already registered\n            <button tuiButton type="button" class="tui-space_top-2">\n                It is mine\n            </button>\n        </ng-template>\n\n        <tui-field-error formControlName="testValue2"></tui-field-error>\n    </label>\n</form>\n'},this.example3={TypeScript:"import {Component, ViewChild} from '@angular/core';\nimport {\n    AbstractControl,\n    FormArray,\n    FormControl,\n    FormGroup,\n    ValidationErrors,\n    ValidatorFn,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-field-error-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample3 {\n    @ViewChild('phoneErrorContent')\n    phoneErrorContent: PolymorpheusContent = '';\n\n    testForm = new FormGroup({\n        phones: new FormArray(\n            [new FormControl('', [Validators.required, this.getPhoneLengthValidator()])],\n            [this.getPhoneArrayValidator()],\n        ),\n    });\n\n    get formData() {\n        return <FormArray>this.testForm.get('phones');\n    }\n\n    addPhone() {\n        this.formData.push(new FormControl('', this.addValidators()));\n    }\n\n    removePhone(index: number) {\n        this.formData.removeAt(index);\n\n        let n = 0;\n\n        while (n <= 1 && this.formData.controls[n]) {\n            this.formData.controls[n].setValidators([\n                Validators.required,\n                this.getPhoneLengthValidator(),\n            ]);\n            n++;\n        }\n    }\n\n    addValidators(): ValidationErrors | null {\n        return this.formData.controls.length < 2\n            ? [Validators.required, this.getPhoneLengthValidator()]\n            : null;\n    }\n\n    private getPhoneLengthValidator(): (\n        field: AbstractControl,\n    ) => ValidationErrors | null {\n        return (field: AbstractControl): ValidationErrors | null =>\n            field.value.length !== 12\n                ? {\n                      lenght: new TuiValidationError(this.phoneErrorContent),\n                  }\n                : null;\n    }\n\n    private getPhoneArrayValidator(): ValidatorFn {\n        return ((array: FormArray): ValidationErrors | null =>\n            array.controls.length < 2 ||\n            (!!array.controls.filter(item => item.errors).length && array.controls.length)\n                ? {\n                      length: new TuiValidationError(\n                          'You should add at least 2 phone number',\n                      ),\n                  }\n                : null) as ValidatorFn;\n    }\n}\n",HTML:'<form [formGroup]="testForm">\n    <label\n        *ngFor="let phone of formData.controls; let i = index"\n        tuiLabel\n        label="Phone number {{i + 1}}"\n        formArrayName="phones"\n        class="tui-space_bottom-4"\n    >\n        <span class="row">\n            <tui-input-phone\n                formControlName="{{i}}"\n                tuiTextfieldAutocomplete="off"\n                tuiTextfieldSize="m"\n                class="input"\n                [tuiTextfieldLabelOutside]="true"\n            ></tui-input-phone>\n            <button\n                tuiIconButton\n                type="button"\n                size="m"\n                title="Delete phone number"\n                appearance="icon"\n                icon="tuiIconTrash"\n                class="tui-space_left-2 icon"\n                (click)="removePhone(i)"\n            ></button>\n        </span>\n        <ng-template #phoneErrorContent>\n            Invalid phone number length\n        </ng-template>\n        <tui-field-error formControlName="{{i}}"></tui-field-error>\n    </label>\n\n    <tui-field-error\n        formArrayName="phones"\n        class="form-array-error"\n    ></tui-field-error>\n\n    <button\n        tuiButton\n        type="button"\n        size="s"\n        class="tui-space_top-4"\n        (click)="addPhone()"\n    >\n        Add a phone number\n    </button>\n</form>\n',LESS:".input {\n    width: 20rem;\n}\n\n.row {\n    display: flex;\n    align-items: center;\n}\n\n.form-array-error {\n    font-size: 0.875rem;\n}\n"},this.example4={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {\n    AbstractControl,\n    AsyncValidatorFn,\n    FormBuilder,\n    FormGroup,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {of} from 'rxjs';\nimport {delay} from 'rxjs/operators';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nfunction asyncValidatorFn(): AsyncValidatorFn {\n    return (field: AbstractControl) => {\n        return field.value && latinChars.test(field.value)\n            ? of(null).pipe()\n            : of({\n                  error: new TuiValidationError('Only latin letters allowed'),\n              }).pipe(delay(5000));\n    };\n}\n\n@Component({\n    selector: 'tui-field-error-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample4 {\n    readonly form: FormGroup;\n\n    constructor(@Inject(FormBuilder) private fb: FormBuilder) {\n        this.form = this.fb.group({\n            text: ['\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442', Validators.required],\n        });\n\n        this.form.controls['text'].setAsyncValidators(asyncValidatorFn());\n        this.form.controls['text'].markAsTouched();\n    }\n}\n",HTML:'<form [formGroup]="form">\n    <div class="tui-form__row">\n        <tui-input formControlName="text" class="input">\n            Enter some text\n        </tui-input>\n        <tui-field-error formControlName="text"></tui-field-error>\n    </div>\n</form>\n',LESS:".input {\n    width: 20rem;\n}\n\n.row {\n    display: flex;\n    align-items: center;\n}\n\n.form-array-error {\n    font-size: 0.875rem;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';\nimport {interval} from 'rxjs';\nimport {map, scan, startWith} from 'rxjs/operators';\n\nexport function maxLengthValidator(context: {requiredLength: string}): string {\n    return `Maximum length \u2014 ${context.requiredLength}`;\n}\n\nexport function minLengthValidator(context: {requiredLength: string}): string {\n    return `Minimum length \u2014 ${context.requiredLength}`;\n}\n\n@Component({\n    selector: 'tui-field-error-example-5',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: 'Enter this!',\n                email: 'Enter a valid email',\n                maxlength: maxLengthValidator,\n                minlength: minLengthValidator,\n                min: interval(2000).pipe(\n                    scan(acc => (acc = !acc), false),\n                    map(val => (val ? 'Fix please' : 'Min number 3')),\n                    startWith('Min number 3'),\n                ),\n            },\n        },\n    ],\n})\nexport class TuiFieldErrorExample5 {\n    readonly testValue1 = new FormControl('', [\n        Validators.minLength(4),\n        Validators.maxLength(4),\n    ]);\n\n    readonly testValue2 = new FormControl('', [Validators.required, Validators.email]);\n\n    readonly testValue3 = new FormControl(2, [Validators.min(3)]);\n\n    readonly testForm = new FormGroup({\n        testValue1: this.testValue1,\n        testValue2: this.testValue2,\n        testValue3: this.testValue3,\n    });\n\n    constructor() {\n        this.testValue1.valueChanges.subscribe(() => {\n            this.testValue1.markAsTouched();\n        });\n    }\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel label="Enter an email" class="tui-space_bottom-4">\n        <tui-input\n            i18n\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Required\n        </tui-input>\n\n        <tui-field-error formControlName="testValue2"></tui-field-error>\n    </label>\n\n    <label\n        tuiLabel\n        label="Minimum and maximum length"\n        class="tui-space_bottom-4"\n    >\n        <tui-input formControlName="testValue1" tuiTextfieldSize="m">\n            4 letters word...\n        </tui-input>\n\n        <tui-field-error formControlName="testValue1"></tui-field-error>\n    </label>\n\n    <label tuiLabel label="Minimum number">\n        <tui-input-count formControlName="testValue3" tuiTextfieldSize="m">\n            number\n        </tui-input-count>\n\n        <tui-field-error formControlName="testValue3"></tui-field-error>\n    </label>\n</form>\n'}}).\u0275fac=function(e){return new(e||ve)},ve.\u0275cmp=d["\u0275\u0275defineComponent"]({type:ve,selectors:[["example-tui-field-error"]],decls:4,vars:0,consts:[["header","FieldError","package","KIT","type","components"],["pageTab",""],[6,"pageTab"],["tuiLink","",3,"routerLink"],["id","base",3,"content",6,"heading"],["id","patterns",3,"content",6,"heading"],["id","formArray",3,"content",6,"heading"],["id","async",3,"content",6,"heading"],["id","customMessages",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,Ve,20,7,"ng-template",1),d["\u0275\u0275template"](2,xe,10,2,"ng-template",2),d["\u0275\u0275i18nAttributes"](3,se),d["\u0275\u0275elementEnd"]())},directives:[c.a,p.a,f.a,l.e,h.a,F,M,Z,K,ue,me.a],encapsulation:2,changeDetection:0}),ve),_e=((ye=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:ye}),ye.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||ye)},imports:[[m.TuiInputModule,a.ReactiveFormsModule,o.c,m.TuiFieldErrorModule,u.TuiLabelModule,m.TuiInputPhoneModule,m.TuiInputCountModule,u.TuiLinkModule,i.h,s.c,u.TuiButtonModule,u.TuiTextfieldControllerModule,l.f.forChild(Object(i.o)(Te))]]}),ye)}}]);