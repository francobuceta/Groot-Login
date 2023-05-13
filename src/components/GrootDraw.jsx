import Form from "./Form.jsx";
import { useState, useEffect } from "react";
import { Mouth, Eyes, Branch, Leaf } from "../styles/styledComponents.js";

const GrootDraw = () => {

    const [emailText, setEmailText] = useState(0);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [translateValueY, setTranslateValueY] = useState(0);
    const [translateValueX, setTranslateValueX] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (emailFocus) {
            setTranslateValueY(8);
            setTranslateValueX(-4);

            if (emailText === 0 || emailText === 1) {
                setTranslateValueX(-3);
            }
            emailText === 2 && setTranslateValueX(-2);
            emailText === 3 && setTranslateValueX(-1);
            emailText === 4 && setTranslateValueX(0);
            emailText === 5 && setTranslateValueX(1);
            emailText === 6 && setTranslateValueX(2);
            emailText === 7 && setTranslateValueX(3);
            emailText === 8 && setTranslateValueX(4);
            emailText > 8 && setTranslateValueX(4);

        } else {
            setTranslateValueY(0);
            setTranslateValueX(0);
        }
    }, [emailFocus, emailText]);

    return (
        <>
            {
                !submitted ? (
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
                                <div className="leaf_container">
                                    {
                                        passwordFocus &&
                                        <>
                                            <Branch>
                                                <Leaf></Leaf>
                                                <Leaf></Leaf>
                                            </Branch>
                                            <Branch>
                                                <Leaf></Leaf>
                                                <Leaf></Leaf>
                                            </Branch>
                                        </>
                                    }
                                </div>
                                <div className="face">
                                    <div className="eyes">
                                        <Eyes emailText={emailText}
                                            emailFocus={emailFocus}
                                            translateValueX={translateValueX}
                                            translateValueY={translateValueY} />
                                        <Eyes emailText={emailText}
                                            emailFocus={emailFocus}
                                            translateValueX={translateValueX}
                                            translateValueY={translateValueY} />
                                    </div>

                                    <div className="mouth_container">
                                        <Mouth emailFocus={emailFocus}>
                                            <div className="tongue"></div>
                                        </Mouth>
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

                        <Form setEmailText={setEmailText}
                            setPasswordFocus={setPasswordFocus}
                            setEmailFocus={setEmailFocus}
                            setSubmitted={setSubmitted}
                        />
                    </>
                )
                :
                <img src="hola" alt="hola" />
            }

        </>
    )
}

export default GrootDraw;