import { Injectable } from '@nestjs/common';
import { Cat } from '../graphql-schema';

@Injectable()
export class CatsService {
    private readonly cats: Array<Cat & { ownerId?: number }> = [
        { id: 1, name: 'Cat1', age: 5, ownerId: 1 },
        { id: 2, name: 'Cat2', age: 5, ownerId: 1 },
        { id: 3, name: 'Cat3', age: 5, ownerId: 1 },
        { id: 4, name: 'Cat4', age: 5, ownerId: 1 },
        { id: 5, name: 'Cat5', age: 5, ownerId: 1 }
    ];

    create(cat: Cat): Cat {
        cat.id = this.cats.length + 1;
        this.cats.push(cat);
        return cat;
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOneById(id: number): Cat {
        return this.cats.find(cat => cat.id === id);
    }
}