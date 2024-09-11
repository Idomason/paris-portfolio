// Navbar props
export interface INavbarProp {
  onOpenNav: () => void;
}

// MobileNav props
export interface IMobileNavProp {
  showNav: boolean;
  onCloseNav: () => void;
}

// Course Props
export interface ICourse {
  course: {
    id: number;
    image: string;
    title: string;
    price: number;
    author: string;
    reviewNumber: number;
    lessons: number;
    students: number;
    category: string;
  };
}

// SliderCard props
export interface ISliderCardProp {
  image: string;
  name: string;
  role: string;
}

// Article Props
export interface IArticleProp {
  article: {
    id: number;
    userImage: string;
    username: string;
    reaction: number;
    coverImage: string;
    title: string;
  };
}
