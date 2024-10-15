import { useRef, useState } from "react"
const images = {
    1: './images/65-sport.svg',
    2: './images/1000-skydeck.svg',
    3: './images/bnow-67m.svg',
    4: './images/seadeck-6.svg'
}
export default function Yacht(){
    const [img,setImg] = useState(images[1])
    let indexCurrent = useRef(1)
    const handleYacthSelect = (event)=>{
        
        indexCurrent.current = Number(event.target.dataset.yacht)
        
        setImg(images[indexCurrent.current])
        
    }
    return(
        <section className="h-screen w-full bg-white">
            <h2 className="text-secondary font-normal text-xl sm:text-3xl pt-16 pb-8 text-center">Explora nuestros productos en tendencias</h2>
            <nav className="h-20 w-full ">
                <ul className="flex w-full h-full justify-center items-center gap-x-4 text-lg sm:gap-x-16 sm:text-2xl font-light z-10 relative">
                    <li className={indexCurrent.current === 1 ? 'border-b-[1px] border-black':null}>
                        <button onClick={handleYacthSelect} data-yacht="1">65 SPORT</button>
                    </li>
                    <li className={indexCurrent.current === 2 ? 'border-b-[1px] border-black':null}>
                        <button onClick={handleYacthSelect} data-yacht="2">1000 SKY DECK</button>
                    </li>
                    <li className={indexCurrent.current === 3 ? 'border-b-[1px] border-black':null}>
                        <button onClick={handleYacthSelect} data-yacht="3">B.NOW 67M</button>
                    </li>
                    <li className={indexCurrent.current === 4 ? 'border-b-[1px] border-black':null}>
                        <button onClick={handleYacthSelect} data-yacht="4">SEADECK 6</button>
                    </li>
                </ul>
            </nav>
            <div className="h-[calc(100%-80px)] w-full relative flex justify-center items-center ">
                <img className="z-10 aspect-auto" src={img} alt="" />
                <div className="yacht-radial"></div>
            </div>
            <div className="pl-[120px]">
            <button className="button__black">
             contactarse ahora
              <img
                className="button__black-icon"
                src="/icons/arrow-black.svg"
                alt="Arrow black"
              />
            </button>
            </div>
        </section>
    )
}