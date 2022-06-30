import React from 'react';
import {Link} from "react-router-dom";
import img from '../assets/images/not-found.svg'
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
    return (
        <Wrapper className={"full-page"}>
            <div>
                <img src={img} alt={'not found'}  />
                <h3> Page not found</h3>
                <p> We can't seem to find the page you were looking for</p>
                <Link to= '/'> back home </Link>
            </div>
        </Wrapper>
    );
};

export default Error;