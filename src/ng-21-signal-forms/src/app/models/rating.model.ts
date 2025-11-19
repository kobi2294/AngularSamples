export const RATINGS = ['Great', 'Good', 'Okay', 'Bad', 'Terrible'] as const;
export type Rating = (typeof RATINGS)[number];

export interface DinerRating {
  readonly food: string;
  readonly rating: Rating;
  readonly comeAgain: boolean;
}

export interface DinerNumerticRating {
  readonly food: string;
  readonly rating: number; // 1 to 5
  readonly comeAgain: boolean;
}