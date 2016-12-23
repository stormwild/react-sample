import React from 'react';
import ReactDOM from 'react-dom';
import BookStore from './BookStore';

var InputExample = React.createClass({
    render() {
        return <input type="text" value="Hello" />;
    }
});

ReactDOM.render(<InputExample />, document.getElementById('root'));