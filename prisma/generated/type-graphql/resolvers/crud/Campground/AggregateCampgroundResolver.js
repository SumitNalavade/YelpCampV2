"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCampgroundResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCampgroundArgs_1 = require("./args/AggregateCampgroundArgs");
const Campground_1 = require("../../../models/Campground");
const AggregateCampground_1 = require("../../outputs/AggregateCampground");
const helpers_1 = require("../../../helpers");
let AggregateCampgroundResolver = class AggregateCampgroundResolver {
    async aggregateCampground(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCampground_1.AggregateCampground, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCampgroundArgs_1.AggregateCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCampgroundResolver.prototype, "aggregateCampground", null);
AggregateCampgroundResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], AggregateCampgroundResolver);
exports.AggregateCampgroundResolver = AggregateCampgroundResolver;
