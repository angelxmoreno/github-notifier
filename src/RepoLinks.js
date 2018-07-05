import React, {Component} from 'react';

class RepoLinks extends Component {
    constructor(props) {
        super(props);
        let repos = props.appData.repos.filter((repo,i)=> repo.notifications.length);
        this.state = {
            active: repos[0].id,
            repos: repos
        };
    }

    handleClick(repo) {
        return (e) => {
            this.setState({
                active: repo.id
            });
        }
    }

    showRepoLinks() {
        return this.state.repos.map((repo, i) => {
            let is_active = repo.id === this.state.active;
            return (
                <RepoLink
                    key={'repoLink' + i}
                    label={repo.url}
                    metric={repo.notifications.length}
                    isActive={is_active}
                    onClick={this.handleClick(repo)}
                />
            );
        });
    }

    render() {
        return (
            <div className="list-group">
                {this.showRepoLinks()}
            </div>
        )
    }
}

class RepoLink extends Component {
    render() {
        let class_name = (this.props.isActive) ? 'active list-group-item': 'list-group-item';

        return (
            <a href="#" className={class_name} onClick={this.props.onClick}>

                {this.props.label}
                <span className="badge pull-right">
                    {this.props.metric}
                </span>
            </a>
        );
    }
}

export default RepoLinks;