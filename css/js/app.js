const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const s=document.createElement("div");

s.className="star";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDelay=Math.random()*2+"s";

stars.appendChild(s);

}

setInterval(()=>{

const star=document.getElementById("shooting-star");

star.style.left="-200px";

star.style.top=Math.random()*250+"px";

star.style.opacity=1;

star.animate(

[
{transform:"translate(0,0)"},
{transform:"translate(1800px,500px)"}
],

{
duration:1800
}

);

setTimeout(()=>{

star.style.opacity=0;

},1800);

},6000);
