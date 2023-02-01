require("dotenv").config();

export default {
    port: Number(process.env.PORT) || 4010,
    dbConnectLink: process.env.DBCONNECTLINK || '',
}

