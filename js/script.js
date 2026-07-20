/*==================================================
                LIGHTBOX LENS STUDIO
==================================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeLightbox = document.querySelector(".close-lightbox");

const prevImage = document.querySelector(".prev-image");

const nextImage = document.querySelector(".next-image");

const currentImage = document.getElementById("current-image");

const totalImages = document.getElementById("total-images");

let currentIndex = 0;

totalImages.textContent = galleryImages.length;


/*================ ABRIR ================*/

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentIndex=index;

        showImage();

        lightbox.classList.add("active");

        document.body.style.overflow="hidden";

    });

});


/*================ MOSTRAR ================*/

function showImage(){

    lightboxImage.src=galleryImages[currentIndex].src;

    lightboxImage.alt=galleryImages[currentIndex].alt;

    currentImage.textContent=currentIndex+1;

}


/*================ SIGUIENTE ================*/

nextImage.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=galleryImages.length){

        currentIndex=0;

    }

    showImage();

});


/*================ ANTERIOR ================*/

prevImage.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=galleryImages.length-1;

    }

    showImage();

});


/*================ CERRAR ================*/

function closeGallery(){

    lightbox.classList.remove("active");

    document.body.style.overflow="auto";

}

closeLightbox.addEventListener("click",closeGallery);


/*================ CLICK FUERA ================*/

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeGallery();

    }

});


/*================ TECLADO ================*/

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        closeGallery();

    }

    if(e.key==="ArrowRight"){

        nextImage.click();

    }

    if(e.key==="ArrowLeft"){

        prevImage.click();

    }

});


/*================ SWIPE CELULAR ================*/

let startX=0;

lightbox.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    let distance=endX-startX;

    if(distance>60){

        prevImage.click();

    }

    if(distance<-60){

        nextImage.click();

    }

});