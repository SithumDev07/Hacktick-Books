const path = require('path')

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            fileName: "./main.sqlite"
        },
        useNullAsDefault: true,
        migrations: {
            directory: path.join(__dirname, "db/migrations")
        },
        seeds: {
            directory: path.join(__dirname, 'db/seeds')
        }
    },
    test: {
        client: "sqlite3",
        connection: ":memory",
        useNullAsDefault: true,
        migrations: {
            directory: path.join(__dirname, "db/migrations")
        },
        seeds: {
            directory: path.join(__dirname, 'db/seeds')
        }
    }
}

