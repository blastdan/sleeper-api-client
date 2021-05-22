import { DynamicModule, HttpService, HttpModule, Module, Global } from '@nestjs/common';
import { Configuration } from './configuration';

import { AvatarsService } from './api/avatars.service';
import { DraftsService } from './api/drafts.service';
import { LeaguesService } from './api/leagues.service';
import { PlayersService } from './api/players.service';
import { UserService } from './api/user.service';

@Global()
@Module({
  imports:      [ HttpModule ],
  exports:      [
    AvatarsService,
    DraftsService,
    LeaguesService,
    PlayersService,
    UserService
  ],
  providers: [
    AvatarsService,
    DraftsService,
    LeaguesService,
    PlayersService,
    UserService
  ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): DynamicModule {
        return {
            module: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( httpService: HttpService) { }
}
