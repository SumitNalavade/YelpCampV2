"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReviewResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyReviewArgs_1 = require("./args/CreateManyReviewArgs");
const Review_1 = require("../../../models/Review");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyReviewResolver = class CreateManyReviewResolver {
    async createManyReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReviewArgs_1.CreateManyReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyReviewResolver.prototype, "createManyReview", null);
CreateManyReviewResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], CreateManyReviewResolver);
exports.CreateManyReviewResolver = CreateManyReviewResolver;
