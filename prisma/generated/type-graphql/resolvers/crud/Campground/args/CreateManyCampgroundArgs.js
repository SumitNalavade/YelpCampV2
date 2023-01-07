"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCampgroundArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateManyInput_1 = require("../../../inputs/CampgroundCreateManyInput");
let CreateManyCampgroundArgs = class CreateManyCampgroundArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundCreateManyInput_1.CampgroundCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCampgroundArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCampgroundArgs.prototype, "skipDuplicates", void 0);
CreateManyCampgroundArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCampgroundArgs);
exports.CreateManyCampgroundArgs = CreateManyCampgroundArgs;
