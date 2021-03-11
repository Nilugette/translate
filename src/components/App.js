import React from 'react';

class App extends React.Component {
    state = { language: 'english' }

    onLanguageChange = language => {
        this.setState({ language })
    }

    render() {
        return (
        <div className="ui container" style={{ marginTop: '10px'}} >
            <div>
                Select a language:
                <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
                <i className="flag fr" onClick={() => this.onLanguageChange('french')}></i>
            </div>
            {this.state.language}
        </div>
        )
    }
}


export default App