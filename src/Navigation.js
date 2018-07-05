import React, {Component} from 'react';
import Filter from './Filter';
import RepoLinks from './RepoLinks';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <Filter appData={this.props.appData}/>
                <hr/>
                <RepoLinks appData={this.props.appData}/>
            </section>
        )
    }
}

export default Navigation;