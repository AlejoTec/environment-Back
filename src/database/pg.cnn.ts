import { Client } from 'pg';
const cnnDb = {
    user: 'postgres',
    password: 'abc123',
    host: 'localhost',
    database: 'WheelsEnvironmentDB',
    port: 5432,
}




const WheelsEnvDB = async () => {
    try {
        const client = new Client(cnnDb);
        await client.connect();
        return client;
    }
    catch(error) {
        console.error(
            'Error en la conexión a la DB',
            error
        );
    }
}




export { WheelsEnvDB };
