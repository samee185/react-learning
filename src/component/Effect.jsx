import React from 'react';
import UseFetch from './useFetch';

const Effect = () => {

const {user, isLoading} = UseFetch("https://randomuser.me/api");

console.log("user is", user);
  return (
    <>
    <div className="team-container" key={user.id}>
        {isLoading && <div>Loading...</div>}
        {user.name &&  <h1>{user.name.first} {user.name.last}</h1>}
        {user.email && <h2>{ user.email}</h2>}
        {user.gender && <h3>{user.gender}</h3>}
    </div>
    
    </>
  );
};

export default Effect