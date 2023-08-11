import React from 'react'

function TextField(props) {
    return (<>
            <label>{props.label}</label>
            <input
                type={props.type_}
                className="form-control"
                placeholder={props.placeholder}
            />
        </>)
}

export default TextField