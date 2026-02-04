const yes = document.getElementById("yes");
const no = document.getElementById("no");
const result = document.getElementById("result");
const question = document.getElementById("question");

let scale = 1;

yes.addEventListener("click", () => {
  scale += 0.3;
  yes.style.transform = `scale(${scale})`;
  yes.textContent = "Sí 😌";

  if (scale >= 2.1) {
    document.querySelector(".buttons").classList.add("hidden");
    result.classList.remove("hidden");
    confettiBoom();
  }
});

no.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  no.style.position = "fixed";
  no.style.left = `${x}px`;
  no.style.top = `${y}px`;
});

function confettiBoom(){
  for(let i=0;i<80;i++){
    const d=document.createElement("div");
    d.style.position="fixed";
    d.style.left=Math.random()*100+"vw";
    d.style.top="-10px";
    d.style.width="8px";
    d.style.height="8px";
    d.style.borderRadius="2px";
    d.style.background=`hsl(${Math.random()*360}, 80%, 60%)`;
    d.style.zIndex="9999";
    document.body.appendChild(d);

    const fall = d.animate([
      { transform:`translateY(0)` },
      { transform:`translateY(${window.innerHeight+40}px)` }
    ], { duration: 1200 + Math.random()*800 });

    fall.onfinish=()=>d.remove();
  }
}
