import { useRef } from "react";
import { useHistory } from "react-router";
import { auth } from '../firebase';
import "./SignUpScreen.css";

function SignUpScreen({ userEmail }) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();
    console.log(userEmail)
  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
    ).then((authUser) => {
      history.push('/')
    }).catch((error) => {
        alert(error.message);
    });
  };
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
    ).then((authUser) => {
        history.push('/')
    }).catch((error) => alert(error.message));
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type="email" value={userEmail === '' ? null : userEmail}/>
        <input ref={passwordRef} type="password" placeholder='Password'/>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span style={{ color: "gray", marginRight: "5px" }}>
            New to Netflix?
          </span>
          <span className="signUpScreen_link" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
