import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 500,
  duration: 10,
  // scrollTrigger est un object ce qui permet
  // d'ajouter des configurations
  scrollTrigger: {
    trigger: ".box",
    start: "20px 60%",
    markers: true,
  },
});