import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Animal } from "./animal";
import { Person } from "./person";

@Entity()
export class Pet extends Animal {
  @Column()
  name: string;

  @ManyToOne(
    () => Person,
    person => person.pets,
  )
  @JoinColumn({ // responsible for showing "user_id" Column when you query the Pet table
    name: 'person_id'
  })
  user: Person;
  
}
