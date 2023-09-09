import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import React from 'react';

const Profile = () => {
    const {getUser, isAuthenticated} = getKindeServerSession();
    const user = getUser();
    return isAuthenticated() ? (
      <div>
        <h2>Hi {user.given_name}! - your logged in</h2>
        <h3>familyName: {user.family_name}</h3>
        <h3>email: {user.email}</h3>
      </div>
    ) : (
      <div>please login</div>
    );
};

export default Profile;