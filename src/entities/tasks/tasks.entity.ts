import { Entity, PrimaryKey, Property, ManyToOne, ManyToMany, Collection } from '@mikro-orm/core'; // Added ManyToMany and Collection
import { User } from '../users/users.entity'; // Already there
import { Category } from '../categories/category.entity'; // Add this for the M:M relation

@Entity()
export class Task {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @ManyToOne(() => User) // Many tasks to one user; creates foreign key
  user!: User; // Reference to User; not nullable for simplicity

  @ManyToMany(() => Category, category => category.tasks, { owner: true }) // Owner side for M:M
  categories = new Collection<Category>(this); // Now Collection is imported
}