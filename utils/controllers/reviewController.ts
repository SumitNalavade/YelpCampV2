import { gql, request } from "graphql-request"

export const addReview = async(rating: number, body: string, userId: string, campgroundId: string) => {
    const addReviewMutation = gql`
        mutation addReview($rating: Float!, $body: String!, $userId: ID!, $campgroundId: ID!) {
            addReview(data: { rating: $rating, body: $body, userId: $userId, campgroundId: $campgroundId }) {
                campgroundId
            }
        }
    `

    const { addReview } = await request("http://localhost:3000/api/graphql", addReviewMutation, {
        rating,
        body,
        userId,
        campgroundId
    })

    return addReview
}