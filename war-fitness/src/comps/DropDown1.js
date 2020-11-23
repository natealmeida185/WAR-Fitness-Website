import React, {useState} from 'react';

const DropDown1 = ({title, items = [], progress, setProgress}) => {
    const[open, setOpen]= useState(false);
    const[selection, setSelection]= useState([]);
    const toggle = () => setOpen(!open);
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

    function handleOnClick(item){
        if (!selection.some(current => current.id == item.id)) {
            setSelection([item]);
        }

        else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id != item.id
            );
            setSelection([...selectionAfterRemoval]);
        }
    }

    function isItemInSelection(item) {
        if (selection.some(current => current.id == item.id)) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
            <div className="dd-wrapper">
            <div 
                tabIndex={0} 
                className="dd-header" 
                role="button" 
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}>

                <div className="dd-header-title">
                    <p>{title}</p>
                </div>
                <div className="dd-header-action">
                    <p>{open ? '-' : '+'}</p>
                </div>
            </div>
            {open && (
                <ul className="dd-list">
                    {items.map(item => (
                    <li className="dd-list-item" key={item.id}>
                        <button type="button" onClick={() => handleOnClick(item)}>
                            <span>{item.value}</span>
                            <span id="item-selected">{isItemInSelection(item) && <img className="dd-image" src={item.image}></img>}</span>
                        </button>
                        <input onChange={handleProgress} checked={checked} id="progress-check" name="checkbox" type="checkbox"></input>
                    </li> 
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropDown1;