export interface Car {
  id: string;
  prices: {
    totalPrice: {
      amount: {
        value: number;
        display: string;
        currency: string;
      };
    };
  };
  carGroupInfo: {
    modelExample: {
      name: string;
      imageUrl: string;
    };
  };
}

export type Colors = Array<string>;

export interface Manufacturer {
  name: string;
  models: Array<{ name: string }>;
}

export type Manufacturers = Array<Manufacturer>;
