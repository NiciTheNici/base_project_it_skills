import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
    
  @Column()
  title: string;

  @Column()
  note_text: string;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
