module.exports = (app) => {
    const TasksController = app.controllers.TasksController;
    app.route('/tasks').all(app.auth.authenticate()).get(TasksController.index);
    app.route('/tasks').all(app.auth.authenticate()).post(TasksController.create);
    app.route('/tasks/:id').all(app.auth.authenticate()).get(TasksController.findOne);
    app.route('/tasks/:id').all(app.auth.authenticate()).put(TasksController.updateOne);
    app.route('/tasks/:id').all(app.auth.authenticate()).delete(TasksController.delete);
};
