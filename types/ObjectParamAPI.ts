import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Draft } from '../models/Draft';
import { DraftMetadata } from '../models/DraftMetadata';
import { DraftPick } from '../models/DraftPick';
import { DraftSettings } from '../models/DraftSettings';
import { League } from '../models/League';
import { LeagueSettings } from '../models/LeagueSettings';
import { Matchup } from '../models/Matchup';
import { Pick } from '../models/Pick';
import { PickMetadata } from '../models/PickMetadata';
import { Player } from '../models/Player';
import { Roster } from '../models/Roster';
import { RosterSettings } from '../models/RosterSettings';
import { ScoreingSettings } from '../models/ScoreingSettings';
import { SportState } from '../models/SportState';
import { TradedPick } from '../models/TradedPick';
import { Transaction } from '../models/Transaction';
import { TrendingPlayer } from '../models/TrendingPlayer';
import { User } from '../models/User';
import { UserInLeague } from '../models/UserInLeague';
import { UserInLeagueMetadata } from '../models/UserInLeagueMetadata';
import { WaiverBudget } from '../models/WaiverBudget';

import { ObservableAvatarsApi } from "./ObservableAPI";
import { AvatarsApiRequestFactory, AvatarsApiResponseProcessor} from "../apis/AvatarsApi";

export interface AvatarsApiAvatarsAvatarIdGetRequest {
    /**
     * The avatar id to get
     * @type string
     * @memberof AvatarsApiavatarsAvatarIdGet
     */
    avatarId: string
}

export interface AvatarsApiAvatarsThumbsAvatarIdGetRequest {
    /**
     * The avatar id to get
     * @type string
     * @memberof AvatarsApiavatarsThumbsAvatarIdGet
     */
    avatarId: string
}

export class ObjectAvatarsApi {
    private api: ObservableAvatarsApi

    public constructor(configuration: Configuration, requestFactory?: AvatarsApiRequestFactory, responseProcessor?: AvatarsApiResponseProcessor) {
        this.api = new ObservableAvatarsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a full size avatar image
     * Get an avatar
     * @param param the request object
     */
    public avatarsAvatarIdGet(param: AvatarsApiAvatarsAvatarIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.avatarsAvatarIdGet(param.avatarId,  options).toPromise();
    }

    /**
     * Get a thumbnail for the avatar
     * Get an avatar thumbnail
     * @param param the request object
     */
    public avatarsThumbsAvatarIdGet(param: AvatarsApiAvatarsThumbsAvatarIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.avatarsThumbsAvatarIdGet(param.avatarId,  options).toPromise();
    }

}

import { ObservableDraftsApi } from "./ObservableAPI";
import { DraftsApiRequestFactory, DraftsApiResponseProcessor} from "../apis/DraftsApi";

export interface DraftsApiDraftDraftIdGetRequest {
    /**
     * The ID of the draft to retrieve
     * @type string
     * @memberof DraftsApidraftDraftIdGet
     */
    draftId: string
}

export interface DraftsApiDraftDraftIdPicksGetRequest {
    /**
     * The ID of the draft to retrieve
     * @type string
     * @memberof DraftsApidraftDraftIdPicksGet
     */
    draftId: string
}

export interface DraftsApiDraftDraftIdTradedPicksGetRequest {
    /**
     * The ID of the draft to retrieve
     * @type string
     * @memberof DraftsApidraftDraftIdTradedPicksGet
     */
    draftId: string
}

export interface DraftsApiLeagueLeagueIdDraftsGetRequest {
    /**
     * The ID of the league for which you are trying to retrieve drafts.
     * @type string
     * @memberof DraftsApileagueLeagueIdDraftsGet
     */
    leagueId: string
}

export interface DraftsApiUserUserIdDraftsSportSeasonGetRequest {
    /**
     * the user is to get
     * @type string
     * @memberof DraftsApiuserUserIdDraftsSportSeasonGet
     */
    userId: string
    /**
     * Only \&quot;nfl\&quot; is supported right now
     * @type string
     * @memberof DraftsApiuserUserIdDraftsSportSeasonGet
     */
    sport: string
    /**
     * The NFL season to get
     * @type number
     * @memberof DraftsApiuserUserIdDraftsSportSeasonGet
     */
    season: number
}

export class ObjectDraftsApi {
    private api: ObservableDraftsApi

