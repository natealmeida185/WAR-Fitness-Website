import React, { useState } from 'react';
import { fire } from '../firebase/fire';
import { db } from '../firebase/fire';
import Hero from './Navbar';

const Setup = (props) => {
    const [usersPhoto, setUsersPhoto] = useState(null);
    const [usersName, setUsersName] = useState('');
    const [usersAge, setUsersAge] = useState('');
    const [usersHeight, setUsersHeight] = useState('');
    const [usersWeight, setUsersWeight] = useState('');
    const [usersExperience, setUsersExperience] = useState('');
    const [usersGoal, setUsersGoal] = useState('');
    const [usersGender, setUsersGender] = useState('');
    const [setupDone, setSetupDone] = useState(false);
    
    const handlePhotos = async (e) => {
        const file = e.target.files[0]
        const storageRef = fire.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setUsersPhoto(await fileRef.getDownloadURL())
    }

    const handleSetup = (e) => {

        e.preventDefault();
        db.collection('user-profiles').add({
            usersPhoto: usersPhoto,
            email: props.email,
            usersName: usersName,
            usersAge: usersAge,
            usersWeight: usersWeight,
            usersExperience: usersExperience,
            usersGoal: usersGoal,
            usersGender: usersGender
        })
        .then(() => {
            setSetupDone(true)
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    if (setupDone === true) {
        return (
            <Hero usersPhoto={usersPhoto} email={props.email} usersName={usersName} usersAge={usersAge} 
            usersHeight={usersHeight} usersWeight={usersWeight} usersExperience={usersExperience} 
            usersGoal={usersGoal} usersGender={usersGender} handleLogout={props.handleLogout}/>
          )
    }

    return (
        <section className="setup-section">
            <div className="setup-container">
            <h1>QUARANTINE WORKOUT SETUP</h1>
            <hr id="setup-underline"/>
                <form onSubmit={handleSetup}>
                    <div className="photo-container">
                        <label>Profile Image<span id="required">*</span></label>
                        <br/>
                        <input type="file" id="photo-input" id="file" required
                        onChange={handlePhotos}/>
                        <div>
                            <label for="file" id="file-label">
                                Upload a Photo
                            </label>
                        </div>
                    </div>

                    <div className="name-container">
                        <label>Full Name<span id="required">*</span></label>
                        <br/>
                        <input type="text" id="name-input" required value={usersName}
                        onChange={(e) => setUsersName(e.target.value)}/>
                    </div>

                    <div className="birth-date-container">
                        <label>Birth Date<span id="required">*</span></label>
                        <br/>
                        <input type="date" id="birth-date-input" required value={usersAge}
                        onChange={(e) => setUsersAge(e.target.value)}/>
                    </div>

                    <div className="gender-container">
                        <label>Preferred Gender<span id="required">*</span></label>
                        <br/>
                        <select id="gender-input" required value={usersGender} onChange={(e) => setUsersGender(e.target.value)}>
                            <option name="gender" value=""></option>
                            <option name="gender" value="Male">Male</option>
                            <option name="gender" value="Female">Female</option>
                            <option name="gender" value="Undeclared">Undeclared</option>
                        </select>
                    </div>
                    
                    <div className="height-container">
                        <label>Accurate Height (inches)<span id="required">*</span></label>
                        <br/>
                        <input type="number" id="height-input" required value={usersHeight}
                            onChange={(e) => setUsersHeight(e.target.value)}/>
                    </div>

                    <div className="weight-container">
                        <label>Accurate Weight (lbs)<span id="required">*</span></label>
                        <br/>
                        <input type="number" id="weight-input" required value={usersWeight}
                            onChange={(e) => setUsersWeight(e.target.value)}/>
                    </div>

                    <div className="experience-container">
                        <label>Fitness Experience Level<span id="required">*</span></label>
                        <form id="experience-input" required value={usersExperience} onChange={(e) => setUsersExperience(e.target.value)}>
                            <input type="radio" name="experience-level"  value="Beginner"/><p>Beginner</p><br/>
                            <input type="radio" name="experience-level"  value="Intermediate"/><p>Intermediate</p><br/>
                            <input type="radio" name="experience-level"  value="Experienced"/><p>Experienced</p><br/>
                        </form>
                    </div>

                    <div className="goal-container">
                        <label>Fitness Goal<span id="required">*</span></label>
                        <form id="goal-input" required value={usersGoal} onChange={(e) => setUsersGoal(e.target.value)}>
                            <input type="radio" name="fitness-goal" value="Lose weight"/><p>Lose Weight</p><br/>
                            <input type="radio" name="fitness-goal"  value="Maintain Weight"/><p>Maintain Weight</p><br/>
                            <input type="radio" name="fitness-goal"  value="Build Muscle"/><p>Build Muscle</p><br/>
                        </form>
                    </div>
                    <button type="submit">View profile</button>
                </form>
            </div>
        </section>
    )
}
export default Setup;