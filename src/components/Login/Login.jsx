import { useForm } from 'react-hook-form'

import css from './Login.module.jsx'

const Login = () => {
    const {register, handleSubmit, erros} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input type="text" name="email" ref={register} />
            <label>Password</label>
            <input type="password" name="password" ref={register} />
            <button type="submit" >Login</button>
        </form>
    )
}

export default Login