import { Logo } from './elements/logo'
import { NavBar } from './elements/navbar'
import { ChangeTheme } from './elements/changeTheme'
import { Login } from './elements/login'

export const Header = () => {
    return(
        <header className='flex items-center justify-between mx-4 my-4 max-w-480'>
            <Logo />
            <div className='flex items-center justify-between gap-10'>
                <NavBar />
                <div className='h-[30px] w-[1px] bg-gray-300' />
                <ChangeTheme />
                <Login />
            </div>
        </header>
    )
}