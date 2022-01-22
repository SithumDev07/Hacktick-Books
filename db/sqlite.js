const sqlite3 = require('sqlit3').verbose()

let _DBConnection

const connectDatabase = async () => {
    if(process.env.NODE_ENV === 'test'){
        return new sqlite3.Database(':memory:', sqlite3.OPEN_READWRITE)
    }else {
        return new sqlite3.Database('./main.sqlite', sqlite3.OPEN_READWRITE)
    }
}

const getDBConnection = async () => {
    if(!_DBConnection){
        _DBConnection = await connectDatabase()
    }

    return _DBConnection
}

const closeConnection = close => {
    if(conn){
        return conn.close()
    }
}

module.exports = {
    getDBConnection,
    closeConnection
}
