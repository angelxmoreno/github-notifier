import React, {Component} from 'react';

class RepoList extends Component {
    render() {
        return (
            <section>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            some/repo
                        </h3>
                    </div>

                    <div className="panel-body">
                        Panel content
                    </div>
                    <div className="list-group">
                        <a href="#" className="list-group-item">
                            <i className="fa fa-pencil"></i>
                            SomeTitle


                            <span className="pull-right">
                            3 days ago
                            <i className="fa fa-eye"></i>
                        </span>
                        </a>
                    </div>
                    <div className="panel-footer">Panel footer</div>
                </div>
            </section>
        )
    }
}

export default RepoList;