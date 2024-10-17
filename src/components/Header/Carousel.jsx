import { useEffect } from "react";



export default function Carousel() {
   
    useEffect(()=>{
        const carouselInner = document.querySelector('.carousel-inner')
        const totalItems = document.getElementsByClassName('carousel-item').length

        let indexCurrent = 0

        const updateCarousel = ()=>{
            const offset = -indexCurrent * 100;
            carouselInner.style.transform = `translateX(${offset}%)`;
        }
        const showNext = ()=>{
            indexCurrent = (indexCurrent + 1) % totalItems
            updateCarousel()
        }
        const showPrev = ()=>{
            indexCurrent = (indexCurrent - 1 + totalItems) % totalItems
            console.log('anterior')
            updateCarousel()
        }
        
        document.getElementById('next').addEventListener('click',showNext)
        document.getElementById('before').addEventListener('click',showPrev)
        
    },[])
    return (
        <section className="h-screen bg-primary w-full mt-96" id="galeria">
            <article className="relative h-full flex items-center w-full bg-primary overflow-hidden">

                <div className=" w-full h-full" >
                    <div className=" flex carousel-inner duration-1000 ease-in-out w-full h-full">
                   <div className="flex-none carousel-item w-full h-full relative">
                        <img className="w-full h-full object-cover" src="./images/carousel/1.avif" alt="Servicio 1" />
                    </div>
                    <div className="flex-none carousel-item w-full h-full relative">
                        <img className="w-full h-full object-cover" src="./images/carousel/2.avif" alt="Servicio 2" />
                    </div>
                    <div className="flex-none carousel-item w-full h-full relative">
                        <img className="w-full h-full object-cover" src="./images/carousel/3.avif" alt="Servicio 3" />
                    </div>
                   </div>
                   </div>
                <div aria-label="Anterior imagen" id="before" className="absolute size-[100px] cursor-pointer flex justify-center items-center rounded-full bg-secondary bg-blur left-10 opacity-70 hover:opacity-100 next-button">
                    <img className="rotate-180" src="./icons/arrow-white-lg.svg" alt="" />
                </div>
                <div aria-label="Siguiente imagen" id="next" className="absolute size-[100px] cursor-pointer flex justify-center items-center rounded-full bg-secondary bg-blur top-[calc(50%-50px)] opacity-70 hover:opacity-100 right-10 before-button">
                    <img src="./icons/arrow-white-lg.svg" alt="" />
                </div>
            </article>
        </section>
    );
}