import { gql, request } from "graphql-request"
import toBase64 from "../FileToBase64"

export const deleteCampground = async(id: string) => {
  await request('http://localhost:3000/api/graphql',  gql`
    mutation deleteCampground($id: String!) {
      deleteCampground(id: $id) {
        name
        id
      }
    }`, { id }
  )}

export const addCampground = async(name: string, description: string, primaryImages: File[], secondaryImages: File[], address: string, price: number, userId: string) => {
  const { addCampground } = await request('http://localhost:3000/api/graphql', gql`
    mutation addCampground($name: String!, $description: String!, $primaryImageB64: String!, $secondaryImageB64s: [String!]!, $address: String!, $price: Float!, $userId: ID!) {
      addCampground(data: { name: $name, description: $description, primaryImageB64: $primaryImageB64, secondaryImageB64s: $secondaryImageB64s, address: $address, price: $price, userId: $userId }) {
        id
      }
    }
  `,{
    name,
    description,
    primaryImageB64: await toBase64(primaryImages![0]),
    secondaryImageB64s: await Promise.all(secondaryImages?.map(async(image: File) => toBase64(image)) as unknown as string[]),
    address,
    price,
    userId
  })
  
  return addCampground
}