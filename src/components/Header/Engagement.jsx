import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"


gsap.registerPlugin(ScrollTrigger)
export default function Engagement(){
    useEffect(()=>{
        let tl = gsap.timeline()

        tl.to('.words-1',{
            top: '10px',
            duration: 0.85,
            ease: 'power1.inOut'
            
        })
        tl.to('.words-2',{
            top: '10px',
            duration: 0.85,
            ease: 'power1.inOut',
            animationDelay: '300ms'
        },0)
        tl.to('.words-3',{
            top: '10px',
            duration: 0.85,
            ease: 'power1.inOut',
            animationDelay: '300ms'
            
        },0)


        ScrollTrigger.create({
            animation: tl,
            trigger: '.words-section',
            start: 'center bottom',
            end: 'bottom bottom',
            markers: true
        })
    },[])

    return(
        <section className="h-screen w-full relative words-section">
 
            <div style={{fontSize: '3rem'}} className="absolute left-36 top-20 pt-4 z-10 text-secondary font-[350] tracking-tighter leading-[0.2]">
           
            <div className="h-[37px] w-[650px] overflow-hidden relative">
            <span className="words-animate words-1 absolute top-[160%] left-0">Navega por las mejores aguas</span>
            </div>
            <br/>
            
            <div className="h-[37px] w-[650px] overflow-hidden relative">
            <span className="words-animate words-2 absolute top-[160%] left-0">del mundo y vive las mejores</span>
            </div>
            <br/>
           
            <div className="h-[37px] w-[650px] overflow-hidden relative">
            <span className="words-animate words-3 absolute top-[160%] left-0">experiencias de tu vida.</span>
            </div>

            </div>
            <img className="w-2/4 object-cover absolute right-20 top-1/4" src="./images/info-img.svg" alt="" />
           
            
        </section>
    )
}