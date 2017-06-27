module.exports = {
    database: 'ntask',
    username: 'root',
    password: 'root',
    params: {
        dialect: 'mysql',
        define: {
            userscore: true,
        }
    },
    jwtSecret: 'Nta$k-AP1',
    jwtSession: {session: false}
};