import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Thing {
    id: ID!
    name: String
    gif: Gif
  }

  type IImage {
    width: Int
    height: Int
    url: String
    size: String
  }

  type IImages {
    fixed_height_still: IImage
    original_still: IImage
    fixed_width: IImage
    fixed_height_small_still: IImage
    fixed_height_downsampled: IImage
    preview: IImage
    fixed_height_small: IImage
    downsized_still: IImage
    downsized: IImage
    downsized_large: IImage
    fixed_width_small_still: IImage
    preview_webp: IImage
    fixed_width_still: IImage
    fixed_width_small: IImage
    downsized_small: IImage
    fixed_width_downsampled: IImage
    downsized_medium: IImage
    original: IImage
    fixed_height: IImage
    preview_gif: IImage
  }

  type IUser {
    username: String
    id: ID
    avatar_url: String
    is_verified: Boolean
    about_bio: String
    display_name: String
    user_type: String
    is_public: Boolean
    primary_site: String
    twitter: String
    facebook: String
    instagram: String
    tumblr_site: String
    twitter_url: String
    facebook_url: String
    instagram_url: String
    tumblr_url: String
    website_url: String
  }

  type Gif {
    type: String
    id: ID
    slug: String
    url: String
    bitly_gif_url: String
    bitly_url: String
    embed_url: String
    username: String
    source: String
    rating: String
    content_url: String
    source_tld: String
    source_post_url: String
    is_indexable: Boolean
    is_sticker: Boolean
    import_datetime: String
    trending_datetime: String
    user: IUser
    images: IImages
    title: String
    is_hidden: Boolean
    is_scheduled: Boolean
    is_removed: Boolean
    tags: [String]
    analytics_response_payload: String
  }

  type Query {
    things: [Thing]
    thing(id: ID!): Thing!
    gifs(slug: String): [Gif]
    gif(slug: String): Gif!
  }
`;
