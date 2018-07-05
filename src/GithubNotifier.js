import React, {Component} from 'react';
import Dashboard from './Dashboard';


class GithubNotifier extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Dashboard appData={this.props.appData}/>
    }
}

export default GithubNotifier;