import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Form = ({setEmailText, setPasswordFocus, setEmailFocus}) => {

    const [showPassword, setShowPassword] = useState(false);

    const emailHandler = (e) => {
        setEmailText(e.target.value.length);
    }
    
    const emailFocusFn = () => {
        setEmailFocus(true);
    }

    const emailBlurFn = () => {
        setEmailFocus(false);
    }

    const passwordFocusFn = () => {
        setPasswordFocus(true);
    }

    const passwordBlurFn = () => {
        setPasswordFocus(false);
    }

    const showPasswordFn = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="form_container" onSubmit={(e) => handleSubmit(e)}>
            <form action="" className="form">
                <div className="form_input-container">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="form_input margin_input" onChange={(e) => emailHandler(e)} 
                        onFocus={emailFocusFn} onBlur={emailBlurFn}/>
                </div>
                <div className="form_input-container">
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" className="form_input" 
                        onFocus={passwordFocusFn} 
                        onBlur={passwordBlurFn}/>
                    {
                        showPassword 
                        ? <AiFillEye onClick={showPasswordFn} className="eye_icon" />
                        : <AiFillEyeInvisible onClick={showPasswordFn} className="eye_icon" />
                    }
                </div>

                <div>
                    <input type="submit" value="Enviar" className="form_submit" />
                </div>
            </form>
        </section>
    )
}

export default Form;