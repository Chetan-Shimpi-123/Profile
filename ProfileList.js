import React,{ useState } from 'react';
import ProfileCard from './ProfileCard';
import MapComponent from'./MapComponent';
import ProfileDetails from './ProfileDetails';


const ProfileList=({ profiles }) =>{
    const [selectedAddress, setSelectedAddress] =useState(null);
    
    const handleShowMap= (address) =>{
        setSelectedAddress (address);
    };
    return(
        <div className="profile-list">
            <div className="profiles">
                {profiles.map((profile)=>(
                    <ProfileCard key={profile.id} profile={profile} onShowMap={handleShowMap} />


                ))}
            </div>
        </div>
        );
};
export default ProfileList