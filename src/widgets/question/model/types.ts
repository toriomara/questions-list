export interface ISingleQuestion {
  id: number;
  title?: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  // imageSrc: string;
  rate: number;
  complexity: number;
  questionSkills?: { id: number; title: string }[];
  keywords?: string[];
}
