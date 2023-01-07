"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCampgroundResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCampgroundArgs_1 = require("./args/FindManyCampgroundArgs");
const Campground_1 = require("../../../models/Campground");
const helpers_1 = require("../../../helpers");
let FindManyCampgroundResolver = class FindManyCampgroundResolver {
    async campgrounds(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Campground_1.Campground], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCampgroundArgs_1.FindManyCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCampgroundResolver.prototype, "campgrounds", null);
FindManyCampgroundResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], FindManyCampgroundResolver);
exports.FindManyCampgroundResolver = FindManyCampgroundResolver;
