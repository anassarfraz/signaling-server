import { Column, Entity, ManyToOne, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';
import { User } from './user.entity';

@Entity({ name: 'UserRole' })
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  //relationship's columns
  @Column({ nullable: true })
  userId: string;

  @Column({ nullable: true, type: 'uuid' })
  roleId: string;

  //relationships
  @ManyToOne(() => User, (user) => user.userRoles)
  user: User;

  @ManyToOne(() => Role, (role) => role.userRoles)
  role: Role;

  //dates
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: string;
}
