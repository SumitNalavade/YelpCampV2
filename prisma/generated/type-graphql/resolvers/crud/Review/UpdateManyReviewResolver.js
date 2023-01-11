"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReviewResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyReviewArgs_1 = require("./args/UpdateManyReviewArgs");
const Review_1 = require("../../../models/Review");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyReviewResolver = class UpdateManyReviewResolver {
    async updateManyReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReviewArgs_1.UpdateManyReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyReviewResolver.prototype, "updateManyReview", null);
UpdateManyReviewResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], UpdateManyReviewResolver);
exports.UpdateManyReviewResolver = UpdateManyReviewResolver;
