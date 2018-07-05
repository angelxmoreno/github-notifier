import React, {Component} from 'react';

const ALL = 'All';
const UNREAD = 'Unread';
const READ = 'Read';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: ALL,
            filters: [
                {
                    label: ALL,
                    metric: props.appData.getCountAllNotifications(),
                },
                {
                    label: READ,
                    metric: props.appData.getCountReadNotifications(),
                }, {
                    label: UNREAD,
                    metric: props.appData.getCountUnreadNotifications(),
                },
            ],
        };
    }

    handleClick(label) {
        return (e) => {
            this.setState({
                active: label
            });
        }
    }

    showFilterLinks() {
        return this.state.filters.map((filter, i) => {
            let is_active = filter.label === this.state.active;
            return (
                <FilterLink
                    key={'filterLink' + i}
                    label={filter.label}
                    metric={filter.metric}
                    isActive={is_active}
                    onClick={this.handleClick(filter.label)}
                />
            );
        });
    }

    render() {
        return (
            <ul className="nav nav-pills nav-stacked">
                {this.showFilterLinks()}
            </ul>
        )
    }
}

class FilterLink extends Component {
    render() {
        return (
            <li className={this.props.isActive ? 'active' : ''}>
                <a href="#" onClick={this.props.onClick}>
                    {this.props.label}
                    <span className="badge pull-right">{this.props.metric}</span>
                </a>
            </li>
        );
    }
}

export default Filter;