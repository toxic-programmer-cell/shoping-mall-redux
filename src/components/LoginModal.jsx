import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoginModal, loginRequest, loginSuccess, loginFailure, showSignupModal } from '../redux/action/authAction';
import SignupModal from './SignupModal';

function LoginModal() {
    const dispatch = useDispatch();
    const showModal = useSelector((state) => state.auth?.showSignupModal);
    const error = useSelector((state) => state.auth?.error);
    const savedUsers = useSelector((state) => Array.isArray(state.auth?.user) ? state.auth?.user : []); 
    console.log('saved user', savedUsers)

    // console.log('showModal in Navbaar:', showModal);

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginRequest()); 

        const matchingUser = savedUsers?.find(
            (user) => user.email === loginData.email && user.password === loginData.password
        );

        if (matchingUser) {
            dispatch(loginSuccess(matchingUser));
            alert('login successfully') 
        } else {
            dispatch(loginFailure('Invalid email or password.'));
        }
    };

    const handleShowSignup = () => {
        console.log("signup clicked")
        dispatch(showSignupModal())
        dispatch(hideLoginModal())
    }

    const handleClose = () => {
        dispatch(hideLoginModal());
    };

    return (
        <div className="modal" style={{ display: 'block', background: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Log In</h5>
                        <button onClick={handleClose} className="close">
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <h3>Login</h3>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <div>
                                <p>Email</p>
                                <input
                                    type="email"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <p>Password</p>
                                <input
                                    type="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit">Log-In</button>
                            
                        </form>
                        <button type='button' onClick={handleShowSignup}>Sign-Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
