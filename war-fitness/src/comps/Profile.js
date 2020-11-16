import React from 'react';
import DropDown1 from './DropDown1';

const items = [
    {
        id: 1,
        value: 'workout1',
    },
    {
        id: 2,
        value: 'workout2',
    },
    {
        id: 3,
        value: 'workout3',
    },
    {
        id: 4,
        value: 'workout4',
    },
    {
        id: 5,
        value: 'workout5',
    }
]
const Profile = (props) => {
    return (
        <section className="profile-section">
            <div className="workout-dashboard">
                <h1>{props.usersName}</h1>
            </div>
            <div className="dd-container">
                <DropDown1 title="Day 1- Back Workout" items={items} multiSelect />
                <DropDown1 title="Day 2- Shoulder Workout" items={items} multiSelect />
                <DropDown1 title="Day 3- Leg Workout" items={items} multiSelect />
                <DropDown1 title="Day 4- Arm Workout" items={items} multiSelect />
                <DropDown1 title="Day 5- Ab Workout" items={items} multiSelect />
            </div>
        </section>
    )
}

export default Profile;