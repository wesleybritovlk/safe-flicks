import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceOptionsByProfile = (): DataSourceOptions => (
    {
        type: process.env.DB_TYPE as any,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        ssl: require,
        synchronize: true,
        logging: true
    });

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource: DataSource = new DataSource({
                ...dataSourceOptionsByProfile(),
                entities: [__dirname + '/../**/*.entity{.ts,.js}']
            });
            return dataSource.initialize();
        }
    }
];
