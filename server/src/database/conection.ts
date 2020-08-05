import knex from 'knex';
import path from 'path';

// migration => controlam as versões do BD

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    // nulo para os campos que não forem definidos
    useNullAsDefault: true,
})

export default db;