import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class Field extends React.Component {
    static contextType = LanguageContext

    render() {
        const text = this.context === 'english' ? 'Name' : 'Nom'
        return (
            <div className="ui field">
                <label htmlFor="field">{text}</label>
                <input type="text" name="field"/>
            </div>
        )
    }
}


export default Field