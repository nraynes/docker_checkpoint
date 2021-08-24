import pgPromise from 'pg-promise';
const pgp = pgPromise({});
const dbParams = {
    platform: "postgresql",
    host: "database",
    port: "5432",
    username: "postgres",
    password: "mysecretpassword",
    database: "postgres"
};
const dbConnect = `${dbParams.platform}://${dbParams.username}:${dbParams.password}@${dbParams.host}:${dbParams.port}/${dbParams.database}`;
console.log(dbConnect)
var db = pgp(dbConnect)

//connect to db to verify 
db.connect()
    .then(obj => {
        const serverVersion = obj.client.serverVersion;
        console.log(`Connected to database, version `, serverVersion)
        obj.done();
    })
    .catch(error => {
        console.log('Database connection error...')
        console.log('ERROR:', error.message);
    });

export default db;