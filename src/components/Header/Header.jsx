import "./header.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);



export default function Header() {
    useEffect(() => {
        let tl = gsap.timeline();
        let video = document.querySelector(".video");

      tl.from('.video__section',{
        top: "95%"
      })
        tl.to(".video__section",{
          top: 0,
          left: 0,

        })
        tl.to(".video",{
          duration: 1,
          clipPath: 'inset(0px calc(0px) 0px round 0px)',

        },0)
        tl.to(".overlay",{
          duration: 1,
          clipPath: 'inset(0px calc(0px) 0px round 0px)',
        },"-=1")
        tl.to(".nav",{
          translateY: '-100px',
        },0)
        tl.to(".video__content-container",{
          display: 'flex',
        },"-=1")
        tl.to(".video__content-text",{
          duration: 0.5,
          opacity: 1,

        },"+=0.5")
        tl.to(".button-video",{
          duration: 0.5,
          opacity: 1
        },"-=0.5")

        tl.to(".header",{
          onUpdate: () => {
            if (video) {
              video.play();
            }
          }
        },"-=1.75")
        ScrollTrigger.create({
          trigger: ".header",
          animation: tl,
          start: "bottom bottom",
          end: "+=900",
          pin: true,
          scrub: 2,
        });
      }, []);
  return (
    <>
      <header className="header">
        <div className="absolute w-full h-screen top-0 left-0">
        <nav className="nav">
          <div className="nav__logo-container"></div>
          <div className="nav__list-container">
            <ul className="nav__list">
              <li className="nav__list-item">Inicio</li>
              <li className="nav__list-item">Destinos</li>
              <li className="nav__list-item">Servicios</li>
              <li className="nav__list-item">Galería</li>
            </ul>
          </div>
          <div className="nav__button-container">
            <button className="button__black">
              contactarse
              <img
                className="button__black-icon"
                src="./icons/arrow-black.svg"
                alt="Arrow black"
              />
            </button>
          </div>
        </nav>
        <section className="hero flex justify-center items-center w-full ">
          <div className="hero__text-container mx-auto w-full flex justify-center flex-col items-center">
            <div className="relative">
            <h1 className="hero__title">seaway</h1>
            <h2 className="hero__subtitle text-center absolute ">
              Obtén la mejor calidad y las mejores experiencias
              <br /> con nuestros yates de lujo
            </h2>
            </div>
            
            
            <button className="button__black header__button">
              contactarse ahora
              <img
                className="button__black-icon"
                src="/icons/arrow-black.svg"
                alt="Arrow black"
              />
            </button>
          </div>
        </section>

        </div>

    {/* Scroll video */}
    <section className="video__section h-full w-full absolute">
      <div className="h-full w-full relative flex flex-col justify-center items-center">
      <div className="overlay absolute w-full h-full top-0 left-0"></div>
        <video className="video h-full w-full object-cover absolute top-0 left-0" muted loop>
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <div className="video__content-container hidden justify-center items-center flex-col z-10">
          <h2 className="video__content-text">
            ¡No pierdas mas tiempo!
            <br /> Navega de forma rápida y segura
          </h2>
          <button className="button__white button-video overflow-hidden">
            reservar ahora
            <img
              className="button__white-icon"
              src="/icons/arrow-white.svg"
              alt="Arrow white"
            />
          </button>
        </div>
      </div>

      </section>



      </header>

    </>
  );
}
