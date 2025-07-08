export type Article = {
  id: number;
  title: string;
  pr: boolean;
  subtitle: string | null;
  thumbnail_image: MediaRelation;
  thumbnail_image_alt: string | null;
  description: string | null;
  content: RichTextBlock[]; // Blocks形式
  table_of_contents: TOCItem[] | null;
  start_date: string | null; // ISO 8601 datetime
  end_date: string | null;
  start_time: string | null; // 例: "13:00:00"
  end_time: string | null;
  size_lg: boolean;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  // Relations
  users_permissions_user?: UserRelation | null;
  tags?: {
    data: TagRelation[];
  }
  category?: CategoryRelation | null;
};

// export type ArticleAttributes = {
//   title: string;
//   pr: boolean;
//   subtitle: string | null;
//   thumbnail_image: MediaRelation;
//   thumbnail_image_alt: string | null;
//   description: string | null;
//   content: RichTextBlock[]; // Blocks形式
//   table_of_contents: TOCItem[] | null;
//   start_date: string | null; // ISO 8601 datetime
//   end_date: string | null;
//   start_time: string | null; // 例: "13:00:00"
//   end_time: string | null;
//   size_lg: boolean;

//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;

//   // Relations
//   users_permissions_user?: UserRelation | null;
//   tags?: {
//     data: TagRelation[];
//   }
//   category?: CategoryRelation | null;
// };

export type UserRelation = {
  data: {
    id: number;
    username: string;
    email: string;
    avatar?: {
      url: string;
      alternativeText?: string | null;
      caption?: string;
      width?: number;
      height?: number;
      mime?: string;
      size?: number;
    }; 
  } | null;
};

export type TagRelation = {
    id: number;
    name: string;
  };

export type CategoryRelation = {
  data: {
    id: number;
    name: string;
  } | null;
};

export type MediaRelation = {
  data: {
  id: number;
  url: string;
  alternativeText?: string | null;
  caption?: string;
  width?: number;
  height?: number;
  mime?: string;
  size?: number;
  } | null;
};

export type RichTextBlock = {
  type: string;
  children: {
    type: string;
    text: string;
  }[];
};

export type TOCItem = {
  title: string;
  id: string;
  level: number;
  children: TOCItem[];
};