    public constructor(configuration: Configuration, requestFactory?: DraftsApiRequestFactory, responseProcessor?: DraftsApiResponseProcessor) {
        this.api = new ObservableDraftsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint retrieves a specific draft.
     * Get a specific draft
     * @param param the request object
     */
    public draftDraftIdGet(param: DraftsApiDraftDraftIdGetRequest, options?: Configuration): Promise<Array<Draft>> {
        return this.api.draftDraftIdGet(param.draftId,  options).toPromise();
    }

    /**
     * This endpoint retrieves a specific draft.
     * Get a specific draft
     * @param param the request object
     */
    public draftDraftIdPicksGet(param: DraftsApiDraftDraftIdPicksGetRequest, options?: Configuration): Promise<Array<Pick>> {
        return this.api.draftDraftIdPicksGet(param.draftId,  options).toPromise();
    }

    /**
     * This endpoint retrieves a specific draft.
     * Get a specific draft
     * @param param the request object
     */
    public draftDraftIdTradedPicksGet(param: DraftsApiDraftDraftIdTradedPicksGetRequest, options?: Configuration): Promise<Array<TradedPick>> {
        return this.api.draftDraftIdTradedPicksGet(param.draftId,  options).toPromise();
    }

    /**
     * This endpoint retrieves all drafts for a league. Keep in mind that a league can have multiple drafts, especially dynasty leagues. Drafts are sorted by most recent to earliest. Most leagues should only have one draft.
     * Get all drafts for a league
     * @param param the request object
     */
    public leagueLeagueIdDraftsGet(param: DraftsApiLeagueLeagueIdDraftsGetRequest, options?: Configuration): Promise<Array<Draft>> {
        return this.api.leagueLeagueIdDraftsGet(param.leagueId,  options).toPromise();
    }

    /**
     * This endpoint retrieves all drafts by a user.
     * Get all drafts for user
     * @param param the request object
     */
    public userUserIdDraftsSportSeasonGet(param: DraftsApiUserUserIdDraftsSportSeasonGetRequest, options?: Configuration): Promise<Array<Draft>> {
        return this.api.userUserIdDraftsSportSeasonGet(param.userId, param.sport, param.season,  options).toPromise();
    }

}

import { ObservableLeaguesApi } from "./ObservableAPI";
import { LeaguesApiRequestFactory, LeaguesApiResponseProcessor} from "../apis/LeaguesApi";

export interface LeaguesApiLeagueLeagueIdGetRequest {
    /**
     * the league to get
     * @type string
     * @memberof LeaguesApileagueLeagueIdGet
     */
    leagueId: string
}

export interface LeaguesApiLeagueLeagueIdLosesBracketGetRequest {
    /**
     * The ID of the league to retrieve matchups from
     * @type string
     * @memberof LeaguesApileagueLeagueIdLosesBracketGet
     */
    leagueId: string
}

export interface LeaguesApiLeagueLeagueIdMatchupsWeekGetRequest {
    /**
     * The ID of the league to retrieve matchups from
     * @type string
     * @memberof LeaguesApileagueLeagueIdMatchupsWeekGet
     */
    leagueId: string
    /**
     * The week these matchups take place
     * @type number
     * @memberof LeaguesApileagueLeagueIdMatchupsWeekGet
     */
    week: number
}

export interface LeaguesApiLeagueLeagueIdRostersGetRequest {
    /**
     * the league to get
     * @type string
     * @memberof LeaguesApileagueLeagueIdRostersGet
     */
    leagueId: string
}

export interface LeaguesApiLeagueLeagueIdTradedPicksGetRequest {
    /**
     * The ID of the league to retrieve matchups from
     * @type string
     * @memberof LeaguesApileagueLeagueIdTradedPicksGet
     */
    leagueId: string
}

export interface LeaguesApiLeagueLeagueIdTransactionsRoundGetRequest {
    /**
     * The ID of the league to retrieve matchups from
     * @type string
     * @memberof LeaguesApileagueLeagueIdTransactionsRoundGet
     */
    leagueId: string
    /**
     * The week you want to pull from
     * @type number
     * @memberof LeaguesApileagueLeagueIdTransactionsRoundGet
     */
    round: number
}

export interface LeaguesApiLeagueLeagueIdUsersGetRequest {
    /**
     * the league to get
     * @type string
     * @memberof LeaguesApileagueLeagueIdUsersGet
     */
    leagueId: string
}

export interface LeaguesApiLeagueLeagueIdWinnersBracketGetRequest {
    /**
     * The ID of the league to retrieve matchups from
     * @type string
     * @memberof LeaguesApileagueLeagueIdWinnersBracketGet
     */
    leagueId: string
}

export interface LeaguesApiStateSportGetRequest {
    /**
     * nfl, nba, lcs, etc
     * @type &#39;nfl&#39; | &#39;nba&#39; | &#39;lcs&#39;
     * @memberof LeaguesApistateSportGet
     */
    sport: 'nfl' | 'nba' | 'lcs'
}

export interface LeaguesApiUserUserIdLeaguesSportSeasonGetRequest {
    /**
     * the user is to get
     * @type string
     * @memberof LeaguesApiuserUserIdLeaguesSportSeasonGet
     */
    userId: string
    /**
     * Only \&quot;nfl\&quot; is supported right now
     * @type string
     * @memberof LeaguesApiuserUserIdLeaguesSportSeasonGet
     */
    sport: string
    /**
     * The NFL season to get
     * @type number
     * @memberof LeaguesApiuserUserIdLeaguesSportSeasonGet
     */
    season: number
}

export class ObjectLeaguesApi {
    private api: ObservableLeaguesApi

