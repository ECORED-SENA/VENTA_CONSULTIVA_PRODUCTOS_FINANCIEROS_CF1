(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59974754"],{"03ad":function(e,n,s){"use strict";s("10d5")},"10d5":function(e,n,s){},"51bc":function(e,n,s){"use strict";s.r(n);var t=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("aside",{staticClass:"aside-menu",class:{"aside-menu--open":e.menuOpen}},[s("nav",{staticClass:"aside-menu__content"},[e._m(0),s("ul",{staticClass:"aside-menu__menu"},[e._l(e.menuData,(function(n,t){return[s("li",{key:"menu-item-"+t,staticClass:"aside-menu__menu__item",class:{"aside-menu__menu__item--active":e.$route.name==n.nombreRuta}},[s("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:n.nombreRuta}}},[n.hasOwnProperty("numero")?s("span",{domProps:{innerHTML:e._s(n.numero)}}):e._e(),s("span",{domProps:{innerHTML:e._s(n.titulo)}})])],1),n.hasOwnProperty("subMenu")&&n.subMenu.length?e._l(n.subMenu,(function(u,a){return s("li",{key:"submenu-item-"+t+"-"+a,staticClass:"aside-menu__menu__item--sub-menu",class:{"aside-menu__menu__item--sub-menu--active":e.$route.hash=="#"+u.hash}},[s("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:n.nombreRuta,hash:"#"+u.hash}}},[s("i",{class:u.icono}),s("span",{domProps:{innerHTML:e._s(u.numero)}}),s("span",{domProps:{innerHTML:e._s(u.titulo)}})])],1)})):e._e()]}))],2),s("ul",{staticClass:"aside-menu__sec-menu"},e._l(e.subMenuData,(function(n,t){return s("li",{key:"SecMenu-item-"+t,staticClass:"aside-menu__sec-menu__item"},[n.hasOwnProperty("download")?s("a",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{href:e.obtenerLink(n.download),target:"_blank"}},[s("i",{class:n.icono}),s("span",{domProps:{innerHTML:e._s(n.titulo)}})]):s("router-link",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{to:{name:n.nombreRuta}}},[s("i",{class:n.icono}),s("span",{domProps:{innerHTML:e._s(n.titulo)}})])],1)})),0)])])},u=[function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"aside-menu__header"},[s("h4",[e._v("Desarrollo de contenidos")])])}],a=(s("b0c0"),{name:"AsideMenu",computed:{menuData:function(){return this.$config.menuPrincipal.menu},subMenuData:function(){return this.$config.menuPrincipal.subMenu},menuOpen:function(){return this.$store.getters.isMenuOpen}},watch:{$route:function(e){("inicio"===e.name||window.innerWidth<=991)&&this.toggleMenu(!1)}},methods:{toggleMenu:function(e){this.$store.dispatch("toggleMenu",e)}}}),i=a,o=(s("03ad"),s("2877")),r=Object(o["a"])(i,t,u,!1,null,null,null);n["default"]=r.exports}}]);
//# sourceMappingURL=chunk-59974754.25464dc5.js.map