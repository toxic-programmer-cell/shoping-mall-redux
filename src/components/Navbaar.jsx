import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { loginSuccess, showLoginModal } from '../redux/action/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import '../css/common.css';

export default function Navbaar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showLoginModalState = useSelector((state) => state.auth?.showLoginModal);
  const showSignupModal = useSelector((state) => state.auth?.showSignupModal);

  const handleLogin = () => {
    // console.log('Login button clicked');
    dispatch(showLoginModal())
  }

  const handleCart = () => {
    if (loginSuccess){
      navigate('/cart')
    }
    else{
      dispatch(showLoginModal)
    }
  }
  return (
    <div className='d-flex'>
      <div className='d-flex flex-row justify-content-between nav-container '>
        <div>
            <h4>logo</h4>
        </div>
        <div>
            <input type="text" />
        </div>
        <div className='d-flex'>
            <div>
                <button onClick={handleLogin} >
                    log In
                </button>
            </div>
            <div onClick={handleCart} style={{cursor: "pointer"}}>
                cart
            </div>
        </div>
      </div>
      {showLoginModalState && <LoginModal />} {/* Show login modal if showLoginModal is true */}
      {showSignupModal && <SignupModal />}
    </div>
  )
}
