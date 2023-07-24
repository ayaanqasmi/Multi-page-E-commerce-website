const bar=document.querySelector(".bar");
const close=document.querySelector(".close");
const nav=document.querySelector(".nav__links");
bar.addEventListener('click',()=>{
    nav.classList.add('active');
    close.style.display="block";
    document.querySelector(".fa-cart-shopping").style.display="none";
})
close.addEventListener('click',()=>{
    nav.classList.remove('active');
    close.style.display="none";
    document.querySelector(".fa-cart-shopping").style.display="block";
})

/***Cycling through images in product.html ****/
let mainImg=document.querySelector(".main-img");
let smallImg=document.querySelectorAll(".small-img");

for(let i=0;i<4;i++){
    smallImg[i].addEventListener('click',()=>{
        mainImg.src=smallImg[i].src;
    })
}