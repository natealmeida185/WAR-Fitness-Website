import React, {useState} from 'react';
import DropDown1 from './DropDown1';
import Stopwatch from './Stopwatch';

const ProgressBar = () => {

let [progress, setProgress] = useState(0);

const items1 = [
    {
        id: 1,
        value: 'Wide Grip Pushups (Until Failure)',
        image: 'images/wide-grip.jpg',
    },
    {
        id: 2,
        value: 'Bent-Over Row (3 Sets of 12 Reps)',
        image: 'images/bent-over.jpg',
    },
    {
        id: 3,
        value: 'Mid Table-Row (3 Sets of 12 Reps)',
        image: 'images/table-row.jpg',
    },
    {
        id: 4,
        value: 'Sliding Floor Pull-Up (2 Sets of 12 Reps)',
        image: 'images/floor-pull.jpg',
    },
    {
        id: 5,
        value: 'Superman (2 Sets of 15 Reps)',
        image: 'images/superman.jpg',
    }
]

const items2 = [
    {
        id: 1,
        value: 'Pike Push-Up (3 Sets of 12 Reps)',
        image: 'images/pike-push-up.jpg',
    },
    {
        id: 2,
        value: 'Push-Up Hold (2 Sets of 1 Minute Holds)',
        image: 'images/push-up-hold.jpg',
    },
    {
        id: 3,
        value: 'Forward Lean Push-Up (Until Failure)',
        image: 'images/lean-forward.jpg',
    },
    {
        id: 4,
        value: 'Shoulder Taps (3 Sets of 25 Reps)',
        image: 'images/shoulder-taps.jpg',
    }
]

const items3 = [
    {
        id: 1,
        value: 'Front Squats (3 Sets of 15 Reps)',
        image: 'images/front-squat.jpg',
    },
    {
        id: 2,
        value: 'Side Lunges (3 Sets of 12 Reps)',
        image: 'images/side-lunges.jpg',
    },
    {
        id: 3,
        value: 'Front Lunges (3 Sets of 12 Reps)',
        image: 'images/front-lunges.jpg',
    },
    {
        id: 4,
        value: 'Single Romanian Dead-Lift (3 Sets of 10 Reps)',
        image: 'images/romanian-deadlift.jpg',
    },
    {
        id: 5,
        value: 'Step-Ups (3 Sets of 10 Reps)',
        image: 'images/step-ups.jpg',
    }
]

const items4 = [
    {
        id: 1,
        value: 'Tricep-Dips (3 Sets of 12 Reps)',
        image: 'images/tricep-dips.jpg',
    },
    {
        id: 2,
        value: 'Diamond/Close-Grip Push-Up (Until Failure)',
        image: 'images/diamond-pushups.jpg',
    },
    {
        id: 3,
        value: 'Bicep Pull Hold (1 Minute)',
        image: 'images/pull-hold.jpg',
    },
    {
        id: 4,
        value: 'Bicep Curls (3 Sets of 20)',
        image: 'images/bicep-curl.jpg',
    }
]

const items5 = [
    {
        id: 1,
        value: 'Sit-Ups (Until failure)',
        image: 'images/sit-ups.jpg',
    },
    {
        id: 2,
        value: 'Bicycle Crunches (3 Sets of 20 Reps)',
        image: 'images/bicycle-crunch.jpg',
    },
    {
        id: 3,
        value: 'Partial Crunches (3 Sets of 20 Reps)',
        image: 'images/partial-crunch.jpg',
    },
    {
        id: 4,
        value: 'Russian Twist (2 Sets of 20 Reps)',
        image: 'images/russian-twist.jpg',
    },
    {
        id: 5,
        value: 'Plank (One Minute)',
        image: 'images/plank.jpg',
    }
]

    return (
        <section>
            <div className="progress-bar">
                <label id="bar-title">FITNESS PROGRESS</label>
                <progress value={progress} max="100"></progress>   
                <h1>{progress}%</h1>
            </div>
            <DropDown1 title="BACK WORKOUT" progress={progress} setProgress={setProgress} items={items1} multiSelect />
            <DropDown1 title="SHOULDER WORKOUT" progress={progress} setProgress={setProgress} items={items2} multiSelect />
            <DropDown1 title="LEG WORKOUT" progress={progress} setProgress={setProgress} items={items3} multiSelect />
            <DropDown1 title="ARM WORKOUT" progress={progress} setProgress={setProgress} items={items4} multiSelect />
            <DropDown1 title="AB WORKOUT" progress={progress} setProgress={setProgress} items={items5} multiSelect />
            <Stopwatch/>
        </section>
    );
}

export default ProgressBar;