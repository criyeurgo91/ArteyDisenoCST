import Logo from '../../Images/logo_cst.jpg'

function Header () {
    return(
        <div className='flex  items-center justify-between pr-20 text-white  bg-black text-2xl'>
            <img className='h-52 ' src={Logo} alt='Logo'>
            </img>
            <h1 className='underline text-3xl'>Arte Y Diseño CST</h1>
            <h1 className='underline text-cyan-600'>Cristian Space Transformation</h1>
        </div>
    )
}

export default Header