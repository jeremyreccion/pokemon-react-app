export type Pokemon = {
  number: string;
  name: string;
  classification: string;
  types: string[];
  height: {
    minimum: string;
    maximum: string;
  };
  weight: {
    minimum: string;
    maximum: string;
  };
  image: string;
};