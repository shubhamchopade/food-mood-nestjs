import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recipes')
export class RecipeInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '', nullable: true })
  country: string;
  @Column({ default: '', nullable: true })
  description: string;
  @Column({ default: '', nullable: true })
  id_: string;
  @Column({ default: '', nullable: true })
  keywords: string;
  @Column({ default: '', nullable: true })
  is_shoppable: string;
  @Column({ default: '', nullable: true })
  language: string;
  @Column({ default: '', nullable: true })
  name: string;
  @Column({ default: '', nullable: true })
  slug: string;
  @Column({ default: '', nullable: true })
  video_url: string;
  @Column({ default: '', nullable: true })
  is_licensed_video: string;
  @Column({ default: '', nullable: true })
  is_community: string;
  @Column({ default: '', nullable: true })
  thumbnail_url: string;
  @Column({ default: '', nullable: true })
  inspired_by: string;
  @Column({ default: '', nullable: true })
  linked_recipes: string;
  @Column({ default: '', nullable: true })
  tags: string;
  @Column({ default: '', nullable: true })
  cook_time: string;
  @Column({ default: '', nullable: true })
  prep_time: string;
  @Column({ default: '', nullable: true })
  total_time: string;
  @Column({ default: '', nullable: true })
  ratings_negative: string;
  @Column({ default: '', nullable: true })
  ratings_positive: string;
  @Column({ default: '', nullable: true })
  score: string;
  @Column({ default: '', nullable: true })
  protein: string;
  @Column({ default: '', nullable: true })
  fat: string;
  @Column({ default: '', nullable: true })
  calories: string;
  @Column({ default: '', nullable: true })
  sugar: string;
  @Column({ default: '', nullable: true })
  carbohydrates: string;
  @Column({ default: '', nullable: true })
  fiber: string;
}
