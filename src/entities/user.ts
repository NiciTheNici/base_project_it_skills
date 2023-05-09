import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  username: string;

  @Column()
  first_name: string;
  
  @Column({
    unique: true
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
    eye_color: "brown",
    height: 179,
  }

  @Column({
    type: "simple-array",
    default: [],
  })
  pets: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
