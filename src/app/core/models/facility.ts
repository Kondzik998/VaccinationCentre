export interface Facility
  extends Readonly<{
    id: number;
    name: string;
    city: string;
    country: string;
    street: string;
    contactPhone: string;
  }> {}
