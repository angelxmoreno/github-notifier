import React, {Component} from 'react';

const RepoLink = ({repoId, isActive, onClick, label, metric}) => {
    const class_name = (isActive) ? 'active list-group-item' : 'list-group-item';
    const handleClick = (e) => { e.preventDefault(); onClick(repoId)};
    
    return (
        <a href="#" className={class_name} onClick={handleClick}>
            {label}
            <span className="badge pull-right">
                {metric}
            </span>
        </a>
    );
};

class RepoLinks extends Component {
    constructor(props) {
        super(props);
        let repos = props.appData.repos.filter((repo, i) => repo.notifications.length);
        this.state = {
            active: repos[0].id,
            repos: props.appData.repos ? repos : []
        };

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(repoId) {
        this.setState({
            active: repoId
        });
    }

    render() {
        return (
            <div className="list-group">
                {this.state.repos.map((repo, i) => {
                    const is_active = repo.id === this.state.active;
                    return (
                        <RepoLink
                            key={'repoLink' + i}
                            label={repo.url}
                            repoId={repo.id}
                            metric={repo.notifications.length}
                            isActive={is_active}
                            onClick={this.onSelect}
                        />
                    );
                })}
            </div>
        )
    }
}

export default RepoLinks;
