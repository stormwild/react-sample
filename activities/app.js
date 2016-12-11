var App = React.createClass({
    render: function(){
        return <table>
            <thead><th>When</th><th>Who</th><th>Description</th></thead>
            <tr><td>2 minutes ago</td><td>Jill Dupre</td><td>Created new account</td></tr>
            <tr><td>1 hour ago</td><td>Lose White</td><td>Added fist chapter</td></tr>
            <tr><td>2 hours ago</td><td>Jordan Whash</td><td>Created new account</td></tr>
        </table>;
    }
});

ReactDOM.render(React.createElement(App), document.getElementById('app'));