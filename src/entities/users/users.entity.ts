import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core'; // Add OneToMany and Collection
import { Task } from '../tasks/tasks.entity'; // Import Task for the relation

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  email!: string;

  @OneToMany(() => Task, task => task.user) // Inverse: User has many Tasks; task.user links back
  tasks = new Collection<Task>(this); // Collection to hold related Tasks
}