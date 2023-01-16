"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReviewScalarFieldEnum;
(function (ReviewScalarFieldEnum) {
    ReviewScalarFieldEnum["id"] = "id";
    ReviewScalarFieldEnum["rating"] = "rating";
    ReviewScalarFieldEnum["body"] = "body";
    ReviewScalarFieldEnum["userId"] = "userId";
    ReviewScalarFieldEnum["campgroundId"] = "campgroundId";
    ReviewScalarFieldEnum["createdAt"] = "createdAt";
})(ReviewScalarFieldEnum = exports.ReviewScalarFieldEnum || (exports.ReviewScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReviewScalarFieldEnum, {
    name: "ReviewScalarFieldEnum",
    description: undefined,
});
