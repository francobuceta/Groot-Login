const Form = ({setEmailText, passwordFocus, setPasswordFocus}) => {

    const emailHandler = (e) => {
        setEmailText(e.target.value.length);
    }
    
    const passwordHandler = () => {
        setPasswordFocus(true);
        console.log(passwordFocus);
    }

    return (
        <section className="form-container">
            <form action="" className="form">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="form_input" onChange={(e) => emailHandler(e)} />
                </div>
                <div>
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