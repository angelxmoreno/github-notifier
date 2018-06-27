
class DashboardData {
    constructor(orgs) {
        this.orgs = orgs;
        this.repos = this.orgs
            .map((org) => org.repos)
            .reduce((accumulator, currentValue)=>accumulator.concat(currentValue));
        this.notifications = this.repos
            .map((repo) => repo.notifications)
            .reduce((accumulator, currentValue)=>accumulator.concat(currentValue));
    }

    getCountAllNotifications() {
        return this.notifications.length;
    }

    getCountReadNotifications() {
        return this.notifications
            .filter((notification)=>notification.is_read)
            .length;
    }

    getCountUnreadNotifications() {
        return this.notifications
            .filter((notification)=>!notification.is_read)
            .length;
    }
}

export default DashboardData;