export type LanguagesT = {
  [key: string]: { nativeName: string };
};

export type VideoT = {
  etag:      string;
  id: {
    kind:    string;
    videoId: string;
  };
  snippet: {
    channelId:            string;
    channelTitle:         string;
    description:          string;
    liveBroadcastContent: string;
    publishTime:          string;
    publishedAt:          string;
    thumbnails: {
      default: {
        width:  number;
        height: number;
        url:    string;
      };
      high: {
        width:  number;
        height: number;
        url:    string;
      };
      medium: {
        width:  number;
        height: number;
        url:    string;
      }
    };
    title:      string;
  };
};

export type Category = {
  id: string,
  name: string,
}

export type Subcategory = {
  id: string;
  name: string;
  can_sort: boolean;
  where_to_throw: string;
  waste_type_id: string;
  description: string;
  is_middle: boolean;
}

export type ArticleT = {
  id?: string;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  likesCount: number;
  authorId: string;
  createdAt: string;
  updatedAt?: string;
}

export type InitiativeT = {
  id: string;
  authorId: string;
  name: string;
  description: string;
  thumbnail: string;
  address: string;
  donateUrl: string;
  website: string;
  members: string[];
  posts: string[];
  events: string[];
  updatedAt: Date;
  createdAt: Date;
}

export type EventT = {
  title: string;
  description: string;
  startDate: Date;
  thumbnail: string;
  initiativeId: string;
};
