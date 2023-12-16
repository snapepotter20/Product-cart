import React from "react";

const ProfilePage = () => {
  const auth = localStorage.getItem("user");
  return (
    <div className="profile">
      <img src="/Images/image.png" alt="profilepic" className="profile-img" />
      <div className="profile-description">
        <h1 className="profile-heading">{JSON.parse(auth).name}</h1>
        <p className="profile-para">
          Versatile professional with expertise in web development, skilled in
          HTML, CSS, JavaScript, ReactJS, and NodeJS. Proven problem-solving
          abilities, with a creative and innovative approach to projects. Adept
          at collaborating in a team and eager to contribute to dynamic
          projects, fostering growth and learning.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
