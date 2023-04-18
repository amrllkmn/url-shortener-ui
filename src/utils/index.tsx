export interface IUrl {
  id: number;
  target_url: string;
  title: string;
  slug: string;
  created_at: string;
  updated_at: string;
  times_clicked: number;
  click_timestamp: {
    [click: string]: string;
  };
  origin: IOrigin[];
  short_url: string;
}

export interface IOrigin {
  city: string;
  region: string;
  country: string;
}

export interface IPostUrl {
  url: string;
  slug?: string;
}

export const MAX_LENGTH = 140;

export const truncateUrl = (url: string, MAX_LENGTH: number) => {
  if (url.length > MAX_LENGTH) {
    return url.slice(0, MAX_LENGTH - 3) + "...";
  }
  return url;
};
