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
