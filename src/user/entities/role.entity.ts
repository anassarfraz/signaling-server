import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserRole } from './userRole.entity';

@Entity({ name: 'Role' })
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  // Array of permissions as a text array
  @Column('text', { array: true, default: [] })
  permissions: string[];

  // relationships
  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles: UserRole[];

  // dates
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: string;
}
