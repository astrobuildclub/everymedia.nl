import type { QueryParams } from 'sanity'
import { client } from '../getClient'

export type FetchSanityQuery = {
  groqQuery: string
}


type FetchSanityParams = {
  query: FetchSanityQuery
  queryParams?: QueryParams
}

export const fetchDataFromSanity = async <T = unknown>({
  query,
  queryParams = {},
}: FetchSanityParams): Promise<T | undefined> => {
  const { groqQuery } = query
  const sanityClient  = client
  try {
    const data = await sanityClient.fetch<T>(groqQuery, queryParams)
    return data
  } catch (error) {
    console.log(error);
  }
}
