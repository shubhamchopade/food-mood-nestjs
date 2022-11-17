import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feed-post')
export class RecipeInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;
}
