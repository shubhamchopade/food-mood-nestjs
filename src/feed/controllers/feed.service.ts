import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { RecipeInfoEntity } from '../models/recipe.entity';
import { RecipeInfo } from '../models/recipe.interface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(RecipeInfoEntity)
    private readonly recipeInfoRepository: Repository<RecipeInfoEntity>,
  ) {}

  findRecipe(): Observable<RecipeInfo[]> {
    return from(this.recipeInfoRepository.find());
  }
}
