"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneReviewResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneReviewArgs_1 = require("./args/DeleteOneReviewArgs");
const Review_1 = require("../../../models/Review");
const helpers_1 = require("../../../helpers");
let DeleteOneReviewResolver = class DeleteOneReviewResolver {
    async deleteOneReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Review_1.Review, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneReviewArgs_1.DeleteOneReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneReviewResolver.prototype, "deleteOneReview", null);
DeleteOneReviewResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], DeleteOneReviewResolver);
exports.DeleteOneReviewResolver = DeleteOneReviewResolver;
