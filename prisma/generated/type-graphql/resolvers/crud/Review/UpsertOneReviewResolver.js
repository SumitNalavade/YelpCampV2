"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReviewResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneReviewArgs_1 = require("./args/UpsertOneReviewArgs");
const Review_1 = require("../../../models/Review");
const helpers_1 = require("../../../helpers");
let UpsertOneReviewResolver = class UpsertOneReviewResolver {
    async upsertOneReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Review_1.Review, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneReviewArgs_1.UpsertOneReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneReviewResolver.prototype, "upsertOneReview", null);
UpsertOneReviewResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], UpsertOneReviewResolver);
exports.UpsertOneReviewResolver = UpsertOneReviewResolver;
