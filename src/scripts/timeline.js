import { gsap } from 'gsap';

//timeline

const timeline = gsap.timeline({defaults: {duration: 2}});

timeline.to('.title', {x: 200})
  .to('.title', {y: 200})
  .to('.btn', {rotation: 360, duration: 1});
