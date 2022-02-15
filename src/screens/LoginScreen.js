import { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src={process.env.PUBLIC_URL + "/580b57fcd9996e24bc43c529.png"}
          alt="_logo"
        />
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen_overlay"></div>
        <img
          src={process.env.PUBLIC_URL + "/netflix-image.jpeg"}
          alt=""
          className="loginScreen_BgImage"
        />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen 
            userEmail={email}
          />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input value={email} type="email" placeholder="email address" onInput={e => setEmail(e.target.value)} />
                <button
                  className="loginScreen_getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
