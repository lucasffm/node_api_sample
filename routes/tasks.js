module.exports = (app) => {
    const Tasks = app.db.models.Tasks;
    const TasksController = app.controllers.TasksController;
    app.get('/tasks', TasksController.index);    
    app.post('/tasks', TasksController.create);
    app.get('/tasks/:id', TasksController.findOne);
    app.put('/tasks/:id', TasksController.updateOne);
    app.delete('/tasks/:id', TasksController.delete);
};
