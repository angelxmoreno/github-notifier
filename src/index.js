import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GithubNotifier from './GithubNotifier';
import registerServiceWorker from './registerServiceWorker';
import DataMaker from './DataMaker';
import DashboardData from "./DashboardData";

const maker = new DataMaker();
const orgs = maker.createOrgs(5);
const mockData = new DashboardData(orgs);
console.log('mockData',mockData);
ReactDOM.render(<GithubNotifier appData={mockData}/>, document.getElementById('root'));
registerServiceWorker();
