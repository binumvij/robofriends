import React from "react";

const Scroll = (props) =>{
    return (
        <div style={{ overflowY: 'scroll', height: '500px', scrollbehavior: 'smooth'}}>
            {props.children}
        </div>
    );
}

export default Scroll;