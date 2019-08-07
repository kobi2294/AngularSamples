import { Nextepisode } from './next-episode-model';

export interface Links {
    self:            Nextepisode;
    previousepisode: Nextepisode;
    nextepisode?:    Nextepisode;
}
