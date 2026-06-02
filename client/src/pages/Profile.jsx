import React from "react";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";

const Profile = () => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const firstLetter =
    user?.user?.name?.charAt(0).toUpperCase() || "U";

  return (
    <>
      <Navbar />

      <div className="profile-container">
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
          }}
        >
          <BackButton />

          <div className="profile-card">
            <div className="profile-avatar">
              {firstLetter}
            </div>

            <h1 className="profile-title">
              My Profile
            </h1>

            <div className="profile-info">
              <div className="profile-row">
                <span className="profile-label">
                  Full Name
                </span>
                <span className="profile-value">
                  {user?.user?.name || "N/A"}
                </span>
              </div>

              <div className="profile-row">
                <span className="profile-label">
                  Email Address
                </span>
                <span className="profile-value">
                  {user?.user?.email || "N/A"}
                </span>
              </div>

              <div className="profile-row">
                <span className="profile-label">
                  Account Status
                </span>
                <span className="profile-value">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;