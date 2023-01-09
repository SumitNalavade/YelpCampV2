export interface ICampground {
    id: string
    name: string
    description: string
    averageRating: number
    primaryImageUrl: string
    secondaryImageUrls: string[]
    address: string
    price: number
}