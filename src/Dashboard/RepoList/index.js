import React, {Component} from 'react';

const RepoPanel = ({repo}) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    {repo.url}
                </h3>
            </div>

            <div className="list-group">
                {repo.notifications.map((notification, i)=>{
                    return <Notification key={notification.id} notification={notification}/>;
                })}
            </div>
            <div className="panel-footer">Panel footer</div>
        </div>

    );
};

const Notification = ({notification}) => {
    const handleClick = () =>{ alert(notification.description)};
    return (
        <a href="#" className="list-group-item">
            {notification.title}

            <span className="pull-right">
                {notification.time.fromNow()}
            </span>
        </a>

    );
};

class RepoList extends Component {
    constructor(props) {
        super(props);
        let repos = props.appData.repos.filter((repo, i) => repo.notifications.length);
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
            return (
                <RepoPanel
                    key={'repoLink' + i}
                    repo={repo}
                />
            );
        });
    }

    render() {
        return (
            <section>
                {this.showRepoLinks()}
            </section>
        )
    }
}

export default RepoList;