    public constructor(configuration: Configuration, requestFactory?: LeaguesApiRequestFactory, responseProcessor?: LeaguesApiResponseProcessor) {
        this.api = new ObservableLeaguesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint retrieves all leagues.
     * Get a specific league
     * @param param the request object
     */
    public leagueLeagueIdGet(param: LeaguesApiLeagueLeagueIdGetRequest, options?: Configuration): Promise<League> {
        return this.api.leagueLeagueIdGet(param.leagueId,  options).toPromise();
    }

    /**
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * Getting the loosers playoff bracket
     * @param param the request object
     */
    public leagueLeagueIdLosesBracketGet(param: LeaguesApiLeagueLeagueIdLosesBracketGetRequest, options?: Configuration): Promise<Array<any>> {
        return this.api.leagueLeagueIdLosesBracketGet(param.leagueId,  options).toPromise();
    }

    /**
     * This endpoint retrieves all matchups in a league for a given week. Each object in the list represents one team. The two teams with the same matchup_id match up against each other. The starters is in an ordered list of player_ids, and players is a list of all player_ids in this matchup. The bench can be deduced by removing the starters from the players field.
     * Getting matchups in a league
     * @param param the request object
     */
    public leagueLeagueIdMatchupsWeekGet(param: LeaguesApiLeagueLeagueIdMatchupsWeekGetRequest, options?: Configuration): Promise<Array<Matchup>> {
        return this.api.leagueLeagueIdMatchupsWeekGet(param.leagueId, param.week,  options).toPromise();
    }

    /**
     * This endpoint retrieves all rosters in a league.
     * Getting rosters in a league
     * @param param the request object
     */
    public leagueLeagueIdRostersGet(param: LeaguesApiLeagueLeagueIdRostersGetRequest, options?: Configuration): Promise<Array<Roster>> {
        return this.api.leagueLeagueIdRostersGet(param.leagueId,  options).toPromise();
    }

    /**
     * This endpoint retrieves all traded picks in a league, including future picks.
     * Get traded picks
     * @param param the request object
     */
    public leagueLeagueIdTradedPicksGet(param: LeaguesApiLeagueLeagueIdTradedPicksGetRequest, options?: Configuration): Promise<Array<TradedPick>> {
        return this.api.leagueLeagueIdTradedPicksGet(param.leagueId,  options).toPromise();
    }

    /**
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * Get Transactions
     * @param param the request object
     */
    public leagueLeagueIdTransactionsRoundGet(param: LeaguesApiLeagueLeagueIdTransactionsRoundGetRequest, options?: Configuration): Promise<Array<any>> {
        return this.api.leagueLeagueIdTransactionsRoundGet(param.leagueId, param.round,  options).toPromise();
    }

    /**
     * This endpoint retrieves all users in a league. This also includes each users display_name, avatar, and their metadata which sometimes includes a nickname they gave their team.
     * Getting users in a league
     * @param param the request object
     */
    public leagueLeagueIdUsersGet(param: LeaguesApiLeagueLeagueIdUsersGetRequest, options?: Configuration): Promise<Array<UserInLeague>> {
        return this.api.leagueLeagueIdUsersGet(param.leagueId,  options).toPromise();
    }

    /**
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * Getting the winners playoff bracket
     * @param param the request object
     */
    public leagueLeagueIdWinnersBracketGet(param: LeaguesApiLeagueLeagueIdWinnersBracketGetRequest, options?: Configuration): Promise<Array<any>> {
        return this.api.leagueLeagueIdWinnersBracketGet(param.leagueId,  options).toPromise();
    }

    /**
     * This endpoint retrieves all traded picks in a league, including future picks.
     * Get NFL State
     * @param param the request object
     */
    public stateSportGet(param: LeaguesApiStateSportGetRequest, options?: Configuration): Promise<SportState> {
        return this.api.stateSportGet(param.sport,  options).toPromise();
    }

    /**
     * This endpoint retrieves all leagues.
     * @param param the request object
     */
    public userUserIdLeaguesSportSeasonGet(param: LeaguesApiUserUserIdLeaguesSportSeasonGetRequest, options?: Configuration): Promise<Array<League>> {
        return this.api.userUserIdLeaguesSportSeasonGet(param.userId, param.sport, param.season,  options).toPromise();
    }

}

import { ObservablePlayersApi } from "./ObservableAPI";
import { PlayersApiRequestFactory, PlayersApiResponseProcessor} from "../apis/PlayersApi";

export interface PlayersApiPlayersNflGetRequest {
}

export interface PlayersApiPlayersSportTrendingTypeGetRequest {
    /**
     * nfl, nba, lcs, etc
     * @type &#39;nfl&#39; | &#39;nba&#39; | &#39;lcs&#39;
     * @memberof PlayersApiplayersSportTrendingTypeGet
     */
    sport: 'nfl' | 'nba' | 'lcs'
    /**
     * Either add or drop
     * @type &#39;add&#39; | &#39;drop&#39;
     * @memberof PlayersApiplayersSportTrendingTypeGet
     */
    type: 'add' | 'drop'
    /**
     * Number of hours to look back (default is 24) - optional
     * @type string
     * @memberof PlayersApiplayersSportTrendingTypeGet
     */
    lookbackHours?: string
    /**
     * Number of results you want, (default is 25) - optional
     * @type string
     * @memberof PlayersApiplayersSportTrendingTypeGet
     */
    limit?: string
}

export class ObjectPlayersApi {
    private api: ObservablePlayersApi

