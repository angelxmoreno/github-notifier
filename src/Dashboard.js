import React, {Component} from 'react';
import Navigation from './Navigation';
import RepoList from './RepoList';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <div className="page-header">
                    <h1>Dashboard</h1>
                </div>
                <div className="col-md-12">

                    <div className="col-md-4">
                        <Navigation appData={this.props.appData}/>
                    </div>

                    <div className="col-md-8">
                        <RepoList appData={this.props.appData}/>
                    </div>
                </div>
            </section>
        )
    }
}


export default Dashboard;