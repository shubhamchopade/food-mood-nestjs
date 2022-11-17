import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { create } from 'domain';
import { Observable } from 'rxjs';
import { RecipeInfo } from '../models/recipe.interface';
import { FeedService } from './feed.service';

@Controller('recipe')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  create(@Body() recipe: RecipeInfo): Observable<RecipeInfo> {
    return this.feedService.createRecipe(recipe);
  }

  @Get('all')
  findAll(): Observable<RecipeInfo[]> {
    return this.feedService.findRecipes();
  }

  @Get(':id')
  find(@Param('id') id: number): Observable<RecipeInfo[]> {
    return this.feedService.findRecipe(id);
  }
}
