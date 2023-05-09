import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Animal } from "./animal";
import { User } from "./user";

@Entity()
export class Pet extends Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    () => User,
    user => user.pets,
  )
  @JoinColumn({ // responsible for showing "user_id" Column when you query the Pet table
    name: 'user_id'
  })
  user: User;
  
}
