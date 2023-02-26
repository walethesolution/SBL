import dayjs from "dayjs";

declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.png" {
  const path: string;
  export default path;
}

export interface PlayersType {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  height: string;
  weight: string;
  history: History[];
}

export interface History {
  dob: string;
  nickName: string;
  countryOfOrigin: string;
  experience: number;
}

export interface Blogger {
  id: number;
  image: string;
  topic: string;
  description: string;
  link: string;
}

export interface GameDay {
  id: number;
  date: dayjs.Dayjs;
}

export interface LeadersProps {
  leaderType: "current" | "season";
}
