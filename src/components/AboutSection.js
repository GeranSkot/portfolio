import React from 'react';
import home1 from '../img/home1.png';
//Styled
import {StyledAbout, StyledDescription, StyledHide, StyledImage} from "../styles";
//FRAMER MOTION
import {motion} from "framer-motion";
import {titleAnim, fade, photoAnimation} from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            true
                        </motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or
                    videography ideas that you have.
                    We have professionals with amazing skills
                </motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img variants={photoAnimation} src={home1} alt={"guy with the camera"}/>
            </StyledImage>
            <Wave/>
        </StyledAbout>
    )
}

//Styled components


export default AboutSection;