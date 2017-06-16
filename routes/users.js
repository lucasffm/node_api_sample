module.exports = (app) => {
    const UsersController = app.controllers.UsersController;
        app.get('/users/', UsersController.index);
        app.post('/users/', UsersController.create);
        app.get('/users/:id', UsersController.findOne);
        app.put('/users/:id', UsersController.update);
        app.delete('/users/:id', UsersController.delete);
};
