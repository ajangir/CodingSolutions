/*! For license information please see chunk-vendors~android~diagram~file~ml~multifileeditor~objective~rapidfire~subjective.21fce13257e91ba21c1d.js.LICENSE.txt */
(window.webpackJsonp_bluebook=window.webpackJsonp_bluebook||[]).push([[2],{"2rMq":function(e,t,o){var n;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),s={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(n=function(){return s}.call(t,o,t,e))||(e.exports=n)}()},"2zs7":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var n,r=o("2rMq");var s=((n=r)&&n.__esModule?n:{default:n}).default,l=s.canUseDOM?window.HTMLElement:{};t.canUseDOM=s.canUseDOM;t.default=l},"9rZX":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=o("qFS3"),s=(n=r)&&n.__esModule?n:{default:n};t.default=s.default,e.exports=t.default},NPsS:function(e,t,o){"use strict";var n=function(){};e.exports=n},QEso:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o("q1tI"),a=v(l),i=v(o("17x9")),u=m(o("VKEO")),c=v(o("S1to")),f=m(o("Ye7m")),d=m(o("fbhf")),p=v(o("2zs7")),h=v(o("UIKY"));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function v(e){return e&&e.__esModule?e:{default:e}}o("WkvU");var y={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=0,O=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.setOverlayRef=function(e){o.overlay=e,o.props.overlayRef&&o.props.overlayRef(e)},o.setContentRef=function(e){o.content=e,o.props.contentRef&&o.props.contentRef(e)},o.afterClose=function(){var e=o.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,s=e.bodyOpenClassName;s&&d.remove(document.body,s),r&&d.remove(document.getElementsByTagName("html")[0],r),n&&b>0&&0===(b-=1)&&f.show(t),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(u.returnFocus(),u.teardownScopedFocus()):u.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),h.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(u.setupScopedFocus(o.node),u.markForFocusLater()),o.setState({isOpen:!0},(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus()},o.closeWithTimeout=function(){var e=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:e},(function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())}))},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(e){9===e.keyCode&&(0,c.default)(o.content,e),o.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),o.requestClose(e))},o.handleOverlayOnClick=function(e){null===o.shouldClose&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(e):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(e){o.props.shouldCloseOnOverlayClick||e.target!=o.overlay||e.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(e){return o.ownerHandlesClose()&&o.props.onRequestClose(e)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(e,t){var n="object"===(void 0===t?"undefined":r(t))?t:{base:y[e],afterOpen:y[e]+"--after-open",beforeClose:y[e]+"--before-close"},s=n.base;return o.state.afterOpen&&(s=s+" "+n.afterOpen),o.state.beforeClose&&(s=s+" "+n.beforeClose),"string"==typeof t&&t?s+" "+t:s},o.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(o,n){return o[e+"-"+n]=t[n],o}),{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,o=e.ariaHideApp,n=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&d.add(document.body,r),n&&d.add(document.getElementsByTagName("html")[0],n),o&&(b+=1,f.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,o=e.className,r=e.overlayClassName,s=e.defaultStyles,l=o?{}:s.content,i=r?{}:s.overlay;return this.shouldBeClosed()?null:a.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:n({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},a.default.createElement("div",n({id:t,ref:this.setContentRef,style:n({},l,this.props.style.content),className:this.buildClassName("content",o),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t}(l.Component);O.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},O.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.instanceOf(p.default),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,testId:i.default.string},t.default=O,e.exports=t.default},S1to:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var o=(0,s.default)(e);if(!o.length)return void t.preventDefault();var n=void 0,r=t.shiftKey,l=o[0],a=o[o.length-1];if(e===document.activeElement){if(!r)return;n=a}a!==document.activeElement||r||(n=l);l===document.activeElement&&r&&(n=a);if(n)return t.preventDefault(),void n.focus();var i=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==i||"Chrome"==i[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var u=o.indexOf(document.activeElement);u>-1&&(u+=r?-1:1);if(void 0===(n=o[u]))return t.preventDefault(),void(n=r?a:l).focus();t.preventDefault(),n.focus()};var n,r=o("ZDLa"),s=(n=r)&&n.__esModule?n:{default:n};e.exports=t.default},UIKY:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var o=t.openInstances.indexOf(e);-1!==o&&(t.openInstances.splice(o,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(o){return o(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]};t.default=n,e.exports=t.default},VCL8:function(e,t,o){"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var o=this.constructor.getDerivedStateFromProps(e,t);return null!=o?o:null}.bind(this))}function s(e,t){try{var o=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,n)}finally{this.props=o,this.state=n}}function l(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,l=null,a=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?l="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(l="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==o||null!==l||null!==a){var i=e.displayName||e.name,u="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==l?"\n  "+l:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=s;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,o){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:o;c.call(this,e,t,n)}}return e}o.r(t),o.d(t,"polyfill",(function(){return l})),n.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,s.__suppressDeprecationWarning=!0},VKEO:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=u,t.handleFocus=c,t.markForFocusLater=function(){l.push(document.activeElement)},t.returnFocus=function(){var e=null;try{return void(0!==l.length&&(e=l.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){l.length>0&&l.pop()},t.setupScopedFocus=function(e){a=e,window.addEventListener?(window.addEventListener("blur",u,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",u),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){a=null,window.addEventListener?(window.removeEventListener("blur",u),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",u),document.detachEvent("onFocus",c))};var n,r=o("ZDLa"),s=(n=r)&&n.__esModule?n:{default:n};var l=[],a=null,i=!1;function u(){i=!0}function c(){if(i){if(i=!1,!a)return;setTimeout((function(){a.contains(document.activeElement)||((0,s.default)(a)[0]||a).focus()}),0)}}},WkvU:function(e,t,o){"use strict";var n,r=o("UIKY"),s=(n=r)&&n.__esModule?n:{default:n};var l=void 0,a=void 0,i=[];function u(){0!==i.length&&i[i.length-1].focusContent()}s.default.subscribe((function(e,t){l&&a||((l=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),l.style.position="absolute",l.style.opacity="0",l.setAttribute("tabindex","0"),l.addEventListener("focus",u),(a=l.cloneNode()).addEventListener("focus",u)),(i=t).length>0?(document.body.firstChild!==l&&document.body.insertBefore(l,document.body.firstChild),document.body.lastChild!==a&&document.body.appendChild(a)):(l.parentElement&&l.parentElement.removeChild(l),a.parentElement&&a.parentElement.removeChild(a))}))},Ye7m:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=i,t.setElement=function(e){var t=e;if("string"==typeof t&&l.canUseDOM){var o=document.querySelectorAll(t);i(o,t),t="length"in o?o[0]:o}return a=t||a},t.validateElement=u,t.hide=function(e){u(e)&&(e||a).setAttribute("aria-hidden","true")},t.show=function(e){u(e)&&(e||a).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){a=null},t.resetForTesting=function(){a=null};var n,r=o("NPsS"),s=(n=r)&&n.__esModule?n:{default:n},l=o("2zs7");var a=null;function i(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function u(e){return!(!e&&!a)||((0,s.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},ZDLa:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(l)};var n=/input|select|textarea|button|object/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var o=window.getComputedStyle(e);return t?"visible"!==o.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==o.getPropertyValue("display")}function s(e,t){var o=e.nodeName.toLowerCase();return(n.test(o)&&!e.disabled||"a"===o&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(r(t))return!1;t=t.parentNode}return!0}(e)}function l(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var o=isNaN(t);return(o||t>=0)&&s(e,!o)}e.exports=t.default},fbhf:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var n={},r={};t.add=function(e,t){return o=e.classList,s="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(s,e),o.add(e)}));var o,s},t.remove=function(e,t){return o=e.classList,s="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(s,e),0===s[e]&&o.remove(e)}));var o,s}},qFS3:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o("q1tI"),l=h(s),a=h(o("i8i4")),i=h(o("17x9")),u=h(o("QEso")),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o("Ye7m")),f=o("2zs7"),d=h(f),p=o("VCL8");function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var y=t.portalClassName="ReactModalPortal",b=t.bodyOpenClassName="ReactModal__Body--open",O=void 0!==a.default.createPortal,C=function(){return O?a.default.createPortal:a.default.unstable_renderSubtreeIntoContainer};function g(e){return e()}var w=function(e){function t(){var e,o,r;m(this,t);for(var s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return o=r=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.removePortal=function(){!O&&a.default.unmountComponentAtNode(r.node);var e=g(r.props.parentSelector);e?e.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var o=C()(r,l.default.createElement(u.default,n({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(o)},v(r,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){f.canUseDOM&&(O||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,g(this.props.parentSelector).appendChild(this.node),!O&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:g(e.parentSelector),nextParent:g(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,o){if(f.canUseDOM){var n=this.props,r=n.isOpen,s=n.portalClassName;e.portalClassName!==s&&(this.node.className=s);var l=o.prevParent,a=o.nextParent;a!==l&&(l.removeChild(this.node),a.appendChild(this.node)),(e.isOpen||r)&&!O&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(f.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),o=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);o?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-t)):this.removePortal()}}},{key:"render",value:function(){return f.canUseDOM&&O?(!this.node&&O&&(this.node=document.createElement("div")),C()(l.default.createElement(u.default,n({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(s.Component);w.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.instanceOf(d.default),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func},w.defaultProps={isOpen:!1,portalClassName:y,bodyOpenClassName:b,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},w.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(w),t.default=w}}]);