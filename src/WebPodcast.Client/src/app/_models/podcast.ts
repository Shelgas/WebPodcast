import { IRecords } from './record';

export interface IPodcast {
    id: number;
    name: string;
    description: string;
    photo: string;
    records: IRecords[];
}
