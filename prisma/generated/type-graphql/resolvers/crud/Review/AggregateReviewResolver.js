"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReviewResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateReviewArgs_1 = require("./args/AggregateReviewArgs");
const Review_1 = require("../../../models/Review");
const AggregateReview_1 = require("../../outputs/AggregateReview");
const helpers_1 = require("../../../helpers");
let AggregateReviewResolver = class AggregateReviewResolver {
    async aggregateReview(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).review.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
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
], AggregateReviewResolver.prototype, "aggregateReview", null);
AggregateReviewResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], AggregateReviewResolver);
exports.AggregateReviewResolver = AggregateReviewResolver;
