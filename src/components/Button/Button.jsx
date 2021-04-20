import css from './Button.module.css'

const Button = ({ text, bacgroundColor}) => {
    return (
        <>
            <button className={css.button} style={{backgroundColor: `${bacgroundColor}`}} >{text}</button>
        </>
    )
}

export default Button