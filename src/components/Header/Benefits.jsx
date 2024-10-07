import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"


gsap.registerPlugin(ScrollTrigger)
export default function Benefits(){

    useEffect(()=>{
        let tl = gsap.timeline()
        tl.from('.scroll-2',{
            top: '100%'
        })
        tl.from('.scroll-3',{
            top: '100%'
        })
        tl.to('.scroll-2',{
            top: 0,
            
        })
        tl.to('.line-1',{opacity: 0.2},0)
        tl.to('.line-2',{opacity: 1},0)
        tl.to('.scroll-3',{
            top: 0,
        })
        tl.to('.line-2',{opacity: 0.2},0.5)
        tl.to('.line-3',{opacity: 1},0.5)



        ScrollTrigger.create({
            animation: tl,
            trigger: '.scroll-container',
            start: "top top",
            end: "+=3000",
            scrub: 3,
            pin: true
        })

    },[])
    return(
        <section className="relative h-screen w-full scroll-container overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-screen z-10 scroll-1 flex justify-center items-center">
                
             <div>
                 
             <h3 className="text-8xl uppercase text-white">elegancia desde<br/>el primer vistazo</h3>
                          <button className="button__white mx-auto mt-6 button-video overflow-hidden">
            reservar
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
            
        <h3 className="text-8xl uppercase text-white">navega con estilo<br/>dia y noche</h3>
                          <button className="button__white mx-auto mt-6 button-video overflow-hidden">
            reservar
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
                   
               <h3 className="text-8xl uppercase text-white">lujo y confort<br/>en cada detalle</h3>
                          <button className="button__white button-video mx-auto mt-6 overflow-hidden">
            reservar
            <img
              className="button__white-icon"
              src="/icons/arrow-white.svg"
              alt="Arrow white"
            />
          </button>
               </div>
            </div>
            
            <div className="absolute flex flex-col w-2 gap-y-2 h-[174px] right-10 top-[calc(50%-87px)] z-50">
                <span className="w-[5px] h-[50px] bg-white line-1"></span>
                <span className="w-[5px] h-[50px] bg-white opacity-20 line-2"></span>
                <span className="w-[5px] h-[50px] bg-white opacity-20 line-3"></span>
            </div>
        </section>
    )
}