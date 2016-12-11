var App = React.createClass({
    render: function(){
        return(React.createElement("div", null, "Welcome to React!"));
    }
});

ReactDOM.render(React.createElement(App), document.getElementById('app'));