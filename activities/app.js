var title = 'Recent Changes',
    headings = ["Updated", "Author", "Change"],
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

var RecentChangesTable = React.createClass({
    render: function() {
        return <table className="recent-changes-table table table-bordered">
            { this.props.children }
        </table>;
    }
});

RecentChangesTable.Heading = React.createClass({
    render: function() {
        var heading = this.props.heading;
        return <th>{ heading }</th>;
    }
});

RecentChangesTable.Headings = React.createClass({
    render: function() {
        var headings = this.props.headings.map(function(heading) {
            return <RecentChangesTable.Heading heading={ heading } />
        });
        
        return <thead><tr>{ headings }</tr></thead>;
    }
});

RecentChangesTable.Row = React.createClass({
    render: function() {
        var row = this.props.changeSet;
        return <tr><td>{ row.when }</td><td>{ row.who }</td><td>{ row.description }</td></tr>;
    }
});

RecentChangesTable.Rows = React.createClass({
    render: function() {
        var rows = this.props.changeSets.map(function(row) {
            return <RecentChangesTable.Row changeSet={ row } />
        });
        
        return <tbody>{ rows }</tbody>;
    }
});

var App = React.createClass({
    propTypes: {
        headings: React.PropTypes.array,
        changeSets: React.PropTypes.array,
        title: React.PropTypes.string.isRequired
    },
    
    getDefaultProps: function() {
        return {
            headings: ['When', 'Who', 'What Changed']
        };
    },
    
    render: function () {
        return <div>
            <h1>{ this.props.title }</h1>
            <RecentChangesTable>
                <RecentChangesTable.Headings headings={ this.props.headings } />
                <RecentChangesTable.Rows changeSets={ this.props.changeSets } />
            </RecentChangesTable>
        </div>;
    }
});

var props = { title: title, changeSets: data };
ReactDOM.render(<App { ...props } />, document.getElementById('app'));

