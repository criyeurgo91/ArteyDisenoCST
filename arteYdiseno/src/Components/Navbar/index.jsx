import {NavLink} from 'react-router-dom'



const Navbar =() =>{

    const activeStyle = ' underline underline-offset-4'

    return (
       
        <nav className="flex justify-center  absolute z-10 top-52  w-full py-5 px-8 text-lg font-semibold  text-black">
             
            <ul className="flex items-center gap-3">
                
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Products'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Products
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    )

}

export default Navbar