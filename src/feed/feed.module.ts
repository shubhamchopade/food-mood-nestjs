import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedController } from './controllers/feed.controller';
import { FeedService } from './controllers/feed.service';
import { RecipeInfoEntity } from './models/recipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeInfoEntity])],
  providers: [FeedService],
  controllers: [FeedController],
})
export class FeedModule {}
