import React, {useState} from 'react';

function DropDown1({ title, items = []}) {
    const[open, setOpen]= useState(false);
    const[selection, setSelection]= useState([]);
    const toggle = () => setOpen(!open);

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
                    </li> 
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropDown1;