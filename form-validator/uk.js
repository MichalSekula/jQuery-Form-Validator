/**
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.2.188
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(r){"use strict";r.formUtils.addValidator({name:"ukvatnumber",validatorFunction:function(r){if(r=r.replace(/[^0-9]/g,""),r.length<9)return!1;var e=!1,a=[];a=r.split("");var t=+(a[7]+a[8]),n=a[0],o=a[1];if(0===n&&o>0)return!1;for(var i=0,s=0;7>s;s++)i+=a[s]*(8-s);for(var u=0,d=0,f=8;f>=2;f--)u+=a[d]*f,d++;for(;i>0;)i-=97;return i=Math.abs(i),t===i&&(e=!0),e||(i%=97,55>i?i+=42:i-=55,i===t&&(e=!0)),e},errorMessage:"",errorMessageKey:"badUKVatAnswer"}),r.formUtils.addValidator({name:"ukutr",validatorFunction:function(r){var e=[0,6,7,8,9,10,5,4,3,2,0],a=[2,1,9,8,7,6,5,4,3,2,1],t=0,n=r+"K";if(/\d{10}K/.test(n)){for(var o=0;10>o;o++)t+=n[o]*e[o];if(n.charAt(0)===a[t%11])return!0}return!1},errorMessage:"",errorMessageKey:"badUkUtrNumber"}),r.formUtils.addValidator({name:"uknin",validatorFunction:function(r){return/^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}([A-D]|\s)$/i.test(r)?!0:!1},errorMessage:"",errorMessageKey:"badUkNinNumber"})}(jQuery);