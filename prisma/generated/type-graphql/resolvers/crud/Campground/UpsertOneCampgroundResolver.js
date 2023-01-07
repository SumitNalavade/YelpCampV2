"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCampgroundResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneCampgroundArgs_1 = require("./args/UpsertOneCampgroundArgs");
const Campground_1 = require("../../../models/Campground");
const helpers_1 = require("../../../helpers");
let UpsertOneCampgroundResolver = class UpsertOneCampgroundResolver {
    async upsertOneCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Campground_1.Campground, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCampgroundArgs_1.UpsertOneCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCampgroundResolver.prototype, "upsertOneCampground", null);
UpsertOneCampgroundResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], UpsertOneCampgroundResolver);
exports.UpsertOneCampgroundResolver = UpsertOneCampgroundResolver;
