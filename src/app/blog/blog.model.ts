export interface Blog {
  id: number;
  blogTitle: string;
  description: string;
  imageUrl?: string;
  author?: string;
  dateTime?: string | Date;
  subtitle?: string;
}
