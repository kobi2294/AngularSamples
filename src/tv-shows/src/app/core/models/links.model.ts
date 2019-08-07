import { Episode } from './episode.model';

export interface Links {
    self:            Episode;
    previousepisode: Episode;
    nextepisode?:    Episode;
}
