"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReviewResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyReviewArgs_1 = require("./args/DeleteManyReviewArgs");
const Review_1 = require("../../../models/Review");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyReviewResolver = class DeleteManyReviewResolver {
    async deleteManyReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReviewArgs_1.DeleteManyReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyReviewResolver.prototype, "deleteManyReview", null);
DeleteManyReviewResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], DeleteManyReviewResolver);
exports.DeleteManyReviewResolver = DeleteManyReviewResolver;
