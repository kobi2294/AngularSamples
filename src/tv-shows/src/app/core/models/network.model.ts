import { Country } from './counter.model';

export interface Network {
    id:      number;
    name:    string;
    country: Country | null;
}
