import { Body, Controller, Get } from '@nestjs/common';
import { create } from 'domain';
import { Observable } from 'rxjs';
import { RecipeInfo } from '../models/recipe.interface';
import { FeedService } from './feed.service';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Get()
  findAll(): Observable<RecipeInfo[]> {
    return this.feedService.findRecipe();
  }
}
