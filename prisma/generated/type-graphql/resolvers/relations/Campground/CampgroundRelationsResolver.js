"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Campground_1 = require("../../../models/Campground");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let CampgroundRelationsResolver = class CampgroundRelationsResolver {
    async user(campground, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.findUnique({
            where: {
                id: campground.id,
            },
        }).user({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Campground_1.Campground, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundRelationsResolver.prototype, "user", null);
CampgroundRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], CampgroundRelationsResolver);
exports.CampgroundRelationsResolver = CampgroundRelationsResolver;
