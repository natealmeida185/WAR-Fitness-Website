import React, {useState} from 'react';

const Checkbox = ({progress, setProgress, view}) => {

    const [checked, setChecked] = useState(false);

    const handleProgress = () => {
        if (!checked) {
            setProgress(progress += 5);
            setChecked(!checked);
        }

        else if (checked) {
            setProgress(progress -= 5);
            setChecked(!checked);
        }
    }

    return (
        <input name="checkbox" type="checkbox" onChange={handleProgress} checked={checked}></input>
    )
}

export default Checkbox;