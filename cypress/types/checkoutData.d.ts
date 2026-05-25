export interface CheckoutData {
  payment: {
    method: string;
    label: string;
    expectedText: string;
  };
  shipping: {
    method: string;
    label: string;
    expectedText: string;
  };
  messages: {
    successHeader: string;
    successText: string;
  };
}
