"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Campground_1 = require("../../../models/Campground");
const Review_1 = require("../../../models/Review");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let ReviewRelationsResolver = class ReviewRelationsResolver {
    async user(review, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).review.findUnique({
            where: {
                id: review.id,
            },
        }).user({});
    }
    async campground(review, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).review.findUnique({
            where: {
                id: review.id,
            },
        }).campground({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Review_1.Review, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Campground_1.Campground, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Review_1.Review, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewRelationsResolver.prototype, "campground", null);
ReviewRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Review_1.Review)
], ReviewRelationsResolver);
exports.ReviewRelationsResolver = ReviewRelationsResolver;
