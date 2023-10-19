import { StaticImageData } from "next/image";
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

export type UpcomingItems = {
  key: string;
  image: StaticImageData;
  icon: IconType;
  title: string;
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

export type IService = {
  id: string;
  name: string;
  location: string;
  categoryId: string;
  price: number;
  description: string | null;
  availability: boolean | null;
  url: string | null;
  public_id: string;
  reviews: Reviews[];
  createdAt: Date;
  updatedAt: Date;
};
