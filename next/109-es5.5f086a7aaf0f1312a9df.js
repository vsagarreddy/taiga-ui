function _templateObject5(){var e=_taggedTemplateLiteral([":\u241fd557ac3c1cb761db5ba264036accec4aca3c6d98\u241f1809364622633527376:Override example"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241fa1453119f6ed88c259da4a6ced6c16385ed97672\u241f8410363156311885594: An easy way to dynamically override variables is to use a ",":START_LINK:",":START_TAG_CODE:ThemeSwitcher",":CLOSE_TAG_CODE:",":CLOSE_LINK:. This is how ",":START_LINK_1:",":START_TAG_CODE:ThemeNight",":CLOSE_TAG_CODE:",":CLOSE_LINK: does it. "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f8c92a8f23603f75edb962d5815d758f6ce1e30bf\u241f5810347892511711897: Besides colors there are also following variables that can be adjusted at any level of DOM structure: "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fb6505240ee06a75b7269fef171e0d3ad928abe2e\u241f8475078354016233296: Taiga UI uses CSS custom properties for many of its visual aspects. You can see ",":START_LINK:colors",":CLOSE_LINK: for the full list of color variables. "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241ff014ca169762f17944612b404ca3277a0ff46b04\u241f4467462789627316821:Variables"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{"9kyK":function(e,t,n){"use strict";n.r(t),n.d(t,"VariablesModule",(function(){return j}));var a,i,l,r,o=n("HHFY"),c=n("2kYt"),u=n("nIj0"),s=n("sEIs"),d=n("SVIu"),m=n("Qq0t"),p=n("dvRg"),f=n("EM62"),h=n("OZlg"),b=n("yZWP"),g=n("iyc4"),v=n("HvLL"),_=n("GdrL"),y=n("D+uv"),C=((a=function e(){_classCallCheck(this,e),this.value="",this.checkbox=!0}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=f["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-variables-example-1"]],decls:6,vars:3,consts:[[3,"hoverable"],[3,"ngModel","ngModelChange"],[1,"tui-space_top-4"],["size","l",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"tui-island",0),f["\u0275\u0275elementStart"](1,"tui-input",1),f["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),f["\u0275\u0275text"](2,"Input example"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"div",2),f["\u0275\u0275elementStart"](4,"tui-checkbox-labeled",3),f["\u0275\u0275listener"]("ngModelChange",(function(e){return t.checkbox=e})),f["\u0275\u0275text"](5," Checkbox example "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275property"]("hoverable",!0),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("ngModel",t.value),f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("ngModel",t.checkbox))},directives:[v.a,_.a,u.NgControlStatus,u.NgModel,y.a],styles:['[_nghost-%COMP%]{--tui-font-text:"Comic Sans",cursive;--tui-primary:#c86dd7;--tui-primary-hover:#a456b1;--tui-primary-active:#7f3b8a;--tui-primary-text:#fff;--tui-radius-s:0;--tui-radius-m:0.25rem;--tui-radius-l:0.25rem;--tui-height-l:4.375rem}'],changeDetection:0}),a),S=n("ER+R"),x=["header",$localize(_templateObject())];i=$localize(_templateObject2(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),l=$localize(_templateObject3()),r=$localize(_templateObject4(),"\ufffd#12\ufffd","[\ufffd#13\ufffd|\ufffd#15\ufffd]","[\ufffd/#13\ufffd|\ufffd/#15\ufffd]","[\ufffd/#12\ufffd|\ufffd/#14\ufffd]","\ufffd#14\ufffd","[\ufffd#13\ufffd|\ufffd#15\ufffd]","[\ufffd/#13\ufffd|\ufffd/#15\ufffd]","[\ufffd/#12\ufffd|\ufffd/#14\ufffd]"),r=f["\u0275\u0275i18nPostprocess"](r);var O=["heading",$localize(_templateObject5())];function T(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"li"),f["\u0275\u0275elementStart"](1,"tui-doc-copy",6),f["\u0275\u0275elementStart"](2,"code"),f["\u0275\u0275text"](3),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275text"](4),f["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("cdkCopyToClipboard",n.key),f["\u0275\u0275advance"](2),f["\u0275\u0275textInterpolate"](n.key),f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate1"](" \u2014 ",n.value," ")}}var k,E,L=((E=function e(){_classCallCheck(this,e),this.example1={HTML:'<tui-island [hoverable]="true">\n    <tui-input [(ngModel)]="value">Input example</tui-input>\n    <div class="tui-space_top-4">\n        <tui-checkbox-labeled size="l" [(ngModel)]="checkbox">\n            Checkbox example\n        </tui-checkbox-labeled>\n    </div>\n</tui-island>\n',LESS:":host {\n    --tui-font-text: 'Comic Sans', cursive;\n    --tui-primary: #c86dd7;\n    --tui-primary-hover: #a456b1;\n    --tui-primary-active: #7f3b8a;\n    --tui-primary-text: #fff;\n    --tui-radius-s: 0;\n    --tui-radius-m: 0.25rem;\n    --tui-radius-l: 0.25rem;\n    --tui-height-l: 4.375rem;\n}\n"},this.vars={"--tui-font-heading":"font for headings","--tui-font-text":"font for text","--tui-radius-xs":"border radius for smallest items (i.e. small checkbox)","--tui-radius-s":"border radius for small elements (i.e. tags)","--tui-radius-m":"default border radius","--tui-radius-l":"border radius for containers (i.e. hint, accordion)","--tui-height-xs":"smallest elements height (i.e. small button, badges)","--tui-height-s":"small elements height (i.e. small inputs)","--tui-height-m":"default elements height (i.e. inputs, buttons)","--tui-height-l":"large elements height (i.e. inputs, buttons)","--tui-disabled-opacity":"amount of transparency for disabled elements","--tui-autofill":"color for native browser autofill"}}).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=f["\u0275\u0275defineComponent"]({type:E,selectors:[["variables"]],decls:19,vars:4,consts:[[6,"header"],["tuiLink","","routerLink","/colors"],[4,"ngFor","ngForOf"],["tuiLink","","routerLink","/components/theme-switcher"],["tuiLink","","routerLink","/components/theme-night"],["id","override",3,"content",6,"heading"],[1,"var",3,"cdkCopyToClipboard"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"tui-doc-page",0),f["\u0275\u0275i18nAttributes"](1,x),f["\u0275\u0275elementStart"](2,"p"),f["\u0275\u0275i18nStart"](3,i),f["\u0275\u0275element"](4,"a",1),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"p"),f["\u0275\u0275i18n"](6,l),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](7,"ul"),f["\u0275\u0275template"](8,T,5,3,"li",2),f["\u0275\u0275pipe"](9,"keyvalue"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](10,"p"),f["\u0275\u0275i18nStart"](11,r),f["\u0275\u0275elementStart"](12,"a",3),f["\u0275\u0275element"](13,"code"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](14,"a",4),f["\u0275\u0275element"](15,"code"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](16,"tui-doc-example",5),f["\u0275\u0275i18nAttributes"](17,O),f["\u0275\u0275element"](18,"tui-variables-example-1"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275advance"](8),f["\u0275\u0275property"]("ngForOf",f["\u0275\u0275pipeBind1"](9,2,t.vars)),f["\u0275\u0275advance"](8),f["\u0275\u0275property"]("content",t.example1))},directives:[h.a,b.a,s.e,c.s,g.a,C,S.a,o.a],pipes:[c.l],encapsulation:2,changeDetection:0}),E),j=((k=function e(){_classCallCheck(this,e)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:k}),k.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||k)},imports:[[c.c,o.c,p.TuiIslandModule,m.TuiLinkModule,d.j,p.TuiInputModule,p.TuiCheckboxLabeledModule,d.h,s.f.forChild(Object(d.o)(L)),u.FormsModule]]}),k)}}]);