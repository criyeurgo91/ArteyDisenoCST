import Portada from '../../Images/Portada.jpg'
function Body (){
    return (
        <section>
            <article>
                <h1 className='flex justify-center text-cyan-600 text-3xl'>Arte y Diseño CST</h1>
                <h1 className='flex justify-center text-cyan-900 text-2xl'>LE DA LA BIENVENIDA</h1>
                <div>
                    <br/>
                    <h1 className='flex justify-center'>
                        DISEÑO E INSTALACION DE MUEBLES MODULARES
                    </h1>
                </div>
                <span className='flex justify-center'>
                Desde el año 2021, ARTE Y DISEÑO CST se ha dedicado a elaborar hermosas piezas de alta calidad. <br/>
                Para conocer mas sobre su trabajo, puede explorar la amplia variedad de portafolio de diseño de muebles.
                </span>
            </article>
            <hr/>
            <img src={Portada}></img>
            <hr/>
            <br/>
            <h1 className='flex justify-center text-2xl underline text-sky-600'>Servicios</h1>
            <ul className='py-5 px-10 grid grid-cols-3 gap-4'>
                <li>-Toma de medidas</li>
                <li>-Diseños Personalizados</li>
                <li>-Asesoria</li>
                <li>-Fabricacion</li>
                <li>-Instalacion</li>
            </ul>
        </section>
        
        
        
    )
}

export default Body