import React, {Component} from 'react';
import Navigation from './Navigation';
import RepoList from './RepoList';

class Dashboard extends Component {
    render() {
        return (
            <section>
                <div className="page-header">
                    <h1>Dashboard</h1>
                </div>
                <div className="col-md-12">

                    <div className="col-md-4">
                        <Navigation/>
                    </div>

                    <div className="col-md-8">
                        <RepoList />
                    </div>
                </div>
            </section>
        )
    }
}

export default Dashboard;