import { gsap } from 'gsap';

console.log(gsap.version);
gsap.to(
  ".rond",
  {duration: 2, backgroundColor: '#009999', scale:3}
);
gsap.to(
  ".carre",
  {duration: 1, backgroundColor: '#FF0', rotateY:-180}
);