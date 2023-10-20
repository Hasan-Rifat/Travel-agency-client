import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type Features = {
  key: string;
  image: StaticImageData;
  icon: IconType;
  title: string;
};

export type UpcomingItems = {
  id: string;
  name: string;
  location: string;
  categoryId: string;
  category: Category;
  price: number;
  description: string;
  availability: boolean;
  url: StaticImageData;
  public_id: string;
  reviews: Reviews[];
  createdAt: ReactNode;
  updatedAt: ReactNode;
};

type Reviews = {
  id: string;
  rating: number;
  comment: string;
  serviceId: string;
  userId: string;
  createdAt: string; // Use string or Date based on your preference and data source
  updatedAt: string; // Use string or Date based on your preference and data source
};

type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string; // Use string or Date based on your preference and data
};

export type IService = {
  id: string;
  name: string;
  location: string;
  categoryId: string;
  category: Category;
  price: number;
  description: string;
  availability: boolean;
  url: string;
  public_id: string;
  reviews: Reviews[];
  createdAt: ReactNode;
  updatedAt: Date;
};
