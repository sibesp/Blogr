import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('login');
    this.route('user');
    this.resource('blog', function() {
        this.route('create');
        this.route('edit', { path: '/:blogId/edit'});
        this.route('detail', { path: '/:blogId' });
    });
});

export default Router;
