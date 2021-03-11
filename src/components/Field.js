import React from 'react';

class Field extends React.Component {
   

    render() {
        return (
        <div className="ui field">
            <label htmlFor="field">Name</label>
            <input type="text" name="field"/>
        </div>
        )
    }
}


export default Field