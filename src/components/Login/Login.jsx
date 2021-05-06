import { Route, Redirect, NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Registration = (props) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input style={{display: 'block'}} type='email' {...register('email')}/>
          </div>
  
          <div>
            <label>Password</label>
            <input style={{display: 'block'}} type='password' {...register('password')}/>
          </div>
  
          <div>
            <label>Confirm password</label>
            <input style={{display: 'block'}} type='password' {...register('password')}/>
          </div>
  
          <button style={{display: 'block'}} type="submit" >Зарегистрироваться</button>
          <label>Или</label>
          <NavLink to='/enter'>
            <button style={{display: 'block'}} >Войти</button>
          </NavLink>
        </form>
      </div>
    )
  }
  const Enter = (props) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input style={{display: 'block'}} type='email' {...register('email')}/>
          </div>
  
          <div>
            <label>Password</label>
            <input style={{display: 'block'}} type='password' {...register('password')}/>
          </div>
  
          <button style={{display: 'block'}} type="submit" >Войти</button>
          <label>Или</label>
          <NavLink to='/registration'>
            <button style={{display: 'block'}} >Зарегистрироваться</button>
          </NavLink>
        </form>
      </div>
    )
  }

  const Login = () => {
    return (
      <> 
        <Redirect from='/' to='enter' />
  
        <Route path='/enter' component={Enter} />
        <Route path='/registration' component={Registration} />
      </>
    )
  }

export default Login