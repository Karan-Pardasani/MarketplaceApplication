import React from 'react'

function FormButton(props) {

    if(props.style_ === "primary"){
        return (
            <button type={props.type} className="btn btn-primary">
                {props.text}
            </button>
        )
    }
}

export default FormButton