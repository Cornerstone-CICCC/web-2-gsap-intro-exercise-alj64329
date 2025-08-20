// PUT YOUR CODE HERE
const homeTl = gsap.timeline()


homeTl.from(".red", {x:"-100vw", y: "-100vh", scale: 0, delay: 0.1})
      .from (".green",{x: "200vw", y: "-100vh", scale: 0})
      .from (".blue",{x: "200vw", y: "200vh", scale: 0})
      .from (".yellow",{x: "-100vw", y: "200vh", scale: 0})
    .to (".red",{x: "100vw", xPercent: -100,borderRadius:'50%',backgroundColor: 'green', duration: 2},"+=0.1")
    .to (".green",{y:"100vh",yPercent: -100,borderRadius:'50%',backgroundColor: 'blue', duration: 2},"<")
    .to (".blue",{x:'-100vw',xPercent: 100,borderRadius:'50%',backgroundColor: 'yellow', duration: 2},"<")
    .to(".yellow",{y:"-100vh",yPercent: 100,borderRadius:'50%',backgroundColor: 'red',duration: 2},"<")
    .to(".yellow",{x:"-100vw",duration: 3, ease:"power.out"},"+=0.1")
    .to(".red",{x:"200vw",duration: 3, ease:"power.out"},"<")
    .to(".green",{x:"200vw",duration: 3, ease:"power.out"},"<")
    .to(".blue",{x:"-200vw",duration: 3, ease:"power.out"},"<")