// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        url: 'http://127.0.0.1:1234',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '1234'
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://sequensis.azurewebsites.net',
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: 'postmaster@blog.sequensis.co.uk',
                    pass: '6pe50vcgx847'
                }
            }
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: process.env.PORT
        }
    }
};

// Export config
module.exports = config;