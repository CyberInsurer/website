(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{298:function(e,t,a){"use strict";a.r(t);var n=a(454),r=a.n(n),i=a(1),o=a.n(i),s=a(0),c=a.n(s),l=a(18),m=a(151),d=a(311),p=(a(47),a(158),a(107),a(455),a(2)),u=a.n(p),y=a(364),f=a.n(y),h=a(457),g=a.n(h),b=a(547),x=a.n(b),w=(a(561),a(562),a(563),g.a.Item),_=x.a.TextArea,E=function(e){var t=e.form.getFieldDecorator;function a(t){t.preventDefault(),e.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),function(e){var t=this;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(a=Object.assign({"form-name":"contact"},e),Object.keys(a).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])}).join("&"))}).then(function(){console.log("Form submission success"),Object(l.navigate)("/success")}).catch(function(e){console.error("Form submission error:",e),t.handleNetworkError()});var a}(t))})}return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.ThemeContext.Consumer,null,function(e){return c.a.createElement("div",{className:u.a.dynamic([["1647325995",[e.color.brand.primary,e.color.brand.primary]]])+" form"},c.a.createElement(g.a,{name:"contact",onSubmit:a,"data-netlify":"true","data-netlify-honeypot":"bot-field"},c.a.createElement(w,{label:"Name"},t("name",{rules:[{whitespace:!0}]})(c.a.createElement(x.a,{name:"name"}))),c.a.createElement(w,{label:"E-mail"},t("email",{rules:[{required:!0,message:"Please input your e-mail address!",whitespace:!0,type:"email"}]})(c.a.createElement(x.a,{name:"email"}))),c.a.createElement(w,{label:"Message"},t("message",{rules:[{required:!0,message:"Please input your message!",whitespace:!0}]})(c.a.createElement(_,{name:"message",placeholder:"",autosize:{minRows:4,maxRows:10}}))),c.a.createElement(w,null,c.a.createElement(f.a,{type:"primary",htmlType:"submit"},"Submit"))),c.a.createElement(u.a,{styleId:"1647325995",css:[".form.__jsx-style-dynamic-selector{background:transparent;}",".form.__jsx-style-dynamic-selector .ant-row.ant-form-item{margin:0 0 1em;}",".form.__jsx-style-dynamic-selector .ant-row.ant-form-item:last-child{margin-top:1em;}",".form.__jsx-style-dynamic-selector .ant-form-item-control{line-height:1em;}",".form.__jsx-style-dynamic-selector .ant-form-item-label{line-height:1em;margin-bottom:0.5em;}",".form.__jsx-style-dynamic-selector .ant-form-item{margin:0;}",".form.__jsx-style-dynamic-selector .ant-input{-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:auto;font-size:1.2em;padding:0.5em 0.6em;}",".form.__jsx-style-dynamic-selector .ant-btn-primary{height:auto;font-size:1.2em;padding:0.5em 3em;background:"+e.color.brand.primary+";border:1px solid "+e.color.brand.primary+";}",".form.__jsx-style-dynamic-selector .ant-form-explain{margin-top:0.2em;}","@media screen and (min-width:1024px){.form.__jsx-style-dynamic-selector input{max-width:50%;}}"],dynamic:[e.color.brand.primary,e.color.brand.primary]}))}))};E.propTypes={form:o.a.object};var k=g.a.create({})(E),j=a(307),v=a(312),T=function(e){return r()(e),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.ThemeContext.Consumer,null,function(e){return c.a.createElement(d.a,{theme:e},c.a.createElement("header",null,c.a.createElement(j.a,{title:"Get in Touch",theme:e}),c.a.createElement("p",null,"Leave a message for one of our experts, and we’ll get back to you as soon as possible.")),c.a.createElement(k,{theme:e}))}),c.a.createElement(v.a,null))};T.propTypes={data:o.a.object.isRequired};t.default=T},307:function(e,t,a){"use strict";var n=a(2),r=a.n(n),i=a(0),o=a.n(i),s=a(1),c=a.n(s),l=function(e){var t=e.title,a=e.children,n=e.theme;return o.a.createElement(o.a.Fragment,null,t?o.a.createElement("h1",{className:r.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},t):o.a.createElement("h1",{className:r.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},a),o.a.createElement(r.a,{styleId:"1826841480",css:["h1.__jsx-style-dynamic-selector{font-size:"+n.font.size.xxl+";margin:"+n.space.stack.l+";-webkit-animation-name:headlineEntry;-webkit-animation-name:headlineEntry-__jsx-style-dynamic-selector;animation-name:headlineEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:"+n.time.duration.long+";-webkit-animation-duration:"+n.time.duration.long+";animation-duration:"+n.time.duration.long+";}","h1.__jsx-style-dynamic-selector span{font-weight:"+n.font.weight.standard+";display:block;font-size:0.5em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;margin:"+n.space.stack.xs+";}","h1.__jsx-style-dynamic-selector svg{height:0.75em;fill:"+n.color.brand.primary+";}","@-webkit-keyframes headlineEntry{from.__jsx-style-dynamic-selector{opacity:0.5;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@media screen and (min-width:600px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.2);}}","@media screen and (min-width:1024px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.4);}}"],dynamic:[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]}))};l.propTypes={title:c.a.string,children:c.a.node,theme:c.a.object.isRequired},t.a=l},309:function(e,t){e.exports={siteTitle:"Cyber Insurer - protect your business from emerging cyber threats",shortSiteTitle:"Cyber Insurer - GatsbyJS starter",siteDescription:"Cyber Insurer is protect your business from emerging cyber threats.",publisher:"Cyber Insurer",siteUrl:"https://cyberinsurer.uk",siteImage:"preview.jpg",siteLanguage:"en",authorName:"Cyber Insurer",authorTwitterAccount:"cyberinsureruk",headerTitle:"Cyber Insurer",headerSubTitle:"Protect your business from emerging cyber threats",manifestName:"CyberInsurer - protect your business from emerging cyber threats",manifestShortName:"CyberInsurer",manifestStartUrl:"/index.html",manifestBackgroundColor:"white",manifestThemeColor:"#666",manifestDisplay:"standalone",gravatarImgMd5:"",postsPerHomePage:7,postsPerPage:6,author:"GCN User",authorUrl:"https://gcn.netlify.com/about/",userTwitter:"@twitter",shortTitle:"GCN App",shareImage:"/logos/share.jpg",shareImageWidth:900,shareImageHeight:600,siteLogo:"/logos/logo-512.png",backgroundColor:"#e9e9e9",themeColor:"#121212",copyright:"Copyright © 2018 GCN User",authorSocialLinks:[{name:"twitter",url:"https://twitter.com/cyberinsureruk"},{name:"facebook",url:"http://facebook.com/cyberinsureruk"}]}},311:function(e,t,a){"use strict";var n=a(2),r=a.n(n),i=a(0),o=a.n(i),s=a(1),c=a.n(s),l=function(e){var t=e.children,a=e.theme;return o.a.createElement(o.a.Fragment,null,o.a.createElement("article",{className:r.a.dynamic([["2846578189",[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]]])+" article"},t),o.a.createElement(r.a,{styleId:"2846578189",css:[".article.__jsx-style-dynamic-selector{padding:"+a.space.inset.default+";margin:0 auto;}","@media screen and (min-width:600px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+") calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.tablet+";}}","@media screen and (min-width:1024px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.desktop+";}}"],dynamic:[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]}))};l.propTypes={children:c.a.node.isRequired,theme:c.a.object.isRequired};var m=l;a.d(t,"a",function(){return m})},312:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(328),c=a.n(s),l=a(309),m=a.n(l),d=function(e){var t=e.data,a=((t||{}).frontmatter||{}).title,n=((t||{}).frontmatter||{}).description,i=((t||{}).frontmatter||{}).cover,o=((t||{}).fields||{}).slug,s=a?a+" - "+m.a.shortSiteTitle:m.a.siteTitle,l=n||m.a.siteDescription,d=i||m.a.siteImage,p=m.a.siteUrl+m.a.pathPrefix+o;return r.a.createElement(c.a,{htmlAttributes:{lang:m.a.siteLanguage,prefix:"og: http://ogp.me/ns#"}},r.a.createElement("title",null,s),r.a.createElement("meta",{name:"description",content:l}),r.a.createElement("meta",{property:"og:url",content:p}),r.a.createElement("meta",{property:"og:title",content:s}),r.a.createElement("meta",{property:"og:description",content:l}),r.a.createElement("meta",{property:"og:image",content:d}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:creator",content:m.a.authorTwitterAccount?m.a.authorTwitterAccount:""}))};d.propTypes={data:o.a.object};var p=d;a.d(t,"a",function(){return p})}}]);
//# sourceMappingURL=component---src-pages-contact-js-26021acce4a2eff3fc48.js.map