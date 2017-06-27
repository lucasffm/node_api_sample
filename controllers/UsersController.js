module.exports = (app) => {
    const Users = app.db.models.Users;
    let UsersController = {
        index: (req, res) => {
            // "/users": Lista usuario
            Users.findAll({})
                .then((result) => res.json(result))
                .catch((error) => res.status(412).json({msg: error.message}));
        },
        create: (req, res) => {
            // "/users": Cadastra nova usuario
            Users.create(req.body)
                .then((result) => res.json(result))
                .catch((error) => res.status(412).json({msg: error.message}));
        },
        findOne: (req, res) => {
            // "/users/1": Consulta uma usuario pelo id
            Users.findOne({where: req.params})
                .then((result) => {
                    if (result) {
                        res.json(result);
                    }else{
                        res.sendStatus(404);
                    }
                })
                .catch(error => res.status(412).json({msg: error.message}));
        },
        findById: (req, res) => {
            Users.findById(req.user.id, {attributes: ['id', 'name', 'email']})
                .then((result) => res.json(result))
                .catch((error) => res.status(412).json({msg: error.message}));
        },
        update: (req, res) => {
            // "/users/1": Atualiza a usuario pelo id
            Users.update(req.body, {where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => res.status(412).json({msg: error.message}));
            
        },
        delete: (req, res) => {
            // "/users/1": Deleta a usuario pelo id
            Users.destroy({where: {id: req.user.id}})
                .then(result => res.sendStatus(204))
                .catch(error => res.status(412).json({msg: error.message}));
            
        }
    };
    return UsersController;
};