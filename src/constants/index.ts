import { Features, IABPerson, IBlog, UpcomingItems } from "@/types";
import { RiUserStarLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdTravelExplore } from "react-icons/md";
import { BsStars } from "react-icons/bs";

import features1 from "@/assets/feature-1.jpg";
import features2 from "@/assets/feature-2.jpg";
import features3 from "@/assets/feature-3.jpg";
import features4 from "@/assets/feature-4.jpg";

import tour1 from "@/assets/tour-1.jpg";
import tour2 from "@/assets/tour-3.jpg";

import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

import blog1 from "@/assets/place-1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";

export const allFeatures: Features[] = [
  {
    icon: RiUserStarLine,
    image: features1,
    key: "1",
    title: "2000+ Our Worldwide Guide",
  },
  {
    icon: VscWorkspaceTrusted,
    image: features2,
    key: "2",
    title: "100% Trusted Tour Agency",
  },
  {
    icon: MdTravelExplore,
    image: features3,
    key: "3",
    title: "12+ Years Of Travel Experience",
  },
  {
    icon: BsStars,
    image: features4,
    key: "5",
    title: "98% Years Of Travel are Happy",
  },
];

export const upcomingService: UpcomingItems[] = [
  {
    id: "1",
    name: "Adventure in the Sundarbans",
    location: "Sundarbans, Bangladesh",
    availability: false,
    categoryId: "1",
    price: 100,
    createdAt: "2021-09-24T17:00:00.000Z",
    public_id: "service/jl1z5mckwbuu5zxwvlra",
    reviews: [],
    updatedAt: "2021-09-24T17:00:00.000Z",
    url: tour1,
    description:
      "Explore the breathtaking Sundarbans mangrove forest and its wildlife.",
    category: {
      id: "1",
      name: "upcoming",
      createdAt: "2021-09-24T17:00:00.000Z",
      updatedAt: "2021-09-24T17:00:00.000Z",
    },
  },
  {
    id: "2",
    availability: false,
    categoryId: "1",
    price: 100,
    createdAt: "2021-09-24T17:00:00.000Z",
    public_id: "service/jl1z5mckwbuu5zxwvlra",
    reviews: [],
    updatedAt: "2021-09-24T17:00:00.000Z",
    name: "Cox's Bazar Beach Getaway",
    location: "Cox's Bazar, Bangladesh",
    url: tour2,
    description:
      "Relax on the world's longest natural sea beach at Cox's Bazar.",
    category: {
      id: "2",
      name: "upcoming",
      createdAt: "2021-09-24T17:00:00.000Z",
      updatedAt: "2021-09-24T17:00:00.000Z",
    },
  },
  {
    id: "3",
    name: "Hill Trekking in Sylhet",
    location: "Sylhet, Bangladesh",
    availability: false,
    categoryId: "1",
    price: 100,
    createdAt: "2021-09-24T17:00:00.000Z",
    public_id: "service/jl1z5mckwbuu5zxwvlra",
    reviews: [],
    updatedAt: "2021-09-24T17:00:00.000Z",
    url: tour1,
    description:
      "Enjoy the beautiful hills and tea gardens of Sylhet through trekking.",
    category: {
      id: "3",
      name: "upcoming",
      createdAt: "2021-09-24T17:00:00.000Z",
      updatedAt: "2021-09-24T17:00:00.000Z",
    },
  },
  {
    id: "4",
    name: "Historical Tour in Dhaka",
    location: "Dhaka, Bangladesh",
    availability: false,
    categoryId: "1",
    price: 100,
    createdAt: "2021-09-24T17:00:00.000Z",
    public_id: "service/jl1z5mckwbuu5zxwvlra",
    reviews: [],
    updatedAt: "2021-09-24T17:00:00.000Z",
    url: tour2,
    description:
      "Discover the rich history and culture of Dhaka with our guided tour.",
    category: {
      id: "4",
      name: "upcoming",
      createdAt: "2021-09-24T17:00:00.000Z",
      updatedAt: "2021-09-24T17:00:00.000Z",
    },
  },
  {
    id: "5",
    name: "Exciting Adventure Tour",
    location: "Comilla, Bangladesh",
    availability: false,
    categoryId: "1",
    price: 100,
    createdAt: "2021-09-24T17:00:00.000Z",
    public_id: "service/jl1z5mckwbuu5zxwvlra",
    reviews: [],
    updatedAt: "2021-09-24T17:00:00.000Z",
    url: tour1,
    description:
      "Explore the breathtaking mountain valley with our adventure tour.",
    category: {
      id: "1",
      name: "upcoming",
      createdAt: "2021-09-24T17:00:00.000Z",
      updatedAt: "2021-09-24T17:00:00.000Z",
    },
  },
  {
    id: "6",
    name: "Upcoming Travel Service for Bangladesh",
    location: "Bangladesh",
    availability: false,
    categoryId: "1",
    price: 100,
    createdAt: "2021-09-24T17:00:00.000Z",
    public_id: "service/jl1z5mckwbuu5zxwvlra",
    reviews: [],
    updatedAt: "2021-09-24T17:00:00.000Z",
    url: tour2,
    description:
      "Discover the beauty of Bangladesh with our upcoming travel service.",

    category: {
      id: "6",
      name: "Nature and Adventure",
      createdAt: "2021-09-24T17:00:00.000Z",
      updatedAt: "2021-09-24T17:00:00.000Z",
    }, // New category
  },
];

export const AboutPersonCardInfo: IABPerson[] = [
  {
    id: "1",
    name: "Merrie Lewis",
    description: "Tour Guide",
    img: team1,
  },
  {
    id: "2",
    name: "Parks Missie",
    description: "Tour Guide",
    img: team2,
  },
  {
    id: "3",
    name: "Mariana Buenos",
    description: "Tour Guide",
    img: team3,
  },
];

export const items: IBlog[] = [
  {
    id: "1",
    title: "unique Including animation in your design system",
    category: "Lifestyle",
    date: "February 9, 2021",
    role: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
    img: blog1,
  },
  {
    id: "2",
    title: "Including animation in your design system",
    category: "Travel",
    date: "January 27, 2021",
    role: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
    img: blog2,
  },
  {
    id: "3",
    title: "Including animation in your design system",
    category: "Travel",
    date: "January 27, 2021",
    role: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
    img: blog3,
  },
];

export const recentItems: IBlog[] = [
  {
    id: "1",
    title: "Including animation in your design system",
    category: "Lifestyle",
    date: "February 9, 2021",
    role: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
    img: blog1,
  },
  {
    id: "2",
    title: "Including animation in your design system",
    category: "Travel",
    date: "January 27, 2021",
    role: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
    img: blog2,
  },
  {
    id: "3",
    title: "Including animation in your design system",
    category: "Travel",
    date: "January 27, 2021",
    role: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
    img: blog3,
  },
];
