export interface Recipe {
  id?: string;
  title: string;
  description: string;
  url: string;
  ingredients: [{
    title: string;
    count: number;
    countType: string;
    uuid: string;
  }];
}
