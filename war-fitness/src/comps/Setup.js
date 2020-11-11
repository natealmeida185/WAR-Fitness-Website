import React, { useState } from 'react';
import fire from '../firebase/fire';
import Profile from './Profile';

const Setup = () => {
    const [usersPhoto, setUsersPhoto] = useState('');
    const [usersName, setUsersName] = useState('');
    const [usersAge, setUsersAge] = useState('');
    const [usersWeight, setUsersWeight] = useState('');
    const [usersExperience, setUsersExperience] = useState('');
    const [usersGoal, setUsersGoal] = useState('');
    const [usersGender, setUsersGender] = useState('');

    const handleSetup = (e) => {
        e.preventDefault();

        fire.collection('user-profiles').add({
            usersPhoto:usersPhoto,
            usersName: usersName,
            usersAge: usersAge,
            usersWeight: usersWeight,
            usersExperience: usersExperience,
            usersGoal: usersGoal,
            usersGender: usersGender
        })
        .then(() => {
            return (
                alert("submitted successfully!")
            )
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    return (
        <section className="setup-section">
            <div className="setup-container">
            <h1>QUARANTINE WORKOUT SETUP</h1>
            <hr id="setup-underline"/>
                <form onSubmit={handleSetup}>
                    <div className="photo-container">
                        <label>Profile Image:</label>
                        <br/>
                        <input type="file" accept="image/*" id="photo-input" id="file" required value={usersPhoto}
                        onChange={(e) => setUsersPhoto(e.target.value)}/>
                        <div className="choose-photo">
                            <label for="file" id="file-label">
                                Upload a Photo..
                            </label>
                        </div>
                    </div>
                    
                    <div className="name-container">
                        <label>Full Name:</label>
                        <br/>
                        <input type="text" id="name-input" required value={usersName}
                        onChange={(e) => setUsersName(e.target.value)}/>
                    </div>

                    <div className="birth-date-container">
                        <label>Birth Date:</label>
                        <br/>
                        <input type="date" id="birth-date-input" required value={usersAge}
                        onChange={(e) => setUsersAge(e.target.value)}/>
                    </div>

                    <div className="gender-container">
                        <label>Assigned Gender:</label>
                        <br/>
                        <fieldset id="gender-input">
                        <input type="radio" name="gender"  value="Male" required value={usersGender}
                            onChange={(e) => setUsersGender(e.target.value)}/><p>Male</p><br/>
                            <input type="radio" name="gender"  value="Female" required value={usersGender}
                            onChange={(e) => setUsersGender(e.target.value)}/><p>Female</p><br/>
                        </fieldset>
                    </div>
                    
                    <div className="weight-container">
                        <label>Accurate Weight (lbs):</label>
                        <br/>
                        <input type="number" id="weight-input" required value={usersWeight}
                            onChange={(e) => setUsersWeight(e.target.value)}/>
                    </div>

                    <div className="experience-container">
                        <label>Fitness Experience Level:</label>
                        <fieldset id="experience-input">
                        <input type="radio" name="experience-level"  value="Beginner" required value={usersExperience}
                            onChange={(e) => setUsersExperience(e.target.value)}/><p>Beginner</p><br/>
                            <input type="radio" name="experience-level"  value="Intermediate" required value={usersExperience}
                            onChange={(e) => setUsersExperience(e.target.value)}/><p>Intermediate</p><br/>
                            <input type="radio" name="experience-level"  value="Experienced" required value={usersExperience}
                            onChange={(e) => setUsersExperience(e.target.value)}/><p>Experienced</p><br/>
                        </fieldset>
                    </div>

                    <div className="goal-container">
                        <label>Fitness Goal:</label>
                        <fieldset id="goal-input">
                        <input type="radio" name="fitness-goal"  value="Lose weight" value={usersGoal}
                            onChange={(e) => setUsersGoal(e.target.value)}/><p>Lose Weight</p><br/>
                            <input type="radio" name="fitness-goal"  value="Maintain Weight" value={usersGoal}
                            onChange={(e) => setUsersGoal(e.target.value)}/><p>Maintain Weight</p><br/>
                            <input type="radio" name="fitness-goal"  value="Build Muscle" value={usersGoal}
                            onChange={(e) => setUsersGoal(e.target.value)}/><p>Build Muscle</p><br/>
                        </fieldset>
                    </div>
                    <button type="submit">View profile</button>
                </form>
            </div>
        </section>
    )
}
export default Setup;