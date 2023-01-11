"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateReviewArgs_1 = require("./args/AggregateReviewArgs");
const CreateManyReviewArgs_1 = require("./args/CreateManyReviewArgs");
const CreateOneReviewArgs_1 = require("./args/CreateOneReviewArgs");
const DeleteManyReviewArgs_1 = require("./args/DeleteManyReviewArgs");
const DeleteOneReviewArgs_1 = require("./args/DeleteOneReviewArgs");
const FindFirstReviewArgs_1 = require("./args/FindFirstReviewArgs");
const FindFirstReviewOrThrowArgs_1 = require("./args/FindFirstReviewOrThrowArgs");
const FindManyReviewArgs_1 = require("./args/FindManyReviewArgs");
const FindUniqueReviewArgs_1 = require("./args/FindUniqueReviewArgs");
const FindUniqueReviewOrThrowArgs_1 = require("./args/FindUniqueReviewOrThrowArgs");
const GroupByReviewArgs_1 = require("./args/GroupByReviewArgs");
const UpdateManyReviewArgs_1 = require("./args/UpdateManyReviewArgs");
const UpdateOneReviewArgs_1 = require("./args/UpdateOneReviewArgs");
const UpsertOneReviewArgs_1 = require("./args/UpsertOneReviewArgs");
const helpers_1 = require("../../../helpers");
const Review_1 = require("../../../models/Review");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReview_1 = require("../../outputs/AggregateReview");
const ReviewGroupBy_1 = require("../../outputs/ReviewGroupBy");
let ReviewCrudResolver = class ReviewCrudResolver {
    async aggregateReview(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).review.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReviewOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async reviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async review(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByReview(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneReview(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReview_1.AggregateReview, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReviewArgs_1.AggregateReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewCrudResolver.prototype, "aggregateReview", null);
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
], ReviewCrudResolver.prototype, "createManyReview", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Review_1.Review, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneReviewArgs_1.CreateOneReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewCrudResolver.prototype, "createOneReview", null);
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
], ReviewCrudResolver.prototype, "deleteManyReview", null);
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
], ReviewCrudResolver.prototype, "deleteOneReview", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Review_1.Review, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReviewArgs_1.FindFirstReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewCrudResolver.prototype, "findFirstReview", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Review_1.Review, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReviewOrThrowArgs_1.FindFirstReviewOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewCrudResolver.prototype, "findFirstReviewOrThrow", null);
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
], ReviewCrudResolver.prototype, "reviews", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Review_1.Review, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReviewArgs_1.FindUniqueReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewCrudResolver.prototype, "review", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Review_1.Review, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReviewOrThrowArgs_1.FindUniqueReviewOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewCrudResolver.prototype, "getReview", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReviewGroupBy_1.ReviewGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReviewArgs_1.GroupByReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewCrudResolver.prototype, "groupByReview", null);
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
], ReviewCrudResolver.prototype, "updateManyReview", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Review_1.Review, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneReviewArgs_1.UpdateOneReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewCrudResolver.prototype, "updateOneReview", null);
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
], ReviewCrudResolver.prototype, "upsertOneReview", null);
ReviewCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], ReviewCrudResolver);
exports.ReviewCrudResolver = ReviewCrudResolver;
