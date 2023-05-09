import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person";

@Entity()
export class Console extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @ManyToMany(
    () => Person,
  )
  @JoinTable({
    name: "users_consoles"
  })
  users: Person[];}
