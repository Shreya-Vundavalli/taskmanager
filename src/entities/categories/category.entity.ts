import { Entity, PrimaryKey, Property, ManyToMany, Collection } from '@mikro-orm/core'; // Added ManyToMany and Collection
import { Task } from '../tasks/tasks.entity'; // Add this for the M:M relation

@Entity()
export class Category {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToMany(() => Task, task => task.categories) // M:M; inverse side
  tasks = new Collection<Task>(this); // Now Collection is imported
}