import { gsap } from 'gsap';

console.log(gsap.version);
gsap.fromTo(
  ".title--line",
  {opacity:0, scale:.5, y:'-=400'},
  {opacity:1, scale:1, y:0, ease: "back.out(1.7)", duration:1, stagger: .2}
);
// gsap.to(
//   ".title--line",
//   {opacity:1, scale:1, y:0, ease: "back.out(1.7)", duration:2, stagger: .6}
// );
