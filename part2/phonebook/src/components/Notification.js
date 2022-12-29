import React from 'react'

const Notification = ({errorMessage, message}) => {
    const messageStyle =
    {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }

    const errorStyle =
    {
        color: 'red',
        fontStyle: 'italic',
        fontSize: 16
    }

    return(
        <>
            <div style={messageStyle}>{message}</div>
            <div style={errorStyle}>{errorMessage}</div>
        </>
    )

    
}

export default Notification