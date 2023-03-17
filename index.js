const images=[
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',   
]
let count=0;
setInterval(()=>{
    if (count===images.length) {
        count=0;
    }
    const imagesIndex=count;
    const carouselImage=document.getElementById('carousel-img');
    carouselImage.setAttribute('src',images[imagesIndex])   
    count++;
},2000)