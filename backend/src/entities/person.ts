import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Pet } from "./pet";

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
    
  @Column()
  username: string;

  @Column()
  first_name: string;
  
  @Column({
    // unique: true
  })
  email: string;

  @Column({
  })
  age: number;

  @Column({
    default: true
  })
  likes_cats: boolean;

  @Column({
    type: "simple-json",
    nullable: true,
  })
  additional_info: {
    eye_color: string,
    height: number,
  }

  @Column("text", {
    array: true,
    default: []
  })
  keyboards: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => Pet,
    pet => pet.user
  )
  pets: Pet[];
}
