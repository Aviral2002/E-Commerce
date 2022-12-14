import React, { useState } from "react";
import {auth} from '../../firebase'
import { toast , ToastContainer } from "react-toastify";

const Register = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const config= {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL ,
            handleCodeInApp:true
        };
        await auth.sendSignInLinkToEmail(email, config);
        toast.success(
            `Email sent ${email}. With link (0_0)`
        );

        window.localStorage.setItem('emailForRegistration', email) ;

        setEmail("");


    };
    const registerform = () =>
        <form onSubmit={handleSubmit}>
            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
            <button type="submit" className="btn btn-raised">
                Register
            </button>
        </form>
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    {registerform()}
                </div>

            </div>
        </div>
    );

};

export default Register;