module.exports = (app) => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log(`App listening on port ${app.get('port')}`);
        });
    });
};
