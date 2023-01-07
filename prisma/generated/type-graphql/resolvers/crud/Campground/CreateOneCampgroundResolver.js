"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCampgroundResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCampgroundArgs_1 = require("./args/CreateOneCampgroundArgs");
const Campground_1 = require("../../../models/Campground");
const helpers_1 = require("../../../helpers");
let CreateOneCampgroundResolver = class CreateOneCampgroundResolver {
    async createOneCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Campground_1.Campground, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCampgroundArgs_1.CreateOneCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneCampgroundResolver.prototype, "createOneCampground", null);
CreateOneCampgroundResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], CreateOneCampgroundResolver);
exports.CreateOneCampgroundResolver = CreateOneCampgroundResolver;
