import { Links } from './Links.model';
import { Externals } from './externals.model';
import { Image } from './image.model';
import { Network } from './network.model';
import { Schedule } from './schedule.model';
import { Rating } from './rating.model';

export interface Show {
    id:           number;
    url:          string;
    name:         string;
    type:         string;
    language:     string;
    genres:       string[];
    status:       string;
    runtime:      number;
    premiered:    Date;
    officialSite: null | string;
    schedule:     Schedule;
    rating:       Rating;
    weight:       number;
    network:      Network | null;
    webChannel:   Network | null;
    externals:    Externals;
    image:        Image;
    summary:      string;
    updated:      number;
    _links:       Links;
}
