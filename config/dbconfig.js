module.exports = {
    HOST: "containers-us-west-138.railway.app",
    USER: "root",
    PASSWORD: "J7LkQaAvoxyMpiSvlRkN",
    DB: "railway",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };