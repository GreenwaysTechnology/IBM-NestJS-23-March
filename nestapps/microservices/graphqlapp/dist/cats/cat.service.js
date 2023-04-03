"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
let CatsService = class CatsService {
    constructor() {
        this.cats = [
            { id: 1, name: 'Cat1', age: 5, ownerId: 1 },
            { id: 2, name: 'Cat2', age: 5, ownerId: 1 },
            { id: 3, name: 'Cat3', age: 5, ownerId: 1 },
            { id: 4, name: 'Cat4', age: 5, ownerId: 1 },
            { id: 5, name: 'Cat5', age: 5, ownerId: 1 }
        ];
    }
    create(cat) {
        cat.id = this.cats.length + 1;
        this.cats.push(cat);
        return cat;
    }
    findAll() {
        return this.cats;
    }
    findOneById(id) {
        return this.cats.find(cat => cat.id === id);
    }
};
CatsService = __decorate([
    (0, common_1.Injectable)()
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cat.service.js.map