import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum AnimalType {
  MAMMAL,
  REPTILE,
  BIRD,
  AMPHIBIAN,
  FISH,
  INVERTEBRATE,
}

@Entity()
export class Animal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  species: string;

  @Column()
  age: number;

  @Column({
    type: "simple-enum",
    enum: AnimalType,
  })
  type: AnimalType
}
