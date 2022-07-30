export interface StrapiApiItem {
  id: number;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Quiz extends StrapiApiItem {
  title: string;
}
