import { gql, request } from "graphql-request"

export const addReview = async(rating: number, body: string, userId: string, campgroundId: string) => {
    const { addReview } = await request(`${process.env.NEXT_PUBLIC_URL}/api/graphql`, gql`
        mutation addReview($rating: Float!, $body: String!, $userId: ID!, $campgroundId: ID!) {
            addReview(data: { rating: $rating, body: $body, userId: $userId, campgroundId: $campgroundId }) {
                campgroundId
            }
        }
        `,{
            rating,
            body,
            userId,
            campgroundId
        }
    )

    return addReview
}

export const deleteReview = async(id: string) => {
    const { deleteReview } = await request(`${process.env.NEXT_PUBLIC_URL}/api/graphql`, gql`
        mutation deleteReview($id: String!) {
            deleteReview(id: $id) {
                id
            }
        }
    `, {
        id
    })

    return deleteReview
}