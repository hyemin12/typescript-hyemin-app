export type Plans = PlanProps[];

export interface PlanProps {
  id: string;
  category?: string;
  title?: string;
  startDate?: number;
  endDate?: number;
  day?: string;
  text?: string;
}
