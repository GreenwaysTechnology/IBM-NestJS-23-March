import { Cat } from '../graphql-schema';
export declare class CatsService {
    private readonly cats;
    create(cat: Cat): Cat;
    findAll(): Cat[];
    findOneById(id: number): Cat;
}
