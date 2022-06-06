import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '9jm1us8d',
  dataset: 'production',
  apiVersion: '2022-06-03',
  useCdn: true,
  token:'sk26rYwsqL8MrAT1hm7h5iEGcc2tpVvy7RfbO3wf27kCgvmLStLKAIwjj6fxmNHG2b5e2FAPLMbxpgxg8UlKbmsw3jyIFwjTSfJKM76ROGf4szX6VxA1ycBi18ykV21eChHb4wabkMWZ0EqcA7jlRpOO1wP3w8dljgfsahv4RbQFC5OzYVdV',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);