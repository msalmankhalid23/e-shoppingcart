(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(33),l=a.n(c),o=(a(71),a(72),a(73),a(74),a(75),a(76),a(5)),i=a(7),s=a(63),m=a(35),u=a.n(m),d=function(){var e=function(){var e=u.a.get("session");return void 0===e?{}:JSON.parse(e)}();return!(!e||!e.email)},p=function(e){u.a.remove("session"),u.a.set("session",JSON.stringify(e),{expires:14})},h=r.a.createContext(d()),f=h.Consumer,g=function(e){var t=e.component,a=Object(s.a)(e,["component"]);return r.a.createElement(f,null,(function(e){return r.a.createElement(i.a,Object.assign({},a,{render:function(e){return r.a.createElement(t,e)}}))}))},E=a(9),b=a(10),v=a(12),y=a(11),N=a(13);function x(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 max-auto my-2 text-center text-title"},r.a.createElement("h1",{className:"text-capitalize font-weight-bold"},e.name," ",r.a.createElement("strong",{className:"text-blue"}," ",e.title," "))))}function O(){return r.a.createElement("div",{className:"container-fluid text-center d-none d-lg-block"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 max-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"products")),r.a.createElement("div",{className:"col-10 max-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"Name of product")),r.a.createElement("div",{className:"col-10 max-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"price")),r.a.createElement("div",{className:"col-10 max-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"quantity")),r.a.createElement("div",{className:"col-10 max-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"remove")),r.a.createElement("div",{className:"col-10 max-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"total"))))}function j(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 max-aut0 text-center text-title"},r.a.createElement("h1",null,"your cart is currently empty"))))}var w=a(24),C=a(14);function k(e){var t=e.item,a=e.value,n=t.id,c=t.title,l=t.img,o=t.price,i=t.total,s=t.count,m=a.increment,u=a.decrement,d=a.removeItem;return r.a.createElement("div",{className:"row my-2 text-capitalize text-center"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("img",{src:l,style:{width:"5rem",height:"5rem"},className:"img-fluid",alt:"prodcut"})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"}," prodcut:"),c),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"}," price:"),o),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"btn btn-my-black mx-1",onClick:function(){return u(n)}},"-"),r.a.createElement("span",{className:"btn btn-my-black mx-1"},s),r.a.createElement("span",{className:"btn btn-my-black mx-1",onClick:function(){return m(n)}},"+")))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("div",{className:"cart-icon",onClick:function(){return d(n)}},r.a.createElement(w.a,{icon:C.h}))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("strong",null," item total: RS"),i))}function S(e){var t=e.value,a=t.cart;return r.a.createElement("div",{className:"container-fluid"},a.map((function(e){return r.a.createElement(k,{key:e.id,item:e,value:t})})))}var P=a(19),T=a(34),D=[{id:1,title:"Play Station - 5",img:"img/product-1.png",price:175e3,company:"SONY",info:"TheThe next generation of PlayStation is finally here with the arrival of the PS5. The PS5 is powered by a custom eight-core AMD Zen 2 CPU and a custom AMD Radeon RDNA 2-based GPU that will provide 10.28 teraflops of raw graphical power. The console also uses variable frequencies on both the PS5\u2019s CPU and GPU, which could theoretically push the graphics to run slightly faster than normal when the CPU isn\u2019t running at peak. CPU: Eight Zen 2 Cores @ 3.5GHz with SMT (variable frequency). 825GB PCIe Gen 4 NVMe SSD (5.5GB/s uncompressed, typical 8-9GB/s compressed). Usable storage is 667.2GB",inCart:!1,count:0,total:0},{id:2,title:"DualSense\u2122 wireless controller",img:"img/product-2.png",price:15e3,company:"SONY",info:"Discover a deeper, highly immersive gaming experience1 with the innovative new PS5\u2122 controller, featuring haptic feedback and dynamic trigger effects2. The DualSense wireless controller also includes a built-in microphone and create button, all integrated into an iconic, comfortable design.",inCart:!1,count:0,total:0},{id:3,title:"PULSE 3D\u2122 wireless headset",img:"img/product-3.png",price:22e3,company:"Sony",info:"Play in comfort with a wireless headset fine-tuned for 3D Audio on PS5 consoles2. Featuring USB Type-C\xae  charging and dual noise-cancelling microphones, you can keep the party chat flowing with crystal-clear voice capture3.",inCart:!1,count:0,total:0}],I={id:1,title:"Play Station - 5",img:"img/product-1.png",price:175e3,company:"SONY",info:"TheThe next generation of PlayStation is finally here with the arrival of the PS5. The PS5 is powered by a custom eight-core AMD Zen 2 CPU and a custom AMD Radeon RDNA 2-based GPU that will provide 10.28 teraflops of raw graphical power. The console also uses variable frequencies on both the PS5\u2019s CPU and GPU, which could theoretically push the graphics to run slightly faster than normal when the CPU isn\u2019t running at peak. CPU: Eight Zen 2 Cores @ 3.5GHz with SMT (variable frequency). 825GB PCIe Gen 4 NVMe SSD (5.5GB/s uncompressed, typical 8-9GB/s compressed). Usable storage is 667.2GB",inCart:!1,count:0,total:0};function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(T.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=r.a.createContext(),U=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],detailProduct:I,cart:[],modalOpen:!1,modalProduct:I,cartSubtotal:0,cartTax:0,cartTotal:0},a.setProducts=function(){var e=[];D.forEach((function(t){var a=G({},t);e=[].concat(Object(P.a)(e),[a])})),a.setState((function(){return{products:e}}))},a.getItem=function(e){return a.state.products.find((function(t){return t.id===e}))},a.handleDetail=function(e){console.log("Hello from detail");var t=a.getItem(e);a.setState((function(){return{detailProduct:t}}))},a.addToCart=function(e){console.log("Hell from add to cart, id is ".concat(e));var t=Object(P.a)(a.state.products),n=t.indexOf(a.getItem(e)),r=t[n];r.inCart=!0,r.count=1;var c=r.price;r.total=c,a.setState((function(){return{products:t,cart:[].concat(Object(P.a)(a.state.cart),[r])}}),(function(){console.log("add to cart"+a.state),a.addTotals()}))},a.openModal=function(e){var t=a.getItem(e);a.setState((function(){return{modalProduct:t,modalOpen:!0}}))},a.closeModal=function(){a.setState((function(){return{modalOpen:!1}}))},a.increment=function(e){console.log("This is increment method");var t=Object(P.a)(a.state.cart),n=t.find((function(t){return t.id===e}));n.count+=1,n.total=n.count*n.price,a.setState((function(){return{cart:Object(P.a)(t)}}),(function(){a.addTotals()}))},a.decrement=function(e){console.log("This is decrement method");var t=Object(P.a)(a.state.cart),n=t.find((function(t){return t.id===e}));n.count>1&&(n.count-=1,n.total=n.count*n.price),a.setState((function(){return{cart:Object(P.a)(t)}}),(function(){a.addTotals()}))},a.removeItem=function(e){console.log("item removed");var t=Object(P.a)(a.state.products),n=Object(P.a)(a.state.cart);n=n.filter((function(t){return t.id!==e}));var r=t.indexOf(a.getItem(e)),c=t[r];c.inCart=!1,c.count=0,c.total=0,a.setState((function(){return{cart:Object(P.a)(n),prodcuts:Object(P.a)(t)}}),(function(){a.addTotals()}))},a.clearCart=function(){console.log("cart was cleared"),a.setState((function(){return{cart:[]}}),(function(){a.setProducts(),a.addTotals()}))},a.addTotals=function(){var e=0;a.state.cart.map((function(t){return e+=t.total}));var t=parseFloat((.1*e).toFixed(2)),n=e+t;a.setState((function(){return{cartSubtotal:e,cartTax:t,cartTotal:n}}))},a.tester=function(){console.log("state prodcuts:",a.state.products[0].inCart),console.log("state prodcuts:",D[0].inCart);var e=Object(P.a)(a.state.products);e[0].inCart=!0,a.setState((function(){return{prodcuts:e}}),(function(){console.log("state prodcuts:",a.state.products[0].inCart),console.log("state prodcuts:",D[0].inCart)}))},a}return Object(N.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.setProducts()}},{key:"render",value:function(){return r.a.createElement(M.Provider,{value:G({},this.state,{handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal,increment:this.increment,decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart})},this.props.children)}}]),t}(n.Component),z=M.Consumer;function A(e){var t=e.value,a=t.cartSubtotal,n=t.cartTax,c=t.cartTotal,l=t.clearCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"},r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-outline-danger text-capitalize",onClick:function(){return l()}},"clear cart")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"subtotal: "),r.a.createElement("strong",null,"RS",a)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"Tax: "),r.a.createElement("strong",null,"RS",n)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"total: "),r.a.createElement("strong",null,"RS",c))))))}var R=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(z,null,(function(e){return e.cart.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{name:"your",title:"cart"}),r.a.createElement(O,null),r.a.createElement(S,{value:e}),r.a.createElement(A,{value:e})):r.a.createElement(j,null)})))}}]),t}(n.Component),q=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-title text-uppercase pt-5"},r.a.createElement("h1",{className:"display-3"},"404 "),r.a.createElement("h1",null,"Error"),r.a.createElement("h2",null,"page not found"),r.a.createElement("h3",null,"the requested URL ",r.a.createElement("span",{className:"text-danger"},this.props.location.pathname)," was not found"))))}}]),t}(n.Component),F=a(20),Y=a(21);function W(){var e=Object(F.a)(["\n    text-transform: capitalize;\n    font-size: 1.4rem;\n    background: transparent;\n    border: 0.05rem solid var(--lightBlue);\n    border-color:",";\n    color:",";\n    border-radius: 0.5rem;\n    padding: 0.2rem 0.5rem;\n    cursor:pointer;\n    margin: 0.2rem 0.5rem 0.2rem 0;\n    transition: all 0.5s ease-in-out;\n    &:hover{\n        background:",";\n        color: var(--mainBlue);\n    }\n    &:focus{\n        outline: none;\n    }\n"]);return W=function(){return e},e}var Z=Y.a.button(W(),(function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"}),(function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"}),(function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"})),H=a(25);function J(){var e=Object(F.a)(["\nbackground: var(--mainBlue);\n.nav-link{\n    color:var(--mainWhite) !important;\n    font-size:1.3rem; //not using px because its aboulute. rem set the value to root. e.g if user chagne the font from 16 to 20 then with rem it automatically will be set\n    text-transform: capitalize ;\n}\n.sub-text{\n    color:var(--mainWhite) !important;\n    font-style:italic;\n    font-size: 0.5 rem;\n}\n\n"]);return J=function(){return e},e}H.b.add(C.e,C.d,C.g,C.f,C.c);var L=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(_,{className:"navbar navbar-expand-sm navbar-dark px-sm-5"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:"img/logo.png",alt:"store",className:"navbar-brand",width:"100",height:"100"}),r.a.createElement("label",{className:"d-block small font-italic text-white"}," Developed By Salman Khalid")),r.a.createElement("ul",{className:"navbar-nav align-items-center"},r.a.createElement("li",{className:"nav-item ml-5"},r.a.createElement(o.b,{to:"/",className:"nav-link font-weight-bold"},"GiocoMania"),r.a.createElement("p",{className:"sub-text"},"Zeal for Gaming"))),r.a.createElement(o.b,{to:"/cart",className:"ml-auto"},r.a.createElement(Z,null,r.a.createElement("span",{className:"mr-2"},r.a.createElement(w.a,{icon:"cart-plus"})),"my cart")))}}]),t}(n.Component),_=Y.a.nav(J()),V=a(4),$=function(){return r.a.createElement(V.i,{className:"mt-5"},r.a.createElement(V.c,{activeItem:1,length:4,showControls:!0,showIndicators:!0,className:"z-depth-1",interval:3e3},r.a.createElement(V.e,null,r.a.createElement(V.f,{itemId:"1"},r.a.createElement(V.q,null,r.a.createElement("img",{className:"d-block w-100 h-20",src:"img/carousel/ps5_console_1.jpg",alt:"PS 5 Console"}),r.a.createElement(V.l,{overlay:"black-light"})),r.a.createElement(V.d,null,r.a.createElement("h3",{className:"h3-responsive"},"A higher form of shopping"),r.a.createElement("p",null,"Get PS5 at lowest price"))),r.a.createElement(V.f,{itemId:"2"},r.a.createElement(V.q,null,r.a.createElement("img",{className:"d-block w-100",src:"img/carousel/bg_1.jpg",alt:"Gaming Arena"}),r.a.createElement(V.l,{overlay:"black-light"})),r.a.createElement(V.d,null,r.a.createElement("h3",{className:"h3-responsive"},"Gaming Areana"))),r.a.createElement(V.f,{itemId:"3"},r.a.createElement(V.q,null,r.a.createElement("img",{className:"d-block w-100",src:"img/carousel/background-commerece-2.jpg",alt:"Delicacy"}),r.a.createElement(V.l,{overlay:"black-slight"})),r.a.createElement(V.d,null,r.a.createElement("h3",{className:"h3-responsive"},"Discover the difference"),r.a.createElement("p",null,"Up to 50 % discount"))),r.a.createElement(V.f,{itemId:"4"},r.a.createElement(V.q,null,r.a.createElement("img",{className:"d-block w-100",src:"img/carousel/background-commerece-3.jpg",alt:"all eyes on you"}),r.a.createElement(V.l,{overlay:"black-light"})),r.a.createElement(V.d,null,r.a.createElement("h3",{className:"h3-responsive"},"All eyes on you"),r.a.createElement("p",null,"Free Shipment"))))))};function K(){var e=Object(F.a)(['\n    \n    background: transparent;\n    border: 0;\n    border-color:"var(--lightBlue)";\n    border-radius: 0.5rem;\n    padding: 0.2rem 0.5rem;\n    cursor:pointer;\n    &:hover{\n        background:"var(--lightBlue)";\n        color: var(--mainBlue);\n    }\n    &:focus{\n        outline: none;\n    }\n']);return K=function(){return e},e}var Q=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={collapseID:""},a.toggleCollapse=function(e){return function(){console.log("This is decrement method"),a.setState((function(t){return{collapseID:t.collapseID!==e?e:""}}))}},a.decrement=function(){console.log("This is decrement method")},a}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.info;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{onClick:this.toggleCollapse("basicCollapse")},r.a.createElement(w.a,{icon:this.state.collapseID?C.a:C.b})),r.a.createElement(V.h,{id:"basicCollapse",isOpen:this.state.collapseID},r.a.createElement("p",null,e)))}}]),t}(n.Component),X=Y.a.button(K()),ee=Q;function te(){var e=Object(F.a)(["\n.card{\n    border-color:transparent;\n    transition: all 1s linear;\n    margin-top: 1.9rem;\n}\n.card-footer{\n    background:transparent;\n    border-top: transaprent;\n    transition: all 1s linear;\n}\n&:hover{\n.card{\n    border:0.04rem solid rgba(0,0,0,0.2);\n    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);\n}\n.card-footer{\n    background:rgba(247,247,247);\n}\n}\n\n.img-container{\n    position:relative;\n    overflow:hidden;\n}\n.card-img-top{\n    transition: all 1s linear;\n}\n.img-container:hover .card-img-top{\ntransform: scale(1.2);\n}\n.cart-btn{\n    position: absolute;\n    bottom:0;\n    right:0;\n    padding: 0.2rem 0.4rem;\n    background: var(--lightBlue);\n    border: none;\n    color:var(--mainWhite);\n    font-size:1.4rem;\n    border-radius:0.5rem 0 0 0;\n    transform: translate(100%,100%);\n    transition: all 1s linear;\n}\n.img-container:hover .cart-btn{\n    transform: translate(0,0);\n}\n\n.cart-btn:hover{\n    color:var(--mainBlue);\n    cursor:pointer;\n}\n"]);return te=function(){return e},e}var ae=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.product,t=e.id,a=e.title,n=e.img,c=e.price,l=e.inCart,i=e.info;return r.a.createElement(ne,{className:"col-9 max-auto col-md-4"},r.a.createElement("div",{className:"card"},r.a.createElement(z,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"img-container p-5",onClick:function(){return e.handleDetail(t)}},r.a.createElement(o.b,{to:"/details"},r.a.createElement("img",{src:n,alt:"prodcut",className:"card-img-top"})),r.a.createElement("button",{className:"cart-btn",disabled:!!l,onClick:function(){e.addToCart(t),e.openModal(t)}},l?r.a.createElement("p",{className:"text-capitalize mb-0",disabled:!0}," ","In Cart"):r.a.createElement(w.a,{icon:"cart-plus"}))),r.a.createElement("div",{className:"card-footer d-flex justify-content-between"},r.a.createElement("p",{className:"align-self-center mb-0"},a),r.a.createElement("h5",{className:"text-blue font-italic mb-0"},r.a.createElement("span",{className:"mar-1"}," RS"),c)),r.a.createElement(ee,{info:i}))}))))}}]),t}(n.Component),ne=Y.a.div(te()),re=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement(x,{name:"Products:",title:"Play Stations"}),r.a.createElement("div",{className:"row"},r.a.createElement(z,null,(function(e){return console.log("val"+e.products),e.products.map((function(e){return r.a.createElement(ae,{key:e.id,product:e})}))})))))))}}]),t}(n.Component),ce=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(z,null,(function(e){console.log(e.detailProduct);var t=e.detailProduct,a=t.id,n=t.img,c=t.company,l=t.title,i=t.info,s=t.price,m=t.inCart;return r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-blue my-5"},r.a.createElement("h1",null,l))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("img",{src:n,className:"img-fluid",alt:"product"})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3 text-capitalize"},r.a.createElement("h2",null,"Model;",l," "),r.a.createElement("h4",{className:"text-title text-uppercase text-muted mt-3 mb-2"},"made by: ",r.a.createElement("span",{className:"text-uppercase"}," ",c)),r.a.createElement("h4",{className:"text-blue"},r.a.createElement("strong",null,"price:",r.a.createElement("span",null,"RS")," ",s)),r.a.createElement("p",{className:"text-capitalize font-weight-bold mt-3 mb-0"},"some info about product:"),r.a.createElement("p",{className:"text-muted lead"},i),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},r.a.createElement(Z,null,"Back to products")),r.a.createElement(Z,{cart:!0,disabled:!!m,onClick:function(){e.addToCart(a),e.openModal(a)}},m?"in cart":"add to cart")))))}))}}]),t}(n.Component),le=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",confirmEmail:"",password:""},a.handleChange=function(e){var t=e.target,n=t.id,r=t.value;a.setState(Object(T.a)({},n,r))},a.handleSubmit=function(e){},a.handleSignIn=function(e){e.preventDefault()},a}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(V.i,{className:"center-block mt-4"},r.a.createElement(V.o,null,r.a.createElement(V.g,{md:"8",className:"px-5"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"grey-text"},r.a.createElement(V.k,{label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right",id:"name",value:this.name,onChange:this.handleChange}),r.a.createElement(V.k,{label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",id:"email",value:this.email,onChange:this.handleChange}),r.a.createElement(V.k,{label:"Confirm your email",icon:"exclamation-triangle",group:!0,type:"text",validate:!0,error:"wrong",success:"right",id:"confirmEmail",value:this.confirmEmail,onChange:this.handleChange}),r.a.createElement(V.k,{label:"Your password",icon:"lock",group:!0,type:"password",validate:!0,id:"password",value:this.password,onChange:this.handleChange})),r.a.createElement("div",{className:"text-center"},r.a.createElement(V.b,{color:"primary"},"Register"))))))}}]),t}(n.Component);function oe(){return r.a.createElement(o.a,null,r.a.createElement(L,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:re}),r.a.createElement(g,{path:"/details",component:ce}),r.a.createElement(g,{path:"/cart",component:R}),r.a.createElement(g,{path:"/productList",component:re}),r.a.createElement(i.a,{path:"/signup",component:le}),r.a.createElement(i.a,{path:"*",component:q})))}function ie(){var e=Object(F.a)(["\nposition:fixed;\ntop:0;\nleft:0;\nright:0;\nbottom:0;\nbackground:rgba(0,0,0,0.3);\ndisplay:flex;\nalign-items:center;\njustify-content:center;\n#modal{\n    background: var(--mainWhite);\n}\n\n"]);return ie=function(){return e},e}var se=function(){var e=Object(i.f)();return r.a.createElement(z,null,(function(t){var a=t.modalOpen,n=t.closeModal,c=t.modalProduct,l=c.img,i=c.title,s=c.price;return a?r.a.createElement(me,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"modal",className:"col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"},"item added to the cart",r.a.createElement("img",{src:l,className:"img-fluid",alt:"prodcut"}),r.a.createElement("h5",null,i),r.a.createElement("h5",{className:"text-muted"},"prince: $",s),r.a.createElement(o.b,{to:"/"},r.a.createElement(Z,{onClick:function(){return e.push("/cart")}},"Store")),r.a.createElement(o.b,{to:"/cart"},r.a.createElement(Z,{cart:!0,onClick:function(){return n()}},"go to cart")))))):null}))},me=Y.a.div(ie()),ue=a(62);H.b.add(ue.a,C.e,C.d,C.g);var de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null),r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(U,null,r.a.createElement((function(e){return r.a.createElement(h.Provider,{value:{getUserLoggedInStatus:d,setSessionCookie:p}},e.children)}),null,r.a.createElement(o.a,null,r.a.createElement(de,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t,a){e.exports=a(112)},74:function(e,t,a){},75:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.65835ba3.chunk.js.map