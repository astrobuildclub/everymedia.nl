import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId, readToken, useCdn } from '../../config';

export const sanityConfig = {
  projectId,
  dataset,
  useCdn,
  apiVersion,
};

export const client = createClient(sanityConfig)

export const sanityClientWithReadToken= createClient({
  ...sanityConfig,
  token: readToken,
})