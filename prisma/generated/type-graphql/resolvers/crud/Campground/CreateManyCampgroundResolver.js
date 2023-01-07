"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCampgroundResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyCampgroundArgs_1 = require("./args/CreateManyCampgroundArgs");
const Campground_1 = require("../../../models/Campground");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCampgroundResolver = class CreateManyCampgroundResolver {
    async createManyCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCampgroundArgs_1.CreateManyCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyCampgroundResolver.prototype, "createManyCampground", null);
CreateManyCampgroundResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], CreateManyCampgroundResolver);
exports.CreateManyCampgroundResolver = CreateManyCampgroundResolver;
