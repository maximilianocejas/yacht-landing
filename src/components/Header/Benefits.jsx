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
            <div className="absolute top-0 left-0 w-full h-screen z-10 scroll-1 ">
                
                <img className="w-full h-full object-cover" src="./images/scroll/scroll-1.png" alt="" />
            </div>
            <div className="absolute left-0 w-full h-screen z-20 scroll-2">
                
                <img className="w-full h-full object-cover" src="./images/scroll/scroll-2.png" alt="" />
            </div>
            <div className="absolute left-0 w-full h-screen z-30 scroll-3">
            
                <img className="w-full h-full object-cover" src="./images/scroll/scroll-3.png" alt="" />
            </div>
            <div className="bg-[rgba(0,0,0,.35)] w-full h-full top-0 left-0 z-40 absolute"></div>
            <div className="absolute flex flex-col w-2 gap-y-2 h-[174px] right-10 top-[calc(50%-87px)] z-50">
                <span className="w-[5px] h-[50px] bg-white line-1"></span>
                <span className="w-[5px] h-[50px] bg-white opacity-20 line-2"></span>
                <span className="w-[5px] h-[50px] bg-white opacity-20 line-3"></span>
            </div>
        </section>
    )
}