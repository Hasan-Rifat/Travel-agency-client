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

export type IBlog = {
  id: string;
  title: string;
  category: string;
  role: string;
  img: StaticImageData;
  date: string;
  description: string;
};

export type IABPerson = {
  id: string;
  name: string;
  img: StaticImageData;
  description: string;
};

export type response = {
  success: boolean;
  statusCode: number;
  message: string;
  data: IService;
};

export interface IOrder {
  id?: string;
  serviceId: string;
  userId: string;
  status: string;
  start: string;
  end: string;
  travelers: number;
  specialRequests: string;
  price: string;
  totalDays: number;
}

export interface IBook {
  id: string;
  paymentId: string;
  serviceId: string;
  userId: string;
  status: string;
  start: string;
  end: string;
  travelers: number;
  specialRequests: string;
  price: string;
  totalDays: number;
}

export interface IMenu {
  id: string;
  title: string;
  path: string;
}
