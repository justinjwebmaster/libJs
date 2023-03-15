import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 500,
  duration: 1,
  // scrollTrigger est un object ce qui permet
  // d'ajouter des configurations
  scrollTrigger: {
    trigger: ".box",
    start: "20px 80%",
    end: "+=300",
    scrub: 0.5,
    pin: true,
  },
});