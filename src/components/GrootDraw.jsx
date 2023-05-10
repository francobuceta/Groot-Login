import Form from "./Form.jsx";
import { useState } from "react";
import styled, { keyframes } from 'styled-components';

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
                            <Eyes /* className="eyes_left" */></Eyes>
                            <Eyes /* className="eyes_right" */></Eyes>
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

const moveEyes = keyframes `
from {
    transform: translatey(0px);
	transform: translatex(0px);
}
to {
    transform: translatey(8px);
	transform: translatex(8px);
}
`;

const Eyes = styled.div `
    width: 2rem;
	height: 2rem;
	background-color: var(--dark);
	border-radius: 50%;
	position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 10px;
        right: 10px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: #fff;
        animation: ${moveEyes} 1s var(--cubic) 1;
    }
`;

export default GrootDraw;