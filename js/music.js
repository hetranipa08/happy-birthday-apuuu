const music = document.getElementById("bgMusic");


// make the music quieter

music.volume = 0.30;


// get saved time

const savedTime = localStorage.getItem("musicTime");


// if we have saved time, continue from there

if(savedTime){

    music.currentTime = Number(savedTime);

}


// play the music automatically

music.play().catch(() => {

    console.log("Music couldn't autoplay.");

});


// save the current song time every second

setInterval(()=>{

    localStorage.setItem(

        "musicTime",

        music.currentTime

    );

},1000);
