import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';

@Module({
    imports:[],
    controllers:[PersonController]
})
export class PersonModule {

}
