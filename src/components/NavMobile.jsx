import { useEffect, useState } from "react"

export default function NavMobile(){
    const [showNav,setShowNav ] = useState(false)

    const handleShowNav = ()=>{
        setShowNav(!showNav)
    }

    useEffect(()=>{
        if(showNav){
            document.body.classList.add('no-scroll')
        }
        else{
            document.body.classList.remove('no-scroll')
        }
    },[showNav])
    return(
        <nav className="w-full h-12 sm:hidden fixed top-0 left-0 z-50"> 
        <div className="relative w-screen h-full">
        <div className="bg-primary text-secondary flex w-full h-full relative z-20 px-4">
        <div className="flex items-center w-full">
                <a className={`text-2xl  ${showNav && 'opacity-30'}`} href="/">Seaway</a>
            </div>
            <div className="flex items-center w-full justify-end h-full">
                <button className="uppercase text-xs" onClick={handleShowNav}>{showNav?'Cerrar':'Menú'}</button>
            </div>
            
        </div>
        <div className={`h-screen w-full bg-[#C2C6C9] pt-8 px-4 uppercase text-4xl font-light transition-all duration-1000 ease-in-out absolute left-0 z-10 ${showNav?'translate-y-0':'-translate-y-[120%]'}`}>
                    <ul className="flex flex-col gap-y-2">
                        <li>
                            <a href="#inicio">Inicio</a>
                        </li>
                        <li>
                            <a href="#yates">Yates</a>
                        </li>
                        <li>
                            <a href="#galeria">Galería</a>
                        </li>
                        <li>
                            <a href="#beneficios">Beneficios</a>
                        </li>
                        
                    </ul>
                </div>
        </div>

        
        </nav>
    )
}