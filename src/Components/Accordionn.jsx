import React, { useState } from "react";


function Accordionn (props) {
    
    const items = props.items;

    const [activeIndex, setActiveIndex] = useState(null);

    const renderedItem = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '' ;

        return(
            <React.Fragment key={item.title}>
                <div className= {`title ${active}`} onClick= {() => {OnTitleClicked(index)}}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
    
                </div>
            </React.Fragment>
        );
    })

    const OnTitleClicked = (index) => {
        setActiveIndex(index);
    };

    return(
        <div className="ui styled accordion">
            {renderedItem}
            
        </div>
    );



}

export default Accordionn;