import {NavLink} from 'react-router-dom';
import React,  {useRef, useEffect, useState} from 'react';
import icon from '../imgs/icon.png';
import loader from '../imgs/loader.gif';

export const SignUpView = () => {
  const [state, setState] = useState({
    email: '',
    username: '',
    password: '',
    confirmPass: '',
    res: '',
    errors:{
      passwordLength: '',
      passwordRegex: '',
      confirmPass: ''
    }
  })
  
  useEffect (() => {
    document.getElementById('header').classList = 'none';
    return () => {document.getElementById('header').classList = ''}
  });


  let handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }


  let validatePassword = () => {
    let errors = state.errors;

    //Checks password contains more than 8 characters
    errors.passwordLength = state.password.length > 8 ? '' : 'Password should be more than 8 characters long';

    //Checks password contains only alphabets and at least a number
    let regex = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
    errors.passwordRegex = state.password.match(regex)  ? '' : 'Password should contain only alphanumeric characters and at least one number';
    
    setState({...state, errors: errors});
    return !errors.passwordRegex && !errors.passwordLength;
  }


  let validateConfirmPass = () => {
    let errors = state.errors;

    //Checks password and confirmPass are the same
    errors.confirmPass = state.password === state.confirmPass ? '' : 'Passwords do not match';
    
    setState({...state, errors: errors});
    return !errors.confirmPass;
  }


  let handleBlur = (e) => { //Displays error message when password is validated
    if (e.target.name === 'password') {
      validatePassword();
    } else if (e.target.name === 'confirmPass') { validateConfirmPass() }
  }

  let loaderRef = useRef();
  let handleSubmit =  (e) => {
    e.preventDefault();
    const {email, username, password, confirmPass} = state;
    let user = {email: email, username: username, password: password, confirmPass: confirmPass};

    if (validatePassword() && validateConfirmPass()) {
      loaderRef.current.className = 'loader';
      // Sends user inputs to API for registration
      fetch('/api/auth/signup', {
        "method": "POST", 
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify({...user})
      })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (!res.success) {
          console.log(res.error.message);
          setState({...state, res: res.error.message});
          loaderRef.current.className = 'none';
        } else {
          window.location = '/Login'
        }
      })
      .catch((e) => console.log(e));
    }
  }


  let formContainerClass = window.innerWidth > 600 ? 'formContainer formContainerPC' : 'formContainer';
  return (
    <main>
    <div className='none' ref={loaderRef}><img src={loader}  alt='Loader gif' /></div>
    <section className={formContainerClass}>
      
      <NavLink to='/' className='iconDiv'><img src={icon} className='icon' alt='Chartit icon' /></NavLink>

      <form onSubmit={handleSubmit}>
        <div>
          <div className='inputDiv' >
            <label htmlFor='signUpEmail'>Email:</label> 
            <input placeholder='example@example.com' type='email' id='signUpEmail' name='email' onChange={handleChange} value={state.email} pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b" required />
          </div>
        </div>
        
        <div>
          <div className='inputDiv' >
            <label htmlFor='userName'>Call me:</label>
            <input placeholder='Miracle' type='text'  id='userName' name='username' onChange={handleChange} value={state.userName}  required />
          </div>
        </div>
        
        <div>
          <div className='inputDiv'>
            <label htmlFor='signUpPassword'>Password:</label>
            <input type='password' id='signUpPassword' name='password' onChange={ handleChange} onBlur={handleBlur} value={state.password} required />
          </div>

          <div className='errorsDiv'>
            <p>{state.errors.passwordLength}</p>
            <p>{state.errors.passwordRegex}</p>
          </div>
          <div className='errorP'>
            <p>{state.errors.confirmPass}</p>
          </div> 
        </div>

        <div>
          <div className='inputDiv'>
            <label htmlFor='confirmPass'>Confirm Password:</label>
            <input type='password' id='confirmPass' name='confirmPass' onChange={handleChange} onBlur={handleBlur} value={state.confirmPass}  required />
          </div>

          <div className='errorP'>
            <p>{state.errors.confirmPass}</p>
          </div> 
        </div>

        <button className='inputDiv'>Sign Up</button>
      </form>
      <div className='errorP' >
          <p>{state.res}</p>
        </div>

      <p className='gotAccount centerText'>Already have an account?<button><NavLink to='/Login'>Login</NavLink></button></p>
    </section> 
    </main>
)
}


export const LoginView = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  }
  );

  let passWordRef = useRef();

  useEffect(() => {
    document.getElementById('header').classList = 'none';
    return () => {document.getElementById('header').classList = '';}
  })

  const handleChange =  (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }

  const handleSubmit =  (e) => {
    e.preventDefault();

    // Sends User Inputs to API for login
    fetch('/api/auth/login', {
      method: 'POST',
      "headers": {
        "content-type": "application/json"
      },
      body: JSON.stringify({...state})
    })
    .then((response) => response.json())
    .then((res) => {
      if(res.code !== 200) {
        passWordRef.current.innerHTML += `<p>${res.error.message}</p>`;
        window.location.reload(true);
      } 
    })
    .catch((err) => console.log(err))
  }

  let formContainerClass = window.innerWidth > 600 ? 'formContainer formContainerPC' : 'formContainer';
  return (
    <section className={formContainerClass}>
      <NavLink to='/' className='iconDiv'><img src={icon} className='icon' alt='Chartit icon' /></NavLink>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='loginEmail'>Email:</label>
          <input placeholder='example@example.com' type='email' id='loginEmail' name='email' onChange={handleChange} value={state.email} pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b" required/>
        </div>

        <div ref={passWordRef}>
          <label htmlFor='passWord'>Password:</label>
          <input type='password' id='password' name='password' onChange={handleChange} value={state.password} required />
        </div>

        <button>Login</button>
      </form>

      <div>
        <p className='gotAccount centerText'>Don't have an account?<button><NavLink to='/SignUp'>Sign up</NavLink></button></p>
        <NavLink to='#'><p className='centerText'>Forgotten password?</p></NavLink>
      </div>
    </section>  
  )
}
