import React from 'react';
import ReactDOM from 'react-dom';
import BookStore from './BookStore';

var InputExample = React.createClass({
    getInitialState() {
        return ({ name: '-' });
    },
    
    handleChangeEvent(event) {
        this.setState({ name: event.target.value.toUpperCase() });
    },
    
    render() {
        return <input type="text" value={ this.state.name } onChange={ this.handleChangeEvent } />;
    }
});

ReactDOM.render(<InputExample />, document.getElementById('root'));