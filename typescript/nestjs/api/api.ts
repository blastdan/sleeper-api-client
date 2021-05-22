export * from './avatars.service';
import { AvatarsService } from './avatars.service';
export * from './avatars.serviceInterface'
export * from './drafts.service';
import { DraftsService } from './drafts.service';
export * from './drafts.serviceInterface'
export * from './leagues.service';
import { LeaguesService } from './leagues.service';
export * from './leagues.serviceInterface'
export * from './players.service';
import { PlayersService } from './players.service';
export * from './players.serviceInterface'
export * from './user.service';
import { UserService } from './user.service';
export * from './user.serviceInterface'
export const APIS = [AvatarsService, DraftsService, LeaguesService, PlayersService, UserService];
