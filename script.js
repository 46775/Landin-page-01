var tl = gsap.timeline({
    repeat:-1
});


tl.to(".imgContainer", {
    width: "100%",
    ease: Expo.easeInOut,
    stagger:2
}, 'a') 
.to(".text h1", {
    top: "0",
    ease: Expo.easeInOut,
    stagger:2
},'a') 
.to(".text h1", {
    delay:2,
    top: "-100px",
    ease: Expo.easeInOut,
    stagger:2
},'a')
.to(".text p",{
    delay:2,
    top:"-100px",
    ease: Expo.easeInOut,
    stagger:2
},'a');