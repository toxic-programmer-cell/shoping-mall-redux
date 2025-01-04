import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSignupModal, signupSuccess } from '../redux/action/authAction';

const SignupModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.auth.showModal);
  const user = useSelector((state) => state?.auth?.user || []);
  // console.log(user, 'all user')

  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmpassword: ''
  });
  const [error, setError] = useState('');

  console.log(signupData, 'user')

  // if (showModal !== 'signup') {
  //   return null;
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  }

  const handleSignup = (e) => {
    e.preventDefault()

    if (!signupData.username || !signupData.email || !signupData.password) {
      setError('Please fill all required fields.');
      return;
    }
    if (signupData.password !== signupData.confirmpassword) {
      setError('password do not match')
    }

    setError('')
    dispatch(signupSuccess(signupData))
    alert('signup success')
  }

  const handleClose = () => {
    dispatch(hideSignupModal())
  };

  return (
    <div className="modal" style={{ display: 'block', background: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign Up</h5>
            <button onClick={handleClose} className="close">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSignup}>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div>
                <h3>Sign up</h3>
              </div>
              <div>
                <p>Username</p>
                <input type="text" name='username' placeholder='Username' value={signupData.username} onChange={handleChange} required />
              </div>
              <div>
                <p>Email</p>
                <input type="email" name='email' placeholder='Email' value={signupData.email} onChange={handleChange} required />
              </div>
              <div>
                <p>Phone</p>
                <input type="tel" name='phone' placeholder='Phone Number' value={signupData.phone} onChange={handleChange} required />
              </div>
              <div>
                <p>DOB</p>
                <input type="date" name='dob' placeholder='Date of Birth' value={signupData.dob} onChange={handleChange} required />
              </div>
              <div>
                <p>Password</p>
                <input type="password" name='password' placeholder='Password' value={signupData.password} onChange={handleChange} required />
              </div>
              <div>
                <p>Confirm Password</p>
                <input type="password" name='confirmpassword' placeholder='Confirm Password' value={signupData.confirmpassword} onChange={handleChange} required />
              </div>
              <div>
                <button type='submit'>Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
