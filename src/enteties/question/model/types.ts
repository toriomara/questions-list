import type { ISkill } from '../../skill/model/types';
import type { ISpecialization } from '../../specialization/model/types';

export interface IQuestion {
  id: number;
  title: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  rate: number;
  complexity: number;
  keywords: string[];
}

export interface IQuestionItemResponse {
  id: number;
  title: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  keywords: string[];
  questionSpecializations: ISpecialization[];
  questionSkills: ISkill[];
}

export interface IQuestionsResponse {
  page: number;
  limit: number;
  total: number;
  data: IQuestion[];
}

export interface GetQuestionsParams {
  page: number;
  limit: number;
  specialization: number | null;
  skills: number[];
  complexity: number[];
  rate: number[];
  search: string;
}
