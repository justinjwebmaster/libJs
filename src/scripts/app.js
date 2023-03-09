import { gsap } from 'gsap';

console.log(gsap.version);
// gsap.fromTo(
//   ".title--line",
//   {opacity:0, scale:.5, y:'-=400'},
//   {opacity:1, scale:1, y:0, ease: "back.out(1.7)", duration:1, stagger: .2}
// );

// gsap.from(
//   ".title--line",
//   {opacity:0, scale:.5, y:'-=400', onComplete: anim, stagger: .2}
// );

// function anim(){
//   gsap.to(
//     ".title--line",
//     {opacity:1, scale:1, y:0, ease: "back.out(1.7)", duration:1, onComplete: animBack}
//   )
// };

// function animBack(){
//   gsap.fromTo(
//     ".title",
//     {opacity:1, scale:1, y:0, display:block},
//     {opacity:0, scale:0, y:'+=100vh', display:none, ease: "back.out(1.7)", duration:1}
//   )
// };

// gsap.to(
//   ".title--line",
//   {opacity:1, scale:1, y:0, ease: "back.out(1.7)", duration:2, stagger: .6}
// );

//Correction
gsap.from(
  ".title--line",
  {
    opacity:0,
    duration:1,
    y:'-=20',
    scale:.5,
    stagger:.5,
    ease: "back.out(1.7)",
    onComplete: function(){
      gsap.to(
        '.title',
        {
          duration:1,
          opacity:0,
          scale:0,
          delay:2
        }
      )
    }
  }
);
