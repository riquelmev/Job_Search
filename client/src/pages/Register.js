import React from 'react';
import {useState,useEffect} from "react";
import {Logo,FormRow, Alert} from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import {useAppContext} from "../context/appContext";


const initialState = {
     name:'',
     email:'',
     password:'',
     isMember: true,
}


const Register = () => {
    const [values, setValues] = useState(initialState)

    const {isLoading,showAlert, displayAlert} = useAppContext()
    const toggleMember =() =>{
        setValues({...values, isMember: !values.isMember })
    }

    const handleChange = (event) => {
        setValues({...values,[event.target.name]: event.target.value})
        console.log((event.target))
    }
    const onSubmit = (event) => {
        event.preventDefault()
        const {name,email,password,isMember} = values
        if (!email || !password || (!isMember && !name)){
            displayAlert()
            return
        }
        console.log(values)
    }
    return (
        <Wrapper className = 'full-page'>
            <form className={"form"} onSubmit={onSubmit}>
            <Logo/>
            <h3>{values.isMember ? 'Login':'Register'}</h3>
                {showAlert && <Alert/>}
        {/*    name input*/}
                {!values.isMember &&(
                    <FormRow
                        type={'text'}
                        name={'name'}
                        value={values.name}
                        handleChange={handleChange}/>
                )}
        {/*email input*/}

                <FormRow
                    type={'email'}
                    name={'email'}
                    value={values.email}
                    handleChange={handleChange}/>
        {/*password input*/}

                <FormRow
                    type={'password'}
                    name={'password'}
                    value={values.password}
                    handleChange={handleChange}/>

                <button type={"submit"} className={'btn btn-block'}>
                submit
                </button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type={'button'} onClick={toggleMember} className={'member-btn'}>
                        {values.isMember ? 'Registered' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    );
};

export default Register;