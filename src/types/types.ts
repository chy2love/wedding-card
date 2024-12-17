export type VisitLogItem = {
  id: string;
  name: string;
  date: string;
  message: string;
  password: string;
  thumbnail: number;
};
export type rsvpItem = {
  id: string;
  side: '신랑' | '신부';
  canAttend: boolean;
  name: string;
  phone: string;
  isEatDinner: boolean;
  friendCount?: number;
  friendNames?: string;
  message?: string;
};
