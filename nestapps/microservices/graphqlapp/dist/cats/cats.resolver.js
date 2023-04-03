"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const cat_service_1 = require("./cat.service");
const create_cat_dto_1 = require("./dto/create-cat-dto");
const pubSub = new graphql_subscriptions_1.PubSub();
let CatsResolver = class CatsResolver {
    constructor(catsService) {
        this.catsService = catsService;
    }
    async getCats() {
        return this.catsService.findAll();
    }
    async findOneById(id) {
        return this.catsService.findOneById(id);
    }
    async create(args) {
        const createdCat = await this.catsService.create(args);
        pubSub.publish('catCreated', { catCreated: createdCat });
        return createdCat;
    }
    catCreated() {
        return pubSub.asyncIterator('catCreated');
    }
};
__decorate([
    (0, graphql_1.Query)('cats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatsResolver.prototype, "getCats", null);
__decorate([
    (0, graphql_1.Query)('cat'),
    __param(0, (0, graphql_1.Args)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatsResolver.prototype, "findOneById", null);
__decorate([
    (0, graphql_1.Mutation)('createCat'),
    __param(0, (0, graphql_1.Args)('createCatInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], CatsResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Subscription)('catCreated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsResolver.prototype, "catCreated", null);
CatsResolver = __decorate([
    (0, graphql_1.Resolver)('Cat'),
    __metadata("design:paramtypes", [cat_service_1.CatsService])
], CatsResolver);
exports.CatsResolver = CatsResolver;
//# sourceMappingURL=cats.resolver.js.map