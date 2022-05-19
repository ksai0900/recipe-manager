export interface ShoppingList {
  id?: string;
  title: string;
  dateCreated: Date;
  ingredients: [
    {
      title: string;
      count: number;
      countType: string;
      uuid: string;
    }
  ];

}
