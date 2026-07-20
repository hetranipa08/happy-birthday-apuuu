/* =====================================
   Happy Birthday Apuuu
===================================== */

const title = document.getElementById("title");
const button = document.getElementById("beginButton");
const glow = document.getElementById("mouseGlow");


const text = "Maruu Apuutaru 💙";

let index = 0;

button.style.opacity = "0";
button.style.transform = "translateY(20px)";


function typeWriter(){

    if(index < text.length){

        title.textContent += text.charAt(index);

        index++;

        setTimeout(typeWriter,180);

    }

    else{

        button.style.transition = "1s";

        button.style.opacity = "1";

        button.style.transform = "translateY(0)";

    }

}

setTimeout(typeWriter,600);


/* ---------------- Mouse Glow ---------------- */

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* ---------------- Button ---------------- */

button.addEventListener("click",()=>{

    localStorage.setItem("musicTime", 0);

    document.body.style.opacity = "0";
    setTimeout(()=>{

        window.location.href = "reasons.html";

    },700);

});
/* =====================================
   Sparkles
===================================== */

const sparkleContainer = document.getElementById("sparkles");

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    const size = Math.random()*6 + 3;

    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";

    sparkle.style.left = Math.random()*100 + "vw";
    sparkle.style.top = (Math.random() * 120) + "vh";

    sparkle.style.animationDuration =
        (6 + Math.random()*6) + "s";

    sparkle.style.animationDelay =
        Math.random()*2 + "s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },16000);

}

setInterval(createSparkle,250);

/* =====================================
   FLOWER ENGINE v1
===================================== */

const flowerContainer = document.getElementById("flowers");

const flowerSVG = `
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200">

<defs>

<radialGradient id="centerGradient">

<stop offset="0%" stop-color="#FFE98A"/>

<stop offset="100%" stop-color="#FFC400"/>

</radialGradient>

<filter id="shadow">

<feDropShadow
dx="0"
dy="4"
stdDeviation="5"
flood-opacity=".18"/>

</filter>

</defs>

<g filter="url(#shadow)">

<!-- PETALS -->

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"/>

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"
transform="rotate(30 100 100)"/>

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"
transform="rotate(60 100 100)"/>

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"
transform="rotate(90 100 100)"/>

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"
transform="rotate(120 100 100)"/>

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"
transform="rotate(150 100 100)"/>

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"
transform="rotate(180 100 100)"/>

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"
transform="rotate(210 100 100)"/>

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"
transform="rotate(240 100 100)"/>

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"
transform="rotate(270 100 100)"/>

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"
transform="rotate(300 100 100)"/>

<path
d="M100 25
C118 35 123 62 100 90
C77 62 82 35 100 25"
fill="#FFFFFF"
transform="rotate(330 100 100)"/>

<!-- CENTER -->

<circle
cx="100"
cy="100"
r="24"
fill="url(#centerGradient)"/>

</g>

</svg>
`;

function createFlower(){

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = flowerSVG;

    // -------------------------
    // Random Size
    // -------------------------

    const size = 40 + Math.random()*90;

    flower.style.width = size + "px";
    flower.style.height = size + "px";

    // -------------------------
    // Random Position
    // -------------------------

    flower.style.left = Math.random()*100 + "vw";
    flower.style.top = Math.random()*100 + "vh";

    // -------------------------
    // Random Opacity
    // -------------------------

    flower.style.opacity = .15 + Math.random()*0.45;

    // -------------------------
    // Wind
    // -------------------------

    // Horizontal wind
    flower.style.setProperty(
        "--xMove",
        (-300 + Math.random()*600) + "px"
    );

    // Rotation
    flower.style.setProperty(
        "--rotate",
        (180 + Math.random()*720) + "deg"
    );

    // Speed
    flower.style.animationDuration =
        (18 + Math.random()*15) + "s";

    // Random starting point
    flower.style.animationDelay =
        (-Math.random()*30) + "s";

    // -------------------------
    // Speed
    // -------------------------

    flower.style.animationDuration =
        (20 + Math.random()*20) + "s";

    // -------------------------
    // Delay
    // -------------------------

    flower.style.animationDelay =
        (-Math.random()*40) + "s";

    flowerContainer.appendChild(flower);
}
for(let i=0;i<25;i++){

    createFlower();

}