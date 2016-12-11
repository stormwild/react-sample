var App = React.createClass({
    render: function(){
        return <div>
            <h1>Recent Changes</h1>
            <table>
                <thead><th>When</th><th>Who</th><th>Description</th></thead>
                <tr><td>2 minutes ago</td><td>Jill Dupre</td><td>Created new account</td></tr>
                <tr><td>1 hour ago</td><td>Lose White</td><td>Added fist chapter</td></tr>
                <tr><td>2 hours ago</td><td>Jordan Whash</td><td>Created new account</td></tr>
            </table>
        </div>;
    }
});

ReactDOM.render(React.createElement(App), document.getElementById('app'));