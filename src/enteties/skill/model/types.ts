export interface ISkill {
  id: number;
  title: string;
}

export interface IPaginatedSkills {
  data: ISkill[];
  page: number;
  limit: number;
  total: number;
}
