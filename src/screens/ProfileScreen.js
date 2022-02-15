import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src={
              process.env.PUBLIC_URL + "/b677cd1cde292f261166533d6fe75872.png"
            }
            alt="profile_pic"
          />
          <div className="profileScreen_details">
            <h2>{user?.email}</h2>

            <div className="profileScreen_plans">
                <div className="profileScreen_planTitle">
                <h3>Plans (Current Plan: premium)</h3>
              <span style={{ fontWeight: '600'}}>Renewal Date: 09/04/2021</span>
                </div>
              <div className="profileScreen_plan">
                <div className="profileScreen_planType">
                  <span>Netflix Standard</span>
                  <span style={{ fontSize: ".8rem" }}>1080p</span>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen_plan">
                <div className="profileScreen_planType">
                  <span>Netflix Basic</span>
                  <span style={{ fontSize: ".8rem" }}>480p</span>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen_plan">
                <div className="profileScreen_planType">
                  <span>Netflix Premium</span>
                  <span style={{ fontSize: ".8rem" }}>4K + HDR</span>
                </div>
                <button style={{ width: '150px', backgroundColor: 'gray'}}>Current Package</button>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_Signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
