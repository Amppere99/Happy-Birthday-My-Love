const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*2+"s";

stars.appendChild(star);

}

setInterval(()=>{

let s=document.getElementById("shooting-star");

s.style.left="-200px";

s.style.top=Math.random()*250+"px";

s.style.opacity=1;

s.animate([

{transform:"translate(0,0)"},

{transform:"translate(1800px,450px)"}

],{

duration:1800

});

setTimeout(()=>{

s.style.opacity=0;

},1800);

},6000);