    public constructor(configuration: Configuration, requestFactory?: PlayersApiRequestFactory, responseProcessor?: PlayersApiResponseProcessor) {
        this.api = new ObservablePlayersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Please use this call sparingly, as it is intended only to be used once per day at most to keep your player IDs updated. The average size of this query is 5MB. <br/> Since rosters and draft picks contain Player IDs which look like \"1042\", \"2403\", \"CAR\", etc, you will need to know what those IDs map to. The /players call provides you the map necessary to look up any player. <br/> You should save this information on your own servers as this is not intended to be called every time you need to look up players due to the filesize being close to 5MB in size. You do not need to call this endpoint more than once per day. 
     * Fetch all players
     * @param param the request object
     */
    public playersNflGet(param: PlayersApiPlayersNflGetRequest, options?: Configuration): Promise<{ [key: string]: Player; }> {
        return this.api.playersNflGet( options).toPromise();
    }

    /**
     * Please give attribution to Sleeper you are using our trending data. If you'd like to embed our trending list on your website or blog, please use the embed code on the right. <br/> You can use this endpoint to get a list of trending players based on adds or drops in the past 24 hours. <br/> You should save this information on your own servers as this is not intended to be called every time you need to look up players due to the filesize being close to 5MB in size. You do not need to call this endpoint more than once per day. 
     * Trending Players
     * @param param the request object
     */
    public playersSportTrendingTypeGet(param: PlayersApiPlayersSportTrendingTypeGetRequest, options?: Configuration): Promise<Array<TrendingPlayer>> {
        return this.api.playersSportTrendingTypeGet(param.sport, param.type, param.lookbackHours, param.limit,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiUserUserIdGetRequest {
    /**
     * The id of the user to get
     * @type string
     * @memberof UserApiuserUserIdGet
     */
    userId: string
}

export interface UserApiUserUsernameGetRequest {
    /**
     * The username to get
     * @type string
     * @memberof UserApiuserUsernameGet
     */
    username: string
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update an existing pet
     * @param param the request object
     */
    public userUserIdGet(param: UserApiUserUserIdGetRequest, options?: Configuration): Promise<User> {
        return this.api.userUserIdGet(param.userId,  options).toPromise();
    }

    /**
     * Get user information
     * @param param the request object
     */
    public userUsernameGet(param: UserApiUserUsernameGetRequest, options?: Configuration): Promise<User> {
        return this.api.userUsernameGet(param.username,  options).toPromise();
    }

}
