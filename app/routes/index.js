'use strict';

module.exports = (app, router) => {
    const mainController = app.controller('main');
    let service = '/' + process.env.SERVICE

    // router.use(service + '/testing', app.route('testing'));
    router.get('/', mainController.index);
};