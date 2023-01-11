"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReviewMaxAggregate = class ReviewMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewMaxAggregate.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewMaxAggregate.prototype, "body", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewMaxAggregate.prototype, "campgroundId", void 0);
ReviewMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReviewMaxAggregate", {
        isAbstract: true
    })
], ReviewMaxAggregate);
exports.ReviewMaxAggregate = ReviewMaxAggregate;
