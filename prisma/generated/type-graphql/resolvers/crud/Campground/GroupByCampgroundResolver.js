"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCampgroundResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCampgroundArgs_1 = require("./args/GroupByCampgroundArgs");
const Campground_1 = require("../../../models/Campground");
const CampgroundGroupBy_1 = require("../../outputs/CampgroundGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCampgroundResolver = class GroupByCampgroundResolver {
    async groupByCampground(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CampgroundGroupBy_1.CampgroundGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCampgroundArgs_1.GroupByCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCampgroundResolver.prototype, "groupByCampground", null);
GroupByCampgroundResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], GroupByCampgroundResolver);
exports.GroupByCampgroundResolver = GroupByCampgroundResolver;
