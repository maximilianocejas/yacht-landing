import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"


gsap.registerPlugin(ScrollTrigger)
export default function Benefits(){

    useEffect(()=>{
        let tl = gsap.timeline()
        tl.from('.scroll-1',{
            top: 0,
        })
        tl.from('.scroll-2',{
            top: '100%',
        })
        tl.from('.scroll-3',{
            top: '100%'
        })
        tl.to('.scroll-2',{
            top: 0,
            
        })
        tl.to('.scroll-3',{
            top: 0,
        })



        ScrollTrigger.create({
            animation: tl,
            trigger: '.scroll-container',
            start: "top top",
            end: "+=2800",
            scrub: 2,
            pin: true
        })

    },[])
    return(
        <section className="relative h-screen w-full scroll-container overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-screen z-10 scroll-1 flex justify-center items-center">
                
             <div>
                 
             <h3 className="text-8xl uppercase text-white font-normal">elegancia</h3>
                          <button className="button__white mx-auto mt-6 button-video overflow-hidden">
            reservar ahora
            <img
              className="button__white-icon"
              src="/icons/arrow-white.svg"
              alt="Arrow white"
            />
          </button>
             </div>
            </div>
            <div className="absolute left-0 w-full h-screen z-20 scroll-2 flex justify-center items-center">
                
        <div>
            
        <h3 className="text-8xl uppercase text-white font-normal">navega con estilo</h3>
                          <button className="button__white mx-auto mt-6 button-video overflow-hidden">
            reservar ahora
            <img
              className="button__white-icon"
              src="/icons/arrow-white.svg"
              alt="Arrow white"
            />
          </button>
        </div>
            </div>
            <div className="absolute left-0 w-full h-screen z-30 scroll-3 flex justify-center items-center">
            
            
               <div>
                   
               <h3 className="text-8xl uppercase text-white font-normal">lujo y confort</h3>
                          <button className="button__white button-video mx-auto mt-6 overflow-hidden">
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
    )
}