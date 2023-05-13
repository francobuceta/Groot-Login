import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import grootSound from "../assets/i_am_groot.mp3";

const Form = ({setEmailText, setPasswordFocus, setEmailFocus, setSubmitted}) => {

    const [showPassword, setShowPassword] = useState(false);

    const playGrootSound = () => {
        new Audio(grootSound).play();
    }

    const emailHandler = (e) => {
        setEmailText(e.target.value.length);
    }
    
    const emailFocusFn = () => {
        setEmailFocus(true);
        playGrootSound();
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
        setSubmitted(true);
        window.scrollTo(0, 0);
    }

    return (
        <section className="form_container" onSubmit={(e) => handleSubmit(e)}>
            <form action="" className="form">
                <div className="form_input-container">
                    <div className="label_cont">
                        <label htmlFor="email">Email</label>
                    </div>
                    <input type="text" name="email" className="form_input margin_input" onChange={(e) => emailHandler(e)} 
                        onFocus={emailFocusFn} onBlur={emailBlurFn} required/>
                </div>
                <div className="form_input-container">
                    <div className="label_cont">
                        <label htmlFor="password">Password</label>
                    </div>
                    
                    <input type={showPassword ? "text" : "password"} name="password" className="form_input" 
                        onFocus={passwordFocusFn} 
                        onBlur={passwordBlurFn}
                        required/>
                    {
                        showPassword 
                        ? <AiFillEye onClick={showPasswordFn} className="eye_icon" />
                        : <AiFillEyeInvisible onClick={showPasswordFn} className="eye_icon" />
                    }
                </div>

                <div className="form_submit_container">
                    <input type="submit" value="Enviar" className="form_submit" />
                </div>
            </form>
        </section>
    )
}

export default Form;