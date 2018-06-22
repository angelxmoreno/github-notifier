import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return (
            <section>
                <ul className="nav nav-pills nav-stacked">
                    <li className="active">
                        <a href="#">
                            All
                            <span className="badge pull-right">33</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Read
                            <span className="badge pull-right">22</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Unread
                            <span className="badge pull-right">11</span>
                        </a>
                    </li>
                </ul>
                <hr/>
                <div className="list-group">
                    <a href="#" className="list-group-item">
                        Repo name
                        <span className="badge pull-right">
                            33
                        </span>
                    </a>
                </div>
            </section>
        )
    }
}

export default Navigation;