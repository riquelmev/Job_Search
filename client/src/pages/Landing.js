import React from 'react';
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from '../components'
import {Link} from "react-router-dom";

const Landing = () => {
    return (
      <Wrapper>
          <nav>
              <Logo/>
          </nav>
          <div className = "container page" >
            {/*  info*/}
            <div className="info">
                <h1> job <span> tracking</span> app </h1>
                <p>This is just a simple app for tracking job applications</p>
                <Link to='register' className='btn btn-hero'> Login/Register  </Link>
            </div>
              <img src={main} alt='job hunt' className='img main-img' />
          </div>
      </Wrapper>
    );
};


// const Wrapper = styled.main`
//   nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
//   }
// `
export default Landing;