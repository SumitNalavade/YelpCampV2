"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCampgroundOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCampgroundOrThrowArgs_1 = require("./args/FindUniqueCampgroundOrThrowArgs");
const Campground_1 = require("../../../models/Campground");
const helpers_1 = require("../../../helpers");
let FindUniqueCampgroundOrThrowResolver = class FindUniqueCampgroundOrThrowResolver {
    async getCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Campground_1.Campground, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCampgroundOrThrowArgs_1.FindUniqueCampgroundOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCampgroundOrThrowResolver.prototype, "getCampground", null);
FindUniqueCampgroundOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], FindUniqueCampgroundOrThrowResolver);
exports.FindUniqueCampgroundOrThrowResolver = FindUniqueCampgroundOrThrowResolver;
