const Form = ({setEmailText, passwordFocus, setPasswordFocus, setEmailFocus}) => {

    const emailHandler = (e) => {
        setEmailText(e.target.value.length);
    }
    
    const emailFocusFn = () => {
        setEmailFocus(true);
    }

    const passwordHandler = () => {
        setPasswordFocus(true);
        console.log(passwordFocus);
    }

    return (
        <section className="form_container">
            <form action="" className="form">
                <div className="form_input-container">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="form_input" onChange={(e) => emailHandler(e)} 
                        onFocus={emailFocusFn} />
                </div>
                <div className="form_input-container">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" className="form_input" onFocus={passwordHandler} />
                </div>

                <div>
                    <input type="submit" value="Enviar" className="form_submit" />
                </div>
            </form>
        </section>
    )
}

export default Form;