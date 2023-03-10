import type { GraphQLResolveInfo } from "graphql";
import { AggregateReviewArgs } from "./args/AggregateReviewArgs";
import { CreateManyReviewArgs } from "./args/CreateManyReviewArgs";
import { CreateOneReviewArgs } from "./args/CreateOneReviewArgs";
import { DeleteManyReviewArgs } from "./args/DeleteManyReviewArgs";
import { DeleteOneReviewArgs } from "./args/DeleteOneReviewArgs";
import { FindFirstReviewArgs } from "./args/FindFirstReviewArgs";
import { FindFirstReviewOrThrowArgs } from "./args/FindFirstReviewOrThrowArgs";
import { FindManyReviewArgs } from "./args/FindManyReviewArgs";
import { FindUniqueReviewArgs } from "./args/FindUniqueReviewArgs";
import { FindUniqueReviewOrThrowArgs } from "./args/FindUniqueReviewOrThrowArgs";
import { GroupByReviewArgs } from "./args/GroupByReviewArgs";
import { UpdateManyReviewArgs } from "./args/UpdateManyReviewArgs";
import { UpdateOneReviewArgs } from "./args/UpdateOneReviewArgs";
import { UpsertOneReviewArgs } from "./args/UpsertOneReviewArgs";
import { Review } from "../../../models/Review";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReview } from "../../outputs/AggregateReview";
import { ReviewGroupBy } from "../../outputs/ReviewGroupBy";
export declare class ReviewCrudResolver {
    aggregateReview(ctx: any, info: GraphQLResolveInfo, args: AggregateReviewArgs): Promise<AggregateReview>;
    createManyReview(ctx: any, info: GraphQLResolveInfo, args: CreateManyReviewArgs): Promise<AffectedRowsOutput>;
    createOneReview(ctx: any, info: GraphQLResolveInfo, args: CreateOneReviewArgs): Promise<Review>;
    deleteManyReview(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReviewArgs): Promise<AffectedRowsOutput>;
    deleteOneReview(ctx: any, info: GraphQLResolveInfo, args: DeleteOneReviewArgs): Promise<Review | null>;
    findFirstReview(ctx: any, info: GraphQLResolveInfo, args: FindFirstReviewArgs): Promise<Review | null>;
    findFirstReviewOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstReviewOrThrowArgs): Promise<Review | null>;
    reviews(ctx: any, info: GraphQLResolveInfo, args: FindManyReviewArgs): Promise<Review[]>;
    review(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReviewArgs): Promise<Review | null>;
    getReview(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReviewOrThrowArgs): Promise<Review | null>;
    groupByReview(ctx: any, info: GraphQLResolveInfo, args: GroupByReviewArgs): Promise<ReviewGroupBy[]>;
    updateManyReview(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReviewArgs): Promise<AffectedRowsOutput>;
    updateOneReview(ctx: any, info: GraphQLResolveInfo, args: UpdateOneReviewArgs): Promise<Review | null>;
    upsertOneReview(ctx: any, info: GraphQLResolveInfo, args: UpsertOneReviewArgs): Promise<Review>;
}
