(()=>{"use strict";let e=document.querySelector(".city"),t=document.querySelector(".temp"),n=document.querySelector(".date"),a=(new Date).toDateString(),o=document.querySelector("#zipCode");document.querySelector("#searchBtn").addEventListener("click",(function(){let c=async function(e){const t=await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${e}&appid=674d4fcffa55cdf3f103af8e346807c8`,{mode:"cors"});return await t.json()}(o.value);c.then((function(r){let i=async function(e,t){const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=674d4fcffa55cdf3f103af8e346807c8`),a=await n.json();return console.log(a),a}(r.lat,r.lon);!function(o,c){o.then((function(t){e.innerText=t.name})),c.then((function(e){let o=Math.round(9*(e.main.temp-273.15)/5+32);t.innerText=o.toString()+"°F",n.innerText=`${a}`}))}(c,i),o.value=""}))}))})();