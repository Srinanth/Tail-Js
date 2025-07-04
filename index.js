import { injectCSS } from "./inject.js";

function animate(el, className, duration = 500) {
  injectCSS();
  el.style.animationDuration = `${duration}ms`;
  el.classList.add(className);
}

const animations = {
  fadeIn: "tw-fade-in",
  fadeOut: "tw-fade-out",
  slideUp: "tw-slide-up",
  slideDown: "tw-slide-down",
  slideLeft: "tw-slide-left",
  slideRight: "tw-slide-right",
  scaleUp: "tw-scale-up",
  scaleDown: "tw-scale-down",
  enlarge: "tw-enlarge",
  shrink: "tw-shrink",
  rotate: "tw-rotate",
  bounce: "tw-bounce",
  shake: "tw-shake",
  pulse: "tw-pulse",
  flash: "tw-flash",
  wobble: "tw-wobble",
  swing: "tw-swing",
  tada: "tw-tada",
  jello: "tw-jello",
  Glow: "tw-glow",
  Shadow: "tw-shadow",
  zoomIn: "tw-zoom-in",
  zoomOut: "tw-zoom-out",
  heartbeat: "tw-heartbeat",
  blink: "tw-blink",
  wave: "tw-wave",
  sway: "tw-sway",
  floating: "tw-floating",
  glitch: "tw-glitch",
  neonGlow: "tw-neon-glow",
  shimmer: "tw-shimmer",
  typingEffect: "tw-typing-effect",
  revealUp: "tw-reveal-up",
  revealDown: "tw-reveal-down",
  collapse: "tw-collapse",
  expand: "tw-expand",
  fadeSlide: "tw-fade-slide-left",
  bounceIn: "tw-bounce-in",
  bounceOut: "tw-bounce-out",
  scaleReveal: "tw-scale-reveal",
  rotateYFlipCard: "tw-rotate-y-flip-card",
  flipInX: "tw-flip-in-x",
  flipOutX: "tw-flip-out-x",
  flipInY: "tw-flip-in-y",
  flipOutY: "tw-flip-out-y",
  rotateIn: "tw-rotate-in",
  rotateOut: "tw-rotate-out",
  rollIn: "tw-roll-in",
  rollOut: "tw-roll-out",
  lightSpeedIn: "tw-light-speed-in",
  lightSpeedOut: "tw-light-speed-out",
  jackInTheBox: "tw-jack-in-the-box",
  GlowPulse: "tw-glow-pulse",
  Sparkle: "tw-sparkle",
  Teleport: "tw-teleport",
  Curtain: "tw-curtain",
  Mirror: "tw-mirror",
  Aura: "tw-aura",
  Dust: "tw-dust",
  ZigZag: "tw-zigzag",
  Orbit: "tw-orbit",
  PopUpSpin: "tw-popup-spin",
  Snap:"tw-thanos-snap",
  UpsideDown: "tw-upside-down",
  fadeInUp: "tw-fade-in-up",
  hinge: "tw-hinge",
  stretchIn: "tw-stretch-in",
  fadeOutUp: "tw-fade-out-up",
  puffOut: "tw-puff-out",
  vanishOut: "tw-vanish-out",
  rubberBand: "tw-rubber-band",
  wiggle: "tw-wiggle",
  spin: "tw-spin",
  frostedGlass: "tw-frosted-glass",
  ripple: "tw-ripple",
  hologram: "tw-hologram",
  skew: "tw-skew",
  warp: "tw-warp",
  loadComplete: "tw-load-complete",
  scrollReveal: "tw-scroll-reveal",
  typewriter: "tw-typewriter",
  letterSpace:"tw-letter-space",
  liquidDrip:"tw-liquid-drip",
  MagneticPull:"tw-magnetic",
  PaperFold:"tw-paper-fold",
  PixelGlitch:"tw-glitch-pixel",
  Smoke:"tw-smoke-out",
  Flare:"tw-lens-flare",
  InkSpread:"tw-ink-reveal",


  HoverPop: "tw-hoverpop",
  HoverShrink: "tw-hovershrink",
  HoverEnlarge: "tw-hoverenlarge",
  HoverShake: "tw-hovershake",
  HoverFade: "tw-hoverfade",
  HoverGlow: "tw-hover-glow",
  HoverShadow: "tw-hover-shadow",
  hoverBlur: "tw-hover-blur",
  hoverRotate: "tw-hover-rotate",
  hoverUnderlineLeft: "tw-hover-underline-left",
  hoverUnderlineRight: "tw-hover-underline-right",
  hoverBorderGlow: "tw-hover-border-glow",
  hoverScaleBounce: "tw-hover-scale-bounce",
  hoverTilt: "tw-hover-tilt",
  HoverUpsideDown: "tw-hover-upsidedown",
  HoverTeleport: "tw-hover-teleport",
  hoverSkew: "tw-hover-skew",
  hoverJitter: "tw-hover-jitter",


  ColorCycle: "tw-color-cycle",
  BlackRed: "tw-black-red",
  BlackBlue: "tw-black-blue",
  BlackGreen: "tw-black-green",
  BlackPurple: "tw-black-purple",
  BlackYellow: "tw-black-yellow",
  BlackWhite: "tw-black-white",
  BlackOrange: "tw-black-orange",
  BlackPink: "tw-black-pink",
  BlackGray: "tw-black-gray",
  BlackCyan: "tw-black-cyan",
  BlackBrown: "tw-black-brown",
  BlackGold: "tw-black-gold",
  BlackSilver: "tw-black-silver",
  BlackMagenta: "tw-black-magenta",
  BlueYellow: "tw-blue-yellow",
  DarkGreenLime: "tw-dark-green-lime",
  PurpleOrange: "tw-purple-orange",
  IndigoPink: "tw-indigo-pink",
  GrayCyan: "tw-gray-cyan",
  DarkBlueWhite: "tw-dark-blue-white",
  TealSalmon: "tw-teal-salmon",
  OliveViolet: "tw-olive-violet",
  BrownSkyBlue: "tw-brown-sky-blue",
  MidnightGreenMint: "tw-midnight-green-mint",
  CrimsonLemon: "tw-crimson-lemon",
  SlatePeach: "tw-slate-peach",
  CharcoalLavender: "tw-charcoal-lavender",
  MaroonMint: "tw-maroon-mint",
  DarkCyanGold: "tw-dark-cyan-gold",
  DeepPurpleIvory: "tw-deep-purple-ivory",
  ForestPink: "tw-forest-pink",
  SteelRose: "tw-steel-rose",
  EggplantSun: "tw-eggplant-sun",
  rainbowFlow: "tw-rainbow-flow",
  heatmap: "tw-heatmap",
  textGradientShift: "tw-text-gradient-shift",
  ColorPulse:"tw-color-pulse",
  Neonflicker:"tw-neon-flicker",
  //new animations for testing 
  
  
  PulseMorph:"tw-pulse-morph",
  GradientWave:"tw-gradient-wave",
  ColorExpand:"tw-color-expand",
  RotateHue:"tw-hue-scale",
  ColorBounceBalls:"tw-bounce-color",
  ColorPop:"tw-color-pop",
  LiquidMetal:"tw-liquid-metal",
};

