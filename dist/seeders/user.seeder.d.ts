import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
export default class UserSeeder implements Seeder {
    run(dataSource: DataSource): Promise<void>;
}
