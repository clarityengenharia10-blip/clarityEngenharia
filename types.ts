
export interface Product {
  id: string;
  name: string;
  category: 'ups' | 'stabilizers' | 'batteries' | 'monitoring' | 'accessories' | 'generators' | 'solar_ups' | 'rectifiers' | 'battery_modules';
  series: string;
  description: string;
  image: string;
  badge?: string;
  specs: string[];
  powerRange?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface Client {
  name: string;
  logo: string;
}
