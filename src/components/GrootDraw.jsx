import Form from "./Form.jsx";
import { useState, useEffect } from "react";
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
            setTranslateValueX(-4);

            if(emailText === 0 || emailText === 1) {
                setTranslateValueX(-3);
            }
            
            if(emailText === 2) {
                setTranslateValueX(-2);
            }
            if(emailText === 3) {
                setTranslateValueX(-1);
            }
            if(emailText === 4) {
                setTranslateValueX(0);
            }
            if(emailText === 5) {
                setTranslateValueX(1);
            }
            if(emailText === 6) {
                setTranslateValueX(2);
            }
            if(emailText === 7) {
                setTranslateValueX(3);
            }
            if(emailText === 8) {
                setTranslateValueX(4);
            } 
            if(emailText > 8) {
                setTranslateValueX(4);
            } 
        } else {
            setTranslateValueY(0);
            setTranslateValueX(0);
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

            <Form setEmailText={setEmailText} setPasswordFocus={setPasswordFocus} setEmailFocus={setEmailFocus} />
        </>
    )
}

const Mouth = styled.div`
    width: 4rem;
    height:  ${({ emailFocus }) => emailFocus ? "3rem" : "0.5rem"};
    background-color: var(--dark);
    border-radius: 35px 35px 100px 100px;
    margin-top: 1rem;
    position: relative;
    transition: all 0.3s;

    .tongue {
        display: ${({ emailFocus }) => emailFocus ? "block" : "none"};
        width: 2rem;
        height: 1rem;
        background-color: var(--tongue);
        border-radius: 15px 15px 50px 50px;
        position: absolute;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
    } 
`;

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
            emailFocus && emailText < 9 ?
            css`
                ${eyeAnimations[emailText](translateValueY, translateValueX)} 1s
                var(--cubic) forwards;
            `
            :
            css`
                ${eyeAnimations[8](translateValueY, translateValueX)} 1s
                var(--cubic) forwards;
            `
        };
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
        transform: translate(-4px, 8px);
    }
    to {
        transform: translate(${translateValueX}px, ${translateValueY}px);
    }
`;

const moveEyes3 = (translateValueY, translateValueX) => keyframes`
    from {
        transform: translate(-3px, 8px);
    }
    to {
        transform: translate(${translateValueX}px, ${translateValueY}px);
    }
`;

const moveEyes4 = (translateValueY, translateValueX) => keyframes`
    from {
        transform: translate(-2px, 8px);
    }
    to {
        transform: translate(${translateValueX}px, ${translateValueY}px);
    }
`;

const moveEyes5 = (translateValueY, translateValueX) => keyframes`
    from {
        transform: translate(-1px, 8px);
    }
    to {
        transform: translate(${translateValueX}px, ${translateValueY}px);
    }
`;
const moveEyes6 = (translateValueY, translateValueX) => keyframes`
    from {
        transform: translate(0px, 8px);
    }
    to {
        transform: translate(${translateValueX}px, ${translateValueY}px);
    }
`;
const moveEyes7 = (translateValueY, translateValueX) => keyframes`
    from {
        transform: translate(1px, 8px);
    }
    to {
        transform: translate(${translateValueX}px, ${translateValueY}px);
    }
`;
const moveEyes8 = (translateValueY, translateValueX) => keyframes`
    from {
        transform: translate(2px, 8px);
    }
    to {
        transform: translate(${translateValueX}px, ${translateValueY}px);
    }
`;
const moveEyes9 = (translateValueY, translateValueX) => keyframes`
    from {
        transform: translate(3px, 8px);
    }
    to {
        transform: translate(${translateValueX}px, ${translateValueY}px);
    }
`;

const eyeAnimations = {
    0: moveEyes1,
    1: moveEyes2,
    2: moveEyes3,
    3: moveEyes4,
    4: moveEyes5,
    5: moveEyes6,
    6: moveEyes7,
    7: moveEyes8,
    8: moveEyes9
};

const leafOddGrow = () => keyframes`
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
`;

const leafEvenGrow = () => keyframes`
    0% {
        transform: rotate(-90deg) scale(0);
    }

    100% {
        transform: rotate(-90deg) scale(1);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }  
    to {
        opacity: 1;
    }
`;

const Branch = styled.div`
    position: absolute;
    width: 8px;
    border-radius: 25px;
    background: linear-gradient(to right, #7f3333, #4d2020);
    animation: ${fadeIn} 1s ease-in-out;
    &:nth-child(1) {
		top: 60px;
		right: 40px;
		height: 100px;
		z-index: 20;
		transform: rotate(-60deg);
	}
    &:nth-child(2) {
		top: 90px;
		left: 40px;
		height: 100px;
		z-index: 20;
		transform: rotate(60deg);
	}
`;

const Leaf = styled.div`
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 75% 0 75% 0;
    background: linear-gradient(to right, #77ed9e, #53ad71);
    &:nth-child(1) {
		top: 2px;
		animation-delay: 1.5s;
		left: 100%;
		transform-origin: 0% 100%;
		animation-name: ${leafOddGrow};
		animation-duration: 1s;
		animation-fill-mode: both;
	}
    &:nth-child(2) {
		top: 10px;
		animation-delay: 1s;
		left: -150%;
		transform-origin: 50% 100%;
		animation-name: ${leafEvenGrow};
		animation-duration: 1s;
		animation-fill-mode: both;
	}
`;

export default GrootDraw;