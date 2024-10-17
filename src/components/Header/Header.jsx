import "./header.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect } from "react";
import Nav from "../Nav";
import NavMobile from "../NavMobile";

gsap.registerPlugin(ScrollTrigger);



export default function Header() {
    useEffect(() => {
        let mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    let tlDesktop = gsap.timeline();
    let video = document.querySelector(".video");

    tlDesktop.from('.video__section', {
      top: "95%"
    })
    .to(".video__section", {
      top: 0,
      left: 0,
    })
    .to(".video", {
      duration: 1,
      clipPath: 'inset(0px calc(0px) 0px round 0px)',
    }, 0)
    .to(".overlay", {
      duration: 1,
      clipPath: 'inset(0px calc(0px) 0px round 0px)',
    }, "-=1")
    .to(".nav", {
      translateY: '-100px',
    }, 0)
    .to(".video__content-container", {
      display: 'flex',
    }, "-=1")
    .to(".video__content-text", {
      duration: 0.5,
      opacity: 1,
    }, "+=0.5")
    .to(".button-video", {
      duration: 0.5,
      opacity: 1
    }, "-=0.5")
    .to(".header", {
      onUpdate: () => {
        if (video) {
          video.play();
        }
      }
    }, "-=1.75");

    ScrollTrigger.create({
      trigger: ".header",
      animation: tlDesktop,
      start: "bottom bottom",
      end: "+=800",
      pin: true,
      scrub: 2,
    });
  });

  mm.add("(max-width:767px)",()=>{
    let video = document.querySelector(".video");
    




    ScrollTrigger.create({
      trigger: ".video__section",
      start: "center bottom",
      onEnter: ()=>{
        if(video){
          video.play()
        }
      }
    })
  })
}, []);
      
    
  return (
    <>
      <header className="header" id="inicio">
        <div className="sm:absolute w-full h-screen sm:top-0 sm:left-0">
        <Nav/>
        <NavMobile/>
        <section className="hero flex justify-center items-center w-full pt-20 sm:pt-0 h-full">
          <div className="hero__text-container mx-auto w-full h-full md:h-auto flex flex-col items-center justify-center">
            <div className="relative flex flex-col  gap-y-2 md:gap-y-0 h-fit items-center justify-center md:block">
            <h1 className="hero__title">seaway</h1>
            <h2 className="hero__subtitle text-center md:absolute">
              Obtén la mejor calidad y las mejores experiencias
              <br /> con nuestros yates de lujo
            </h2>
            </div>
            
            
            <a target="_BLANK" href="https://www.linkedin.com/in/maximiliano-cejas/" className="button__black header__button pb-8 md:mb-0">
              contactarse ahora
              <img
                className="button__black-icon"
                src="/icons/arrow-black.svg"
                alt="Arrow black"
              />
            </a>
          </div>
        </section>

        </div>

    {/* Scroll video */}
    <section className="video__section  h-screen w-full sm:h-full sm:w-full sm:absolute">
      <div className="h-full w-full relative flex flex-col justify-center items-center">
      <div className="overlay absolute w-full h-full top-0 left-0"></div>
        <video className="video h-full w-full object-cover absolute top-0 left-0" muted loop>
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <div className="video__content-container sm:hidden justify-center items-center flex-col z-10">
          <h2 className="video__content-text">
            ¡No pierdas mas tiempo!
            <br /> Navega de forma rápida y segura
          </h2>
          <a target="_BLANK" href="https://www.linkedin.com/in/maximiliano-cejas/" className="button__white button-video overflow-hidden">
            reservar ahora
            <img
              className="button__white-icon"
              src="/icons/arrow-white.svg"
              alt="Arrow white"
            />
          </a>
        </div>
      </div>

      </section>



      </header>

    </>
  );
}
