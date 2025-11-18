export const RATINGS = ['Great', 'Good', 'Okay', 'Bad', 'Terrible'] as const;
export type Rating = (typeof RATINGS)[number];