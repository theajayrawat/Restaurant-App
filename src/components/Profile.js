import SocialProfile from "./SocialProfile";
import { useState, useEffect } from "react";
import { Github_API_User, Github_UserName, options } from "../constant";


const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const response = await fetch(Github_API_User + Github_UserName, options); // Fetch the data from github User API
    const json = await response.json();
    setUserInfo(json);
  }

  return (
    <>
      <div className="profile-class-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>
          <div className="profile-user-card">
            <img
              className="profile-user-img"
              src={userInfo?.avatar_url}
              alt={userInfo?.name}
              title={userInfo?.name}
            />
            <p className="profile-user-bio">{userInfo?.bio}</p>
            <SocialProfile />
          </div>
          {/* Passing props data (full json data) from parent to child */}
        </div>
      </div>
    </>
  );
};

export default Profile;
