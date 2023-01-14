import { gql, request } from "graphql-request"
import { z } from "zod";
import toBase64 from "../FileToBase64"

import { campgroundFormSchema } from "../../utils/interfaces";

export const deleteCampground = async(id: string) => {
  await request(`${process.env.NEXT_PUBLIC_URL}/api/graphql`,  gql`
    mutation deleteCampground($id: String!) {
      deleteCampground(id: $id) {
        name
        id
      }
    }`, { id }
  )}

export const addCampground = async(name: string, description: string, primaryImages: File[], secondaryImages: File[], address: string, price: number, userId: string) => {

  // try {
  //   campgroundFormSchema.parse({ name, description, primaryImages, secondaryImages, address, price, userId })
  // } catch(error) {
  //   if (error instanceof z.ZodError) {
  //     console.log(error)
  //     alert("Please fill in all fields!")
  //     return
  //   }
  // }

  const { addCampground } = await request(`${process.env.NEXT_PUBLIC_URL}/api/graphql`, gql`
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