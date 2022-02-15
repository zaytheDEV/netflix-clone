import "./App.css";
import Nav from "./Nav";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.id,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/profile">
              <Nav />
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <Nav />
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}
export default App;
