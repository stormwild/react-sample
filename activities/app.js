var title = 'Recent Changes',
    headings = ["Last change at", "By Author", "Summary"],
    data = [{ 
            "when": "2 minutes ago", 
            "who": "Jill Dupre", 
            "description": "Created new account"
        },
        {
            "when": "1 hour ago",
            "who": "Lose White",
            "description": "Added fist chapter"
        },
        {
            "when": "2 hours ago",
            "who": "Jordan Whash",
            "description": "Created new account"
        }];

var Heading = React.createClass({
    render: function() {
        var heading = this.props.heading;
        return <th>{ heading }</th>;
    }
});

var Headings = React.createClass({
    render: function() {
        var headings = this.props.headings.map(function(heading) {
            return <Heading heading={ heading } />
        });
        
        return <thead><tr>{ headings }</tr></thead>;
    }
});

var Row = React.createClass({
    render: function() {
        var row = this.props.changeSet;
        return <tr><td>{ row.when }</td><td>{ row.who }</td><td>{ row.description }</td></tr>;
    }
});

var Rows = React.createClass({
    render: function() {
        var rows = this.props.changeSets.map(function(row) {
            return <Row changeSet={ row } />
        });
        
        return <tbody>{ rows }</tbody>;
    }
});

var App = React.createClass({
    render: function () {
        return <div>
            <h1>{ this.props.title }</h1>
            <table className="table table-bordered">
                <Headings headings={ this.props.headings } />
                <Rows changeSets={ this.props.changeSets } />
            </table>
        </div>;
    }
});


ReactDOM.render(<App title={ title } headings={ headings } changeSets={ data } />, document.getElementById('app'));

// @TODO Namespace components in a top level namespace