/*! For license information please see component---src-templates-index-template-js-50267661f81198eaacac.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1xLx":function(e,a,t){e.exports={feed__row:"Feed-module--feed__row---ImKd",feed__image:"Feed-module--feed__image--1u2NE","feed__image-picture":"Feed-module--feed__image-picture--1eduh",feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-description-p":"Feed-module--feed__item-description-p--6IixE","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI","feed__item-line":"Feed-module--feed__item-line--cVH-j"}},"6V6j":function(e,a,t){"use strict";t.d(a,"a",(function(){return _}));var i=t("q1tI"),n=t.n(i),r=t("wd/R"),m=t.n(r),d=t("Wbzz"),l=t("1xLx"),o=t.n(l),_=function(e){var a=e.edges;return n.a.createElement("div",{className:o.a.feed},a.map((function(e){var a=void 0!==e.node.frontmatter.socialImage?e.node.frontmatter.socialImage.publicURL:void 0,t=e.node.frontmatter.date;return n.a.createElement("div",{className:o.a.feed__item,key:e.node.fields.slug},n.a.createElement("div",{className:o.a["feed__item-meta"]},Array.isArray(t)?n.a.createElement(n.a.Fragment,null,n.a.createElement("time",{className:o.a["feed__item-meta-time"],dateTime:m()(t[0]).format("MMMM D, YYYY")},m()(t[0]).format("MMMM YYYY")),n.a.createElement("span",null," - "),n.a.createElement("time",{className:o.a["feed__item-meta-time"],dateTime:m()(t[1]).format("MMMM D, YYYY")},m()(t[1]).format("MMMM YYYY"))):n.a.createElement("time",{className:o.a["feed__item-meta-time"],dateTime:m()(t).format("MMMM D, YYYY")},m()(t).format("MMMM YYYY")),n.a.createElement("span",{className:o.a["feed__item-meta-divider"]}),n.a.createElement("span",{className:o.a["feed__item-meta-category"]},n.a.createElement(d.Link,{to:e.node.fields.categorySlug,className:o.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),n.a.createElement("h2",{className:o.a["feed__item-title"]},n.a.createElement(d.Link,{className:o.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),n.a.createElement("div",{className:o.a.feed__row},n.a.createElement("div",{className:o.a.feed__image},n.a.createElement(d.Link,{to:e.node.fields.slug},n.a.createElement("img",{src:a,className:o.a["feed__image-picture"]}))),n.a.createElement("div",{className:o.a["feed__item-description"]},n.a.createElement("p",{className:o.a["feed__item-description-p"]},e.node.frontmatter.description))),n.a.createElement(d.Link,{className:o.a["feed__item-readmore"],to:e.node.fields.slug},"View"),e.node.frontmatter.demo&&n.a.createElement("a",{className:o.a["feed__item-readmore"],href:e.node.frontmatter.demo,target:"_blank"},"Demo"),e.node.frontmatter.github&&n.a.createElement("a",{className:o.a["feed__item-readmore"],href:e.node.frontmatter.github,target:"_blank"},"Github"),n.a.createElement("hr",{className:o.a["feed__item-line"]}))})))}},"999l":function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return s}));var i=t("q1tI"),n=t.n(i),r=t("Zttt"),m=t("/d1K"),d=t("6V6j"),l=t("RXmK"),o=t("v0M6"),_=t("gGy4"),s="4261432485";a.default=function(e){var a=e.data,t=e.pageContext,i=Object(_.b)(),s=i.title,c=i.subtitle,f=t.currentPage,u=t.hasNextPage,g=t.hasPrevPage,p=t.prevPagePath,v=t.nextPagePath,E=a.allMarkdownRemark.edges,P=f>0?"Posts - Page "+f+" - "+s:s;return n.a.createElement(r.a,{title:P,description:c},n.a.createElement(m.a,{isIndex:!0}),n.a.createElement(l.a,null,n.a.createElement(d.a,{edges:E}),n.a.createElement(o.a,{prevPagePath:p,nextPagePath:v,hasPrevPage:g,hasNextPage:u})))}},U4DU:function(e,a,t){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},UbMB:function(e,a,t){var i;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var i=arguments[a];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(this&&this[i]||i);else if(Array.isArray(i))e.push(n.apply(this,i));else if("object"===r)for(var m in i)t.call(i,m)&&i[m]&&e.push(this&&this[m]||m)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(a,[]))||(e.exports=i)}()},v0M6:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var i=t("q1tI"),n=t.n(i),r=t("UbMB"),m=t.n(r),d=t("Wbzz"),l=t("WlAH"),o=t("U4DU"),_=t.n(o),s=m.a.bind(_.a),c=function(e){var a=e.prevPagePath,t=e.nextPagePath,i=e.hasNextPage,r=e.hasPrevPage,m=s({"pagination__prev-link":!0,"pagination__prev-link--disable":!r}),o=s({"pagination__next-link":!0,"pagination__next-link--disable":!i});return n.a.createElement("div",{className:_.a.pagination},n.a.createElement("div",{className:_.a.pagination__prev},n.a.createElement(d.Link,{rel:"prev",to:r?a:"/",className:m},l.b.PREV_PAGE)),n.a.createElement("div",{className:_.a.pagination__next},n.a.createElement(d.Link,{rel:"next",to:i?t:"/",className:o},l.b.NEXT_PAGE)))}}}]);
//# sourceMappingURL=component---src-templates-index-template-js-50267661f81198eaacac.js.map