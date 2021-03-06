module.exports = (app) => {
    const Tasks = app.db.models.Tasks;
    let TasksController = {
        index: (req, res) => {
            // "/tasks": Lista tarefas
            Tasks.findAll({where: {user_id: req.user.id}})
                .then((result) => res.json(result))
                .catch((error) => res.status(412).json({msg: error.message}));
        },

        create: (req, res) => {
            // "/tasks": Cadastra nova tarefa\
            req.body.user_id = req.user.id;
            Tasks.create(req.body)
                .then((result) => res.json(result))
                .catch((error) => res.status(412).json({msg: error.message}));
        },

        findOne: (req, res) => {
            // "/tasks/1": Consulta uma tarefa pelo id
            Tasks.findOne({where: {id: req.params.id, user_id: req.user.id}})
                .then((result) => {
                    if (result) {
                        res.json(result);
                    }else{
                        res.sendStatus(404);
                    }
                })
                .catch(error => res.status(412).json({msg: error.message}));
        },

        updateOne: (req, res) => {
            // "/tasks/1": Atualiza a tarefa pelo id
            Tasks.update(req.body, {where: {id: req.params.id, user_id: req.user.id}})
                .then(result => res.sendStatus(204))
                .catch(error => res.status(412).json({msg: error.message}));
        
        },

        delete: (req, res) => {
        // "/tasks/1": Deleta a tarefa pelo id
        Tasks.destroy({where: {id: req.params.id, user_id: req.user.id}})
            .then(result => res.sendStatus(204))
            .catch(error => res.status(412).json({msg: error.message}));
        
        }

    };
    return TasksController;
};