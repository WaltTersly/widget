import React, {useState, useEffect, useRef} from 'react'

function Dropdown(props) {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        const onBodyClick = (event) => {

            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, {capture: true});

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture:true});
        };

    }, []);

    const renderOptions = props.options.map((option) => {
        if (option.value === props.selected.value) {
            return null;
        }

        return(
            <div key={option.value} className="item" onClick={()=>props.onSelected(option)}>
                {option.label}
            </div>
        );
    });

    const selectedcolor = props.selected;

    return (
        <div className="ui container">
            <div ref = {ref} className="ui form">
                <div className="field">
                    <label className="label">{props.label}</label>
                    <div  onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open ? `visible active`: ''}`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selectedcolor.label}</div>
                        <div className={`menu ${open ? 'visible transition': ''} `}>
                            {renderOptions}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Dropdown;
