export type LanguagesT = {
  [key: string]: { nativeName: string };
};

export type VideoT = {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: {
        width: number;
        height: number;
        url: string;
      };
      high: {
        width: number;
        height: number;
        url: string;
      };
      medium: {
        width: number;
        height: number;
        url: string;
      }
    };
    title: string;
  };
};