const exports = {};

for (const [name, className] of Object.entries(animations)) {
  exports[name] = (el, duration = 500) => animate(el, className, duration);
}

export const {
  fadeIn, fadeOut, slideUp, slideDown, slideLeft, slideRight,
  scaleUp, scaleDown, enlarge, shrink, rotate, bounce,
  shake, pulse, flash, wobble, swing, tada,
  jello, zoomIn, zoomOut, flipInX, flipOutX, flipInY,
  flipOutY, rotateIn, rotateOut, rollIn, rollOut, lightSpeedIn,
  lightSpeedOut, jackInTheBox, heartbeat, blink, wave, sway,
  floating, glitch, neonGlow, shimmer, typingEffect, revealUp,
  revealDown, collapse, expand, fadeSlide, bounceIn, bounceOut,
  scaleReveal, rotateYFlipCard, Glow, Shadow, GlowPulse, Sparkle,
  Teleport,Curtain,Mirror,Aura,Dust,ZigZag,Orbit,PopUpSpin,Snap,
  UpsideDown,fadeInUp,hinge,stretchIn,fadeOutUp,puffOut,vanishOut,
  rubberBand,wiggle,spin,frostedGlass,ripple,hologram,skew,warp,
  loadComplete,scrollReveal,typewriter, letterSpace,liquidDrip,
  MagneticPull,PaperFold,PixelGlitch,Smoke,Flare,InkSpread,PulseMorph,

  HoverPop, HoverShrink, HoverEnlarge, HoverShake, HoverFade, HoverGlow,
  HoverShadow, hoverBlur, hoverRotate, hoverUnderlineLeft, hoverUnderlineRight, hoverBorderGlow,
  hoverScaleBounce, hoverTilt,HoverUpsideDown,HoverTeleport,hoverJitter,hoverSkew,
  

  ColorCycle, BlackRed,
  BlackBlue,BlackGreen,BlackPurple,BlackYellow, BlackWhite,BlackOrange,BlackPink,
  BlackGray,BlackCyan,BlackBrown,BlackGold,BlackSilver,BlackMagenta,
  BlueYellow,DarkGreenLime,PurpleOrange,IndigoPink,GrayCyan,DarkBlueWhite,
  TealSalmon,OliveViolet,BrownSkyBlue,MidnightGreenMint,CrimsonLemon,
  SlatePeach,CharcoalLavender,MaroonMint,DarkCyanGold,DeepPurpleIvory,
  ForestPink,SteelRose,EggplantSun,rainbowFlow,heatmap, textGradientShift,
  ColorPulse,Neonflicker,GradientWave,ColorExpand,RotateHue,ColorBounceBalls,
  ColorPop,LiquidMetal,

  //for testing 
  
  
  
  

} = exports;

