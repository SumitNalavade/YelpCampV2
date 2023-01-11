"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReviewResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByReviewArgs_1 = require("./args/GroupByReviewArgs");
const Review_1 = require("../../../models/Review");
const ReviewGroupBy_1 = require("../../outputs/ReviewGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReviewResolver = class GroupByReviewResolver {
    async groupByReview(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).review.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByReviewResolver.prototype, "groupByReview", null);
GroupByReviewResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], GroupByReviewResolver);
exports.GroupByReviewResolver = GroupByReviewResolver;
