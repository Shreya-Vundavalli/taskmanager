import { Migration } from '@mikro-orm/migrations';

export class Migration20260209123006 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "category" ("id" serial primary key, "name" varchar(255) not null);`);

    this.addSql(`create table "user" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null);`);

    this.addSql(`create table "task" ("id" serial primary key, "title" varchar(255) not null, "user_id" int not null);`);

    this.addSql(`create table "task_categories" ("task_id" int not null, "category_id" int not null, constraint "task_categories_pkey" primary key ("task_id", "category_id"));`);

    this.addSql(`alter table "task" add constraint "task_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;`);

    this.addSql(`alter table "task_categories" add constraint "task_categories_task_id_foreign" foreign key ("task_id") references "task" ("id") on update cascade on delete cascade;`);
    this.addSql(`alter table "task_categories" add constraint "task_categories_category_id_foreign" foreign key ("category_id") references "category" ("id") on update cascade on delete cascade;`);
  }

}
