export default function Contact(){
    return(
        <section className="w-full h-screen flex items-center justify-center flex-col gap-y-4 uppercase">
            <p className="text-secondary text-2xl">¿ya estas listo?</p>
            <h3 className="text-secondary text-8xl text-center tracking-tighter">
                comienza a vivir una<br/>
                experiencia unica
                
            </h3>
            <button className="button__black">
             contactarse ahora
              <img
                className="button__black-icon"
                src="/icons/arrow-black.svg"
                alt="Arrow black"
              />
            </button>
        </section>
    )
}