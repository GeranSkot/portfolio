import React, {useState} from 'react';
//IMPORT STYLES
import styled from 'styled-components';
import {StyledAbout} from "../styles";
//TOGGLEFAQ
import Toggle from "./Toggle";
import {AnimateSharedLayout} from "framer-motion";
import {useScroll} from "./useScroll";
import {scrollReveal} from "../animation";

const FaqSection = () => {
    const [element,controls] = useScroll();
    return (
        <StyledFaq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How do i start ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Dicta, eos?
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Daily schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Dicta, eos?
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Different payment methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Dicta, eos?
                        </p>
                    </div>
                </Toggle>
                <Toggle title="What product do you offer">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Dicta, eos?
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    )
}

const StyledFaq = styled(StyledAbout)`
  display: block;
  span{
    display: block;
  }
  h2{
  padding-bottom: 2rem;
  font-weight: lighter;
  }
  .faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question{
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer{
    padding-bottom: 2rem 0rem;
    p{
      padding: 1rem 0rem;
    }
  }

`;

export default FaqSection;