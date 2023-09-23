import Portada from '../../Images/Portada.jpg'
import Sobre from '../../Images/SobreN.jpg'
function Body (){
    return (
        <section>
            <article>
                <h1 className='flex justify-center text-cyan-600 text-3xl'>Arte y Diseño CST</h1>
                <h1 className='flex justify-center text-cyan-900 text-2xl'>LE DA LA BIENVENIDA</h1>
                <div>
                    <br/>
                    <h1 className='flex justify-center py-5'>
                        DISEÑO E INSTALACION DE MUEBLES MODULARES
                    </h1>
                </div>
                <span className='flex justify-center text-justify'>
                Desde el año 2021, ARTE Y DISEÑO CST se ha dedicado a elaborar hermosas piezas de alta calidad. <br/>
                Para conocer mas sobre su trabajo, puede explorar la amplia variedad de portafolio de diseño de muebles.
                </span>
            </article>
            <hr/>
            <img className='py-10' src={Portada}></img>
            <hr/>
            <br/>
            <h1 className='flex justify-center text-2xl underline text-sky-600'>Servicios</h1>
            <div className='flex justify-center'>
                <ul className=' py-5  grid grid-cols-3 gap-4'>
                    <li>-Toma de medidas</li>
                    <li>-Diseños Personalizados</li>
                    <li>-Asesoria</li>
                    <li>-Fabricacion</li>
                    <li>-Instalacion</li>
                </ul>
            </div>
            <h1 className='flex justify-center py-6 text-2xl text-sky-600 underline'>Sobre Nosotros...</h1>
            <div className='flex justify-center py-5'>
                <img className=' w-72 h-72 rounded-full' src={Sobre}></img>
            </div>
            <div className='flex justify-center py-5'>
                <span className='flex  text-justify max-w-6xl px-40'>
                    ARTE Y DISEÑO CST disfruta de poner a prueba los límites de lo que los materiales pueden hacer,
                    y le fascina la manera en que se pueden crear determinados elementos de formas únicas.
                    Cree que el objetivo de cada proyecto es crear trabajos bien diseñados de arte que sean hermosos y funcionales.
                    Por sobre todas las cosas, su pasión por el diseño y la creación provienen del deseo de darle vida a ideas increíbles.
                    Explore su extenso Portafolio de diseño de muebles para comprender mejor cómo logra esto.
                </span>
            </div>
        </section>
        
        
        
    )
}

export default Body