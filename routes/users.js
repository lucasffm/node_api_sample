module.exports = (app) => {
    const UsersController = app.controllers.UsersController;
        app.get('/users/', UsersController.index);
        app.post('/users/', UsersController.create);
        app.get('/users/:id', UsersController.findOne);
        app.route('/user').all(app.auth.authenticate())
            .get(UsersController.findById)
            .delete(UsersController.delete);
        app.put('/users/:id', UsersController.update);
};
