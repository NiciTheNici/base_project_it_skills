import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Animal extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  species: string;

  @Column()
  age: number;
}
