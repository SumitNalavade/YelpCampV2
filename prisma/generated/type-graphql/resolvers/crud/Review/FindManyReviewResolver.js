"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReviewResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyReviewArgs_1 = require("./args/FindManyReviewArgs");
const Review_1 = require("../../../models/Review");
const helpers_1 = require("../../../helpers");
let FindManyReviewResolver = class FindManyReviewResolver {
    async reviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Review_1.Review], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReviewArgs_1.FindManyReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyReviewResolver.prototype, "reviews", null);
FindManyReviewResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], FindManyReviewResolver);
exports.FindManyReviewResolver = FindManyReviewResolver;
