import { LogIn } from "lucide-react"

export const Login = () => {
    return(
        <div className='flex p-2 border border-gray-300 rounded-full justify-center items-center gap-2 max-w-35'>
            <LogIn />
            <p>Войти</p>
        </div>
    )
}