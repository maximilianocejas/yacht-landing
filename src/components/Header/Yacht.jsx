import { useState } from "react"
const images = {
    1: './images/65-sport.svg',
    2: './images/1000-skydeck.svg',
    3: './images/bnow-67m.svg',
    4: './images/seadeck-6.svg'
}
export default function Yacht(){
    const [img,setImg] = useState(images[1])

    const handleYacthSelect = (event)=>{
        
        const indexCurrent = Number(event.target.dataset.yacht)
        
        setImg(images[indexCurrent])
        
    }
    return(
        <section className="h-screen w-full bg-black">
            <nav className="h-20 w-full bg-red-500">
                <ul className="flex w-full h-full justify-center items-center gap-x-16">
                    <li className="bg-purple-400">
                        <button onClick={handleYacthSelect} data-yacht="1">Yacht 1</button>
                    </li>
                    <li className="bg-purple-500">
                        <button onClick={handleYacthSelect} data-yacht="2">Yacht 2</button>
                    </li>
                    <li className="bg-purple-600">
                        <button onClick={handleYacthSelect} data-yacht="3">Yacht 3</button>
                    </li>
                    <li className="bg-purple-700">
                        <button onClick={handleYacthSelect} data-yacht="4">Yacht 4</button>
                    </li>
                </ul>
            </nav>
            <div className="h-[calc(100%-80px)] w-full bg-purple-300 relative">
                <img src={img} alt="" />
            </div>
        </section>
    )
}