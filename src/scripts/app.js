import { gsap } from 'gsap';

console.log(gsap.version);
gsap.fromTo(
  ".rond",
  {backgroundColor: '#000', scale:1},
  {duration: 4, backgroundColor: '#009999', scale:3}
);
gsap.fromTo(
  ".carre",
  {backgroundColor: '#FFF', rotateY:0},
  {duration: 2, backgroundColor: '#099', rotateY:-180}
);