/* ==================================================
   REASONS PAGE
================================================== */

const heart = document.getElementById("heartButton");
const card = document.getElementById("reasonCard");

const reasons = [

    "You somehow make every day a little brighter.",

    "You're one of the kindest people I've ever met.",

    "You always know how to make me smile. ",

    "You care about people more than you realize, Eg. Meee",

    "Your happiness makes other people happy.",

    "You're beautiful inside and out.",

    "Your cutest obsession with Taco Bell. ",

    "You somehow make lip gloss look like a personality trait. 19 Traits of a Lip Gloss Addict",

    "You're genuinely fun to be around.",

    "You're stronger than you give yourself credit for.",

    "You deserve every good thing life brings you.",

    "Thank you for being you. ",

    "You make me feel like the luckiest person in the world.",

    "You make me feel understood.",

    "You bring out the best in me.",

    "The way you care for me.",

    "You never giving up on me.",

    "Your sanskar.",

    "The way you treat me.....think about it",

    "You making me better person.",

    "Your always there when i need you",

    "You understand me better than anyone else.",

    "Your honesty.",

    "Your always have the right words to say.",

    "Your way of comforting me.",

    "Your my comfort zone.",

    "Your my one and only true bestesssttttttt friendddddd"


];

let remainingReasons = [...reasons];

function createFloatingHeart(){

    const floatingHeart = document.createElement("div");

    floatingHeart.className = "floatingHeart";

    floatingHeart.textContent = "💖";

    floatingHeart.style.left =
        (window.innerWidth/2 + (Math.random()*120-60)) + "px";

    floatingHeart.style.top =
        (window.innerHeight/2 + 40) + "px";

    floatingHeart.style.setProperty(
        "--x",
        (Math.random()*120-60) + "px"
    );

    floatingHeart.style.setProperty(
        "--r",
        (Math.random()*60-30) + "deg"
    );

    document.body.appendChild(floatingHeart);

    setTimeout(()=>{

        floatingHeart.remove();

    },2800);

}

heart.addEventListener("click", () => {

    createFloatingHeart();

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {

        if (remainingReasons.length === 0) {

        card.textContent =
        "You've discovered every reason... but I'll always find more. 💙";

    } else {

        const randomIndex = Math.floor(Math.random() * remainingReasons.length);

        const randomReason = remainingReasons[randomIndex];

        card.textContent = randomReason;

        remainingReasons.splice(randomIndex, 1);

    }

    card.style.opacity = "1";
    card.style.transform = "translateY(0)";

    },250);

});