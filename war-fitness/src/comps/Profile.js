import React from 'react';
import DropDown1 from './DropDown1';
import Stopwatch from './Stopwatch';

const items1 = [
    {
        id: 1,
        value: 'Wide Grip Pushups (Until Failure)',
        image: 'images/workout1.jpg',
    },
    {
        id: 2,
        value: 'Bent-Over Row (3 Sets of 12 Reps)',
    },
    {
        id: 3,
        value: 'Mid Table-Row (3 Sets of 12 Reps)',
    },
    {
        id: 4,
        value: 'Sliding Floor Pull-Up (2 Sets of 12 Reps)',
    },
    {
        id: 5,
        value: 'Superman (2 Sets of 15 Reps)',
    }
]

const items2 = [
    {
        id: 1,
        value: 'Pike Push-Up (3 Sets of 12 Reps)',
        image: 'images/workout1.jpg',
    },
    {
        id: 2,
        value: 'Push-Up Hold (2 Sets of 1 Minute Holds)',
    },
    {
        id: 3,
        value: 'Forward Lean Push-Up (Until Failure)',
    },
    {
        id: 4,
        value: 'Shoulder Taps (3 Sets of 25 Reps)',
    }
]

const items3 = [
    {
        id: 1,
        value: 'Front Squats (3 Sets of 15 Reps)',
        image: 'images/workout1.jpg',
    },
    {
        id: 2,
        value: 'Side Lunges (3 Sets of 12 Reps)',
    },
    {
        id: 3,
        value: 'Pendulum Lunges (3 Sets of 12 Reps)',
    },
    {
        id: 4,
        value: 'Single Leg Romanian Dead-Lift (3 Sets of 10 Reps)',
    },
    {
        id: 5,
        value: 'Step-Ups (3 Sets of 10 Reps)',
    }
]

const items4 = [
    {
        id: 1,
        value: 'Tricep-Dips (3 Sets of 12 Reps)',
        image: 'images/workout1.jpg',
    },
    {
        id: 2,
        value: 'Diamond/Close-Grip Push-Up (Until Failure)',
    },
    {
        id: 3,
        value: 'Bicep Pull Hold (1 Minute)',
    },
    {
        id: 4,
        value: 'Bicep Curls (3 Sets of 20)',
    }
]

const items5 = [
    {
        id: 1,
        value: 'Sit-Ups (Until failure)',
        image: 'images/workout1.jpg',
    },
    {
        id: 2,
        value: 'Bicycle Crunches (3 Sets of 20 Reps)',
    },
    {
        id: 3,
        value: 'Partial Crunches (3 Sets of 20 Reps)',
    },
    {
        id: 4,
        value: 'Russian Twist (2 Sets of 20 Reps)',
    },
    {
        id: 5,
        value: 'Plank (One Minute)',
    }
]
const Profile = () => {

    return (
        <section className="profile-section">
            <div className="dd-container">
                <DropDown1 title="BACK WORKOUT" items={items1} multiSelect />
                <DropDown1 title="SHOULDER WORKOUT" items={items2} multiSelect />
                <DropDown1 title="LEG WORKOUT" items={items3} multiSelect />
                <DropDown1 title="ARM WORKOUT" items={items4} multiSelect />
                <DropDown1 title="AB WORKOUT" items={items5} multiSelect />
                <Stopwatch/>
            </div>
        </section>
    )
}

export default Profile;