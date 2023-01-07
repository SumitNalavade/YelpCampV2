"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCampgroundResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCampgroundArgs_1 = require("./args/UpdateManyCampgroundArgs");
const Campground_1 = require("../../../models/Campground");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCampgroundResolver = class UpdateManyCampgroundResolver {
    async updateManyCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCampgroundArgs_1.UpdateManyCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCampgroundResolver.prototype, "updateManyCampground", null);
UpdateManyCampgroundResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], UpdateManyCampgroundResolver);
exports.UpdateManyCampgroundResolver = UpdateManyCampgroundResolver;
