(this.webpackJsonpweather_app_react=this.webpackJsonpweather_app_react||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c);a(8);var o=function(){return r.a.createElement("h1",null,"Hi, I am Sophie ")},l=a(7);var i=function(){var e={color:"white"};return r.a.createElement("nav",null,r.a.createElement("ul",{className:"Navlinks"},r.a.createElement(l.b,{style:e,to:"/"},r.a.createElement("li",null,"Home")),r.a.createElement(l.b,{style:e,to:"/about"},r.a.createElement("li",null,"About")),r.a.createElement(l.b,{style:e,to:"/weather"},r.a.createElement("li",null,"weather"))))},m=a(13),u=a.n(m),h=a(19),p=a(20),d=a(21),f=a(23),w=a(22),E=a(24),v=function(e){return r.a.createElement("div",{className:"container h-100"},r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-2"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"City",name:"city",autoComplete:"off"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Country",name:"country",autoComplete:"off"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 mt-2 text-md-left "},r.a.createElement("button",{className:"btn"},"Weather !!!")))))},y=function(e){return r.a.createElement("div",{className:"container-temp text-light"},r.a.createElement("div",{className:"Card"},r.a.createElement("h1",{className:"text-white py-3"},e.cityname),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(e.weatherIcon," display-1")})),e.temp_celsius?r.a.createElement("h1",{className:"py-2"},e.temp_celsius,"\xb0"):null,function(e,t){if(t&&e)return r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},e,"\xb0"),r.a.createElement("span",{className:"px-4"},t,"\xb0"))}(e.temp_min,e.temp_max),r.a.createElement("h4",{className:"py-3"},e.description.charAt(0).toUpperCase()+e.description.slice(1))))};a(36);var b=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(f.a)(this,Object(w.a)(t).call(this))).getWeather=function(){var t=Object(h.a)(u.a.mark((function t(a){var n,r,c,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=a.target.elements.country.value,r=a.target.elements.city.value,!n||!r){t.next=15;break}return t.next=6,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(n,"&appid=").concat("4d4a3cb94ec722f547a1b6acf586ba1b"));case 6:return c=t.sent,t.next=9,c.json();case 9:s=t.sent,e.setState({city:"".concat(s.name,", ").concat(s.sys.country),country:s.sys.country,main:s.weather[0].main,celsius:e.calCelsius(s.main.temp),temp_max:e.calCelsius(s.main.temp_max),temp_min:e.calCelsius(s.main.temp_min),description:s.weather[0].description,error:!1}),e.get_WeatherIcon(e.weatherIcon,s.weather[0].id),console.log(s),t.next=16;break;case 15:e.setState({error:!0});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={city:void 0,country:void 0,icon:void 0,main:void 0,celsius:void 0,temp_max:null,temp_min:null,description:"",error:!1},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(E.a)(t,e),Object(d.a)(t,[{key:"get_WeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<232:this.setState({icon:e.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:e.Drizzle});break;case t>=500&&t<=521:this.setState({icon:e.Rain});break;case t>=600&&t<=622:this.setState({icon:e.Snow});break;case t>=701&&t<=781:this.setState({icon:e.Atmosphere});break;case 800===t:this.setState({icon:e.Clear});break;case t>=801&&t<=804:this.setState({icon:e.Clouds});break;default:this.setState({icon:e.Clouds})}}},{key:"calCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{loadweather:this.getWeather,error:this.state.error}),r.a.createElement(y,{cityname:this.state.city,weatherIcon:this.state.icon,temp_celsius:this.state.celsius,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description}))}}]),t}(r.a.Component),N=a(5);a(37);var _=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page "))},x=function(){return r.a.createElement(l.a,null,r.a.createElement(N.c,null,r.a.createElement("div",{className:"router"},r.a.createElement(i,null),r.a.createElement(N.a,{path:"/",exact:!0,component:_}),r.a.createElement(N.a,{path:"/about",component:o}),r.a.createElement(N.a,{path:"/weather",component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){}},[[25,1,2]]]);
//# sourceMappingURL=main.3a39fed7.chunk.js.map