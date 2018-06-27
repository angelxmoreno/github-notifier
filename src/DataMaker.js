import _ from 'underscore';
import faker from 'faker';
import inflection from 'inflection';
import moment from 'moment';

class DataMaker {

    createOrgs(num) {
        let orgs = [];
        for (let i = 0; i < num; i++) {
            orgs.push(this.createOrg())
        }

        return orgs;
    }

    createRepos(Org, num) {
        let repos = [];
        for (let i = 0; i < num; i++) {
            repos.push(this.createRepo(Org))
        }

        return repos;
    }

    createNotifications(Repo, num) {
        let notifications = [];
        for (let i = 0; i < num; i++) {
            notifications.push(this.createNotification(Repo))
        }

        return notifications;
    }

    createOrg() {
        const Org = {
            id: _.uniqueId('org'),
            name: faker.company.companyName(),
            description: faker.company.catchPhrase(),
        };

        Org.repos = this.createRepos(Org, _.random(0, 5));

        return Org;
    }

    createRepo(Org) {
        const Repo = {
            id: _.uniqueId('repo'),
            name: faker.random.word(),
            description: faker.company.catchPhrase(),
        };

        Repo.url = inflection.tableize(inflection.dasherize(Org.name)) + '/' + inflection.tableize(inflection.dasherize(Repo.name));
        Repo.url = Repo.url.replace(/and/g, 'n');
        Repo.url = Repo.url.replace(/_/g, '');
        Repo.url = Repo.url.replace(/-/g, '');
        Repo.url = Repo.url.replace(/,/g, '');
        Repo.url = Repo.url.replace(/'/g, '');
        Repo.notifications = this.createNotifications(Repo, _.random(0, 5));

        return Repo;
    }

    createNotification(Repo) {
        let ago_numeral = _.random(0, 60 * 60 * 24 * 31);
        let time_ago = moment().subtract(ago_numeral, 'seconds');

        const Notification = {
            id: _.uniqueId('notification'),
            title: faker.lorem.sentence(),
            type: faker.hacker.adjective(),
            time: time_ago,
            is_read: !!_.random(0, 1),

        };

        return Notification;
    }
}

export default DataMaker;