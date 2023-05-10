import Form from "./Form.jsx";
import { useState } from "react";

const GrootDraw = () => {

    const [emailText, setEmailText] = useState(0);
    const [passwordFocus, setPasswordFocus] = useState(false);

    return (
        <>
            <section className="container">

                <div className="hair">
                    <div className="hair-1"></div>
                    <div className="hair-2"></div>
                    <div className="hair-3"></div>
                    <div className="hair-4"></div>
                    <div className="hair-5"></div>
                </div>

                <div className="head">
                    <div className="face">
                        <div className="eyes">
                            <div className="eyes_left"></div>
                            <div className="eyes_right"></div>
                        </div>

                        <div className="mouth">
                            <div className="tongue"></div>
                        </div>
                    </div>
                </div>

                <div className="neck"></div>

                <div className="shoulder"></div>

                <div className="body">
                    <div className="left-arm"></div>
                    <div className="right-arm"></div>
                </div>
            </section>

            <Form setEmailText={setEmailText} passwordFocus={passwordFocus} setPasswordFocus={setPasswordFocus} />
        </>
    )
}

export default GrootDraw;