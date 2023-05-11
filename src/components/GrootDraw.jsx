import Form from "./Form.jsx";
import { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from 'styled-components';

const GrootDraw = () => {

    const [emailText, setEmailText] = useState(0);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [translateValueY, setTranslateValueY] = useState(0);
    const [translateValueX, setTranslateValueX] = useState(0);

    useEffect(() => {
        if (emailFocus) {
            setTranslateValueY(8);
            setTranslateValueX(-10);
            
            if(emailText === 2) {
                setTranslateValueY(15);
                setTranslateValueX(-1);
            }
        }
    }, [emailFocus, emailText, translateValueY, translateValueX]);

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
                            <Eyes emailText={emailText}
                                emailFocus={emailFocus}
                                translateValueX={translateValueX}
                                translateValueY={translateValueY} />
                            <Eyes emailText={emailText}
                                emailFocus={emailFocus}
                                translateValueX={translateValueX}
                                translateValueY={translateValueY} />
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

            <Form setEmailText={setEmailText} passwordFocus={passwordFocus} setPasswordFocus={setPasswordFocus} setEmailFocus={setEmailFocus} />
        </>
    )
}

const Eyes = styled.div`
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
        animation: ${({ emailFocus, emailText, translateValueY, translateValueX }) =>
            emailFocus && emailText === 0 ?
            css`
            ${moveEyes1(translateValueY, translateValueX)} 1s var(--cubic) forwards;
            `
            : css`
            ${moveEyes2(translateValueY, translateValueX)} 1s var(--cubic) forwards;
            `};
    }
`;

const moveEyes1 = (translateValueY, translateValueX) => keyframes`
    from {
        transform: translate(0px, 0px);
    }
    to {
        transform: translate(${translateValueX}px, ${translateValueY}px);
    }
`;
const moveEyes2 = (translateValueY, translateValueX) => keyframes`
    from {
        transform: translate(-10px, 8px);
    }
    to {
        transform: translate(${translateValueX}px, ${translateValueY}px);
    }
`;

export default GrootDraw;