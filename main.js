var t1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#s1",
        start: "0% 80%",
        end: "50% 50%",
        
        scrub:true,
    }
})

var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#s2",
        start: "0% 80%",
        end: "50% 50%",
        
        scrub:true,
    }
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#s3",
        start: "0% 65%",
        end: "50% 50%",
        
        scrub:true,
    }
})

t1.to(".hero-center-image",{
    top:"145%",
    left:"50%",
    width:"17vw",
    rotate:"0",
})

tl1.to(".hero-center-image",{
    top:"250%",
    left:"23%",
    width:"11vw",
    rotate:"0",
})

tl2.to(".hero-center-image",{
    top:"320%",
    left:"28%",
    width:"19vw",
    rotate:"-54deg",
})