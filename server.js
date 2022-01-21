const app = require('./app')

const PORT = process.env.PORT || 3000

let app_server

if(process.env.NODE_ENV === 'test'){
    app_server = app.listen(0, () => {
        console.log(`Running on port ${app_server.address().port} for testing`)
    })
} else {
    app_server = app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`)
    })
}

module.exports = app_server
