"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCampgroundResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCampgroundArgs_1 = require("./args/FindUniqueCampgroundArgs");
const Campground_1 = require("../../../models/Campground");
const helpers_1 = require("../../../helpers");
let FindUniqueCampgroundResolver = class FindUniqueCampgroundResolver {
    async campground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCampgroundArgs_1.FindUniqueCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCampgroundResolver.prototype, "campground", null);
FindUniqueCampgroundResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], FindUniqueCampgroundResolver);
exports.FindUniqueCampgroundResolver = FindUniqueCampgroundResolver;
