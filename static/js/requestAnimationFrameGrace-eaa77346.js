const a=["moz","ms","webkit"];function r(){let n=0;return function(e){const i=new Date().getTime(),t=Math.max(0,16-(i-n)),o=setTimeout(()=>{e(i+t)},t);return n=i+t,o}}function m(){if(typeof window>"u")return()=>0;if(window.requestAnimationFrame)return window.requestAnimationFrame.bind(window);const n=a.filter(e=>`${e}RequestAnimationFrame`in window)[0];return n?window[`${n}RequestAnimationFrame`]:r()}function w(n){if(typeof window>"u")return null;if(window.cancelAnimationFrame)return window.cancelAnimationFrame(n);const e=a.filter(i=>`${i}CancelAnimationFrame`in window||`${i}CancelRequestAnimationFrame`in window)[0];return e?(window[`${e}CancelAnimationFrame`]||window[`${e}CancelRequestAnimationFrame`]).call(this,n):clearTimeout(n)}const u=m();export{w as c,u as r};
