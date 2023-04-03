import { Module } from '@nestjs/common';
import { CatsService } from './cat.service';
import { CatsResolver } from './cats.resolver';

@Module({
    providers: [CatsService, CatsResolver]
})
export class CatsModule { }
