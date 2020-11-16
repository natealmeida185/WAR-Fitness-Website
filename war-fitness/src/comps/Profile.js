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
               
            </div>
            <div className="dd-container">
                <DropDown1 title="BACK WORKOUT" items={items} multiSelect />
                <DropDown1 title="SHOULDER WORKOUT" items={items} multiSelect />
                <DropDown1 title="LEG WORKOUT" items={items} multiSelect />
                <DropDown1 title="ARM WORKOUT" items={items} multiSelect />
                <DropDown1 title="AB WORKOUT" items={items} multiSelect />
            </div>
        </section>
    )
}

export default Profile;