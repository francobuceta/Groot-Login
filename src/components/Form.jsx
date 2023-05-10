const Form = () => {
    return (
        <section class="form-container">
            <form action="" className="form">
                <div>
                    <label for="email">Email</label>
                    <input type="text" name="email" className="form_input" />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="text" name="password" className="form_input" />
                </div>

                <div>
                    <input type="submit" value="Enviar" className="form_submit" />
                </div>
            </form>
        </section>
    )
}

export default Form;