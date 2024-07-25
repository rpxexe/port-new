function revealinit() {
    let reveal = document.querySelectorAll(".reveal");
    reveal.forEach((elem) => {
        let parent = document.createElement("span");
        let child = document.createElement("span");
        parent.classList.add("parent");
        child.classList.add("child");
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
        elem.innerHTML = "";
        elem.appendChild(parent);
    });
}
function settingValues(){
    gsap.set("nav a",{
        y:"-100%",
        opacity:0
    });
    gsap.set("#row #heading h1 span .child",{
        y:"100%"
    });
    gsap.set("#row #side .reveal .parent .child",{
        y:"100%"    
    })
    gsap.set("#row #side2 .reveal .parent .child",{
        y:"100%"    
    })
    gsap.set("#svg_sec>svg>g>path",{
        y:"100%",
        opacity:0
    })
   
}
// document.querySelectorAll('#svg_sec>svg>g').forEach((e)=>{
//     let char=e.childNodes[1];
//     console.log(e.childNodes[1].style)
//     char.style.strokeDasharray=char.getTotalLength() +"px";
//     char.style.strokeDashoffset=char.getTotalLength() +"px";
//     console.log(char.style.strokeDashoffset);
//     console.log(char.style.strokeDashArray)
//     console.log(e.childNodes[1].style)
// })
function animation_loader() {
    let tl = gsap.timeline();
    tl
        .from("#loader .child span", {
            x: 300,
            stagger: 0.1,
            duration: 1,
            ease: "bounce.easeInOut"
        })
        .to("#loader .parent .child", {
            y: "-100%",
            duration: 1,
            ease: "Circ.easeInOut"
        })
        .to("#loader", {
            height: "0",
            display:"none",
            duration: 0.5,
            ease: "Expo.easeInOut"
        })
        .to("#orange", {
            height: "100vh",
            top:0,
            delay:-1,
            duration: 0.5,
            ease: "Expo.easeInOut"
        })
        .to("#orange", {
            height: "0px",
            top:0,
            duration: 0.5,
            ease: "Expo.easeInout"  
        })
        .to("#hero", {
            height: "6580px",
            delay:-0.8,
            top:0,
            duration: 0.5,
            ease: "Expo.easeInOut",
            // onComplete:()=>{
            //     locomotion();
            //     homepageAnimate();
            // }
        })
        .to("#hero-child", {
            height: "6580px",
            delay:-0.8,
            top:0,
            duration: 0.5,
            ease: "Expo.easeInOut",
            onComplete:()=>{
                locomotion();
                homepageAnimate();
            }
        })
        
}
function animatesvg(){
    anime({
    targets: '#svg_sec>svg>g>path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
}
function homepageAnimate(){
    let tl=gsap.timeline();
    tl
    .to("nav a",{
        y:0,
        opacity:1,
        duration:1,
        stagger:.2,
        ease:Expo.easeInout
    })
    .to("#row #heading h1 span .child",{
        y:0,
        duration:1,
        stagger:0.5,
        ease:Expo.easeInout
    })
    .to("#svg_sec>svg>g>path",{
        y:0,
        duration:1,
        opacity:1,
        ease:Expo.easeInout,
        onComplete:()=>{
            animatesvg();
        }
    })
    .to("#row #side .reveal .parent .child,#row #side2 .reveal .parent .child",{
        y:0,
        duration:1,
        ease:Expo.easeInout,
        
    })
}
function animatePath(){

let con=document.querySelector('#line svg')
con.addEventListener("mousemove",(dets)=>{
    console.log(dets)
    gsap.to("#line svg path",{
        attr:{
            d:`M 0 250 Q ${dets.x} ${dets.y} 1280 250`,
        },
        duration:"0.6",
          
    })
})
con.addEventListener("mouseleave",()=>{
    gsap.to("#line svg path",{
        attr:{
            d:"M 0 250 Q 250 250 1280 250",
        },
        duration:"1.2",
        ease: "elastic.out(1,0.2)",
        
    })
})
}
function locomotion(){
    // gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      lerp:0.03,
    });
    new ResizeObserver(() => scroll.update()).observe(document.querySelector("#main"))

    // locoScroll.on("scroll", ScrollTrigger.update);
    // ScrollTrigger.scrollerProxy("#main", {
    //   scrollTop(value) {
    //     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    //   }, 
    //   getBoundingClientRect() {
    //     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    //   },
    //   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    // });
    // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    // ScrollTrigger.refresh();
}
function sheryEffects(){
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    Shery.imageEffect(".imgcon", {
        style: 6,
        // debug: true,
        config:{"noiseDetail":{"value":5.34,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":1.698461953588775},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0.04,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.03},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":35}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":15.27,"range":[0,100]}},
        gooey: true,
      });
    Shery.makeMagnet(".magnet", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}
let button=document.querySelector("#resume-sec button");
let back=document.querySelector("#work-feed");
let video=document.querySelector("#resume-sec video");
button.addEventListener("mouseover",()=>{
    back.style.backgroundColor="#FFE5E7";
    video.style.opacity="1";
})
button.addEventListener("mouseout",()=>{
    back.style.backgroundColor="#F2F2F2";
    video.style.opacity="0";
})

revealinit();
settingValues();
animation_loader();
animatePath();
sheryEffects(); 





