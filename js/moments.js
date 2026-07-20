const photos = document.querySelectorAll(".photo img");

const popup = document.getElementById("imagePopup");

const popupImage = document.getElementById("popupImage");

const closePopup = document.getElementById("closePopup");


photos.forEach((photo)=>{

    photo.addEventListener("click",()=>{

        popup.style.display = "flex";

        popupImage.src = photo.src;

    });

});


closePopup.addEventListener("click",()=>{

    popup.style.display = "none";

});


popup.addEventListener("click",(e)=>{

    if(e.target === popup){

        popup.style.display = "none";

    }

});