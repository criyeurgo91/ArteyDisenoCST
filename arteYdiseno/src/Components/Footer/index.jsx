import face from '../../Images/facebook.png'
import inst from '../../Images/instagram.png'

function Footer (){
    return (
        <div className='flex py-2 px-3 items-center justify-between pr-20 text-white  bg-black text-2xl'>
            <iframe className="w-60 h-40" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d996.5183780124295!2d-76.5667459447746!3d2.4826176560484625!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1686115247353!5m2!1ses!2sco">ubicacion</iframe>
            <h1 className='underline'>Arte Y Diseño CST.<br/>
             Tu espacio Tu Estilo!! </h1>
            <nav className='flex space-x-4'>
                <a href="https://www.facebook.com/profile.php?id=100089265738488"><img className='w-20' src={face}></img></a>
                <a href="https://www.instagram.com/criurbano316/"><img className='w-20' src={inst}></img></a>
            </nav>
        </div>
    )
}

export default Footer