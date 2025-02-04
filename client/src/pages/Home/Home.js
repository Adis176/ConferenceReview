import React, {useState} from "react";
import { client } from "../../index.js";
import { FETCH_PROFILE } from "../../graphql/Queries.js";
// import * as Yup from 'yup';
import MyButton from "../../components/Button/Button.js";
import { StyledInput } from "../../components/Input/Input.js";
export default function Home(){
    const [userEmail, setUserEmail] = useState("");
    const [userDetails, setUserDetails] = useState({});
    const [fetchError, setFetchError] = useState(null);
    async function fetchUserProfile() {
        try {
            const { data } = await client.query({
                query: FETCH_PROFILE,
                variables: { email: userEmail }
            });
            setUserDetails(data.fetchProfile);
        } 
        catch (error) {
            setFetchError(error.message);
            setUserDetails({});
            console.error('Profile fetch error:', error);
        }
    }
    // function createConference(){
        
    // }
    return (
        <div>
            <h1>dc</h1>
            <div className="w-12 h-12 bg-emerald-500"></div>
            <StyledInput size="medium" placeholder="Enter user email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            
            <MyButton variant="filled" onClick={fetchUserProfile}>Fetch-Profile</MyButton>
            <div>
                {userDetails.firstName ? <p>first-name: {userDetails.firstName}</p> : <p></p>}
                {userDetails.lastName ? <p>last-name: {userDetails.lastName}</p> : <p></p>}
                {userDetails.role ? <p>Current role: {userDetails.role}</p> : <p></p>}
                {fetchError && <p className="text-red-600">User cannot be fetched !</p>}
            </div>
            <MyButton >Create Conference</MyButton>
        </div>
    );
}