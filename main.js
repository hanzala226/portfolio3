// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

// Update ScrollTrigger's scrollerProxy
gsap.registerPlugin(ScrollTrigger);

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// ScrollTrigger animations
gsap.to(".page2 h3", {
    transform: "translateX(-50%)",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "#main",
        start: "top 0%",
        end: "top -150%",
        pin: true,
      
        scrub: true
    }
});

// Refresh ScrollTrigger and Locomotive Scroll
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();











// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

const main=document.querySelector("#main")
const cursor=document.querySelector("#cursor")
const n2=document.querySelector(".n2")
const n1=document.querySelector(".n1")
const nav=document.querySelector("nav")
const navcon=document.querySelector(".nav-content")
const cross=document.querySelector("#cross")
const navi=document.querySelector("#nav-i")
const na1=document.querySelector(".anchor1")
const na2=document.querySelector(".anchor2")
const na3=document.querySelector(".anchor3")
const na4=document.querySelector(".anchor4")
const na5=document.querySelector(".anchor5")
const laptopimg=document.querySelector(".lapimg")
const laptopimg2=document.querySelector(".lapimg2")
const laptopimg3=document.querySelector(".lapimg3")
var tl = gsap.timeline()

tl.to(navcon,{
    right:0,
    duration:0.7,
})
tl.from(".nav-content a",{
x:150,
    duration:0.7,
    stagger:0.28,
    opacity:0,
})
tl.from(cross,{
    opacity:0,
    duration:.3
})
tl.pause()
navi.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})
na1.addEventListener("click",function(){
tl.reverse()
})
na2.addEventListener("click",function(){
tl.reverse()
})
na3.addEventListener("click",function(){
tl.reverse()
})
na4.addEventListener("click",function(){
tl.reverse()
})
na5.addEventListener("click",function(){
tl.reverse()
})
main.addEventListener("mousemove",function(delt){
    console.log(delt)

    gsap.to(cursor,{
        
        y:delt.y,
        x:delt.x,
        rotate:delt.y,
        rotate:delt.x,

    })
})
n2.addEventListener("mouseenter",function(){
    n2.style.color="#111111"
    document.body.style.cursor="none"
    gsap.to(cursor,{
        scale:4,
    })
})
n2.addEventListener("mouseleave",function(){
    document.body.style.cursor="auto"
n2.style.color="transparent"
    gsap.to(cursor,{
        scale:.4,
    })
})
n1.addEventListener("mouseenter",function(){
    document.body.style.cursor="none"
     n1.style.color="#111111"

    gsap.to(cursor,{
        scale:4,
    })
})
n1.addEventListener("mouseleave",function(){
    document.body.style.cursor="auto"
n1.style.color="transparent"
    gsap.to(cursor,{
        scale:.4,
    })
})
nav.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        opacity:0,
    })
})
nav.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        opacity:1,
    })
})

var t=gsap.timeline()
t.to(" .aboutme .aboutme-content .sentence" ,{
    backgroundSize: "100% 100%",
    opacity:1,
stagger:.8,
duration:1,

    scrollTrigger:{
        trigger:".aboutme",
        scroller:"#main",
        scrub:true,
        start:"-20% -10%",
        end:"70% 70%",
    
      
    }
})
var pro=gsap.timeline()
pro.to(".page3 h4",{
    // transform: "translateX(-50%)",
    transform:"translateX(-50%)",
    scrollTrigger:{
        trigger:".page3",
        scroller:"#main",
        start:"top 0%",
        end:"top -150%",
        scrub:true,
        pin:true
    }
})

var pr=gsap.timeline()
pr.to("#project1 #stich",{
    top:"-76%",
    scrollTrigger:{
        trigger:"#project1",
        scroller:"#main",
        start:"top 0%",
        end:"top -170%",
        scrub:true,
        pin:true
    }
}
)
pr.to("#project2 #ncba",{
    top:"-76%",
    scrollTrigger:{
        trigger:"#project2",
        scroller:"#main",
        start:"top 0%",
        end:"top -170%",
        scrub:true,
        pin:true
    }
}
)



pr.to("#project3 #modern",{
    top:"-76%",
    scrollTrigger:{
        trigger:"#project3",
        scroller:"#main",
        start:"top 0%",
        end:"top -170%",
        scrub:true,
        pin:true
    }
}
)
main.addEventListener("mousemove",function(pre){
  
    gsap.to(".info",{
        x:pre.x,
        y:pre.y,
    })
})
main.addEventListener("mousemove",function(pre){
  
    gsap.to(".info2",{
        x:pre.x,
        y:pre.y,
    })
})
main.addEventListener("mousemove",function(pre){
  
    gsap.to(".info3",{
        x:pre.x,
        y:pre.y,
    })
})
laptopimg.addEventListener("mouseenter",function(){
      document.body.style.cursor="none"
    gsap.to(".info",{
        scale:1,
        duration:.2,
       
    })
    gsap.to(cursor,{
        scale:0
    })
    console.log("enter")
})
laptopimg.addEventListener("mouseleave",function(){
      document.body.style.cursor="auto"
    gsap.to(".info",{
        scale:0,
        duration:.2,

    })
    gsap.to(cursor,{
        scale:.4
    })
    console.log("leave")
})
laptopimg2.addEventListener("mouseenter",function(){
      document.body.style.cursor="none"
    gsap.to(".info2",{
        scale:1,
        duration:.2,
       
    })
    gsap.to(cursor,{
        scale:0
    })
    console.log("enter")
})
laptopimg2.addEventListener("mouseleave",function(){
      document.body.style.cursor="auto"
    gsap.to(".info2",{
        scale:0,
        duration:.2,

    })
    gsap.to(cursor,{
        scale:.4
    })
    console.log("leave")
})
laptopimg3.addEventListener("mouseenter",function(){
      document.body.style.cursor="none"
    gsap.to(".info3",{
        scale:1,
        duration:.2,
       
    })
    gsap.to(cursor,{
        scale:0
    })
    console.log("enter")
})
laptopimg3.addEventListener("mouseleave",function(){
      document.body.style.cursor="auto"
    gsap.to(".info3",{
        scale:0,
        duration:.2,

    })
    gsap.to(cursor,{
        scale:.4
    })
    console.log("leave")
})