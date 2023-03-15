import { gsap } from 'gsap';

const tl = gsap.timeline();

tl.to('.title', { opacity: 1, duration: 2 })
  .to('.title', { opacity: 0, duration: 2 })
  .set('.logo', { opacity: 1, scale: 3 }, "+=1")
  .to('.logo', { scale: 0, duration: 8 })
  .to('.logo', { opacity: 0, duration: 4 }, "-=4")
  .from('.def', { top: "100vh", duration: 8 }, "<");

