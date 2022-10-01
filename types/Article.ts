export type Article = {
  imageUrl: string
  topics: {
    id: string
    title: string
  }[]
  name: string
  description: string
  objectID: string
  publicationDate: string
  organization: {
    fields: {
      name: string
    }
  }[]
  slug: string
}
