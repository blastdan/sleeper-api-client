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
import { ObservableAvatarsApi } from './ObservableAPI';

import { AvatarsApiRequestFactory, AvatarsApiResponseProcessor} from "../apis/AvatarsApi";
export class PromiseAvatarsApi {
    private api: ObservableAvatarsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AvatarsApiRequestFactory,
        responseProcessor?: AvatarsApiResponseProcessor
    ) {
        this.api = new ObservableAvatarsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a full size avatar image
     * Get an avatar
     * @param avatarId The avatar id to get
     */
    public avatarsAvatarIdGet(avatarId: string, options?: Configuration): Promise<void> {
        const result = this.api.avatarsAvatarIdGet(avatarId, options);
        return result.toPromise();
    }

    /**
     * Get a thumbnail for the avatar
     * Get an avatar thumbnail
     * @param avatarId The avatar id to get
     */
    public avatarsThumbsAvatarIdGet(avatarId: string, options?: Configuration): Promise<void> {
        const result = this.api.avatarsThumbsAvatarIdGet(avatarId, options);
        return result.toPromise();
    }


}



import { ObservableDraftsApi } from './ObservableAPI';

import { DraftsApiRequestFactory, DraftsApiResponseProcessor} from "../apis/DraftsApi";
export class PromiseDraftsApi {
    private api: ObservableDraftsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DraftsApiRequestFactory,
        responseProcessor?: DraftsApiResponseProcessor
    ) {
        this.api = new ObservableDraftsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint retrieves a specific draft.
     * Get a specific draft
     * @param draftId The ID of the draft to retrieve
     */
    public draftDraftIdGet(draftId: string, options?: Configuration): Promise<Array<Draft>> {
        const result = this.api.draftDraftIdGet(draftId, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves a specific draft.
     * Get a specific draft
     * @param draftId The ID of the draft to retrieve
     */
    public draftDraftIdPicksGet(draftId: string, options?: Configuration): Promise<Array<Pick>> {
        const result = this.api.draftDraftIdPicksGet(draftId, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves a specific draft.
     * Get a specific draft
     * @param draftId The ID of the draft to retrieve
     */
    public draftDraftIdTradedPicksGet(draftId: string, options?: Configuration): Promise<Array<TradedPick>> {
        const result = this.api.draftDraftIdTradedPicksGet(draftId, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves all drafts for a league. Keep in mind that a league can have multiple drafts, especially dynasty leagues. Drafts are sorted by most recent to earliest. Most leagues should only have one draft.
     * Get all drafts for a league
     * @param leagueId The ID of the league for which you are trying to retrieve drafts.
     */
    public leagueLeagueIdDraftsGet(leagueId: string, options?: Configuration): Promise<Array<Draft>> {
        const result = this.api.leagueLeagueIdDraftsGet(leagueId, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves all drafts by a user.
     * Get all drafts for user
     * @param userId the user is to get
     * @param sport Only \&quot;nfl\&quot; is supported right now
     * @param season The NFL season to get
     */
    public userUserIdDraftsSportSeasonGet(userId: string, sport: string, season: number, options?: Configuration): Promise<Array<Draft>> {
        const result = this.api.userUserIdDraftsSportSeasonGet(userId, sport, season, options);
        return result.toPromise();
    }


}



import { ObservableLeaguesApi } from './ObservableAPI';

import { LeaguesApiRequestFactory, LeaguesApiResponseProcessor} from "../apis/LeaguesApi";
export class PromiseLeaguesApi {
    private api: ObservableLeaguesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LeaguesApiRequestFactory,
        responseProcessor?: LeaguesApiResponseProcessor
    ) {
        this.api = new ObservableLeaguesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint retrieves all leagues.
     * Get a specific league
     * @param leagueId the league to get
     */
    public leagueLeagueIdGet(leagueId: string, options?: Configuration): Promise<League> {
        const result = this.api.leagueLeagueIdGet(leagueId, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * Getting the loosers playoff bracket
     * @param leagueId The ID of the league to retrieve matchups from
     */
    public leagueLeagueIdLosesBracketGet(leagueId: string, options?: Configuration): Promise<Array<any>> {
        const result = this.api.leagueLeagueIdLosesBracketGet(leagueId, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves all matchups in a league for a given week. Each object in the list represents one team. The two teams with the same matchup_id match up against each other. The starters is in an ordered list of player_ids, and players is a list of all player_ids in this matchup. The bench can be deduced by removing the starters from the players field.
     * Getting matchups in a league
     * @param leagueId The ID of the league to retrieve matchups from
     * @param week The week these matchups take place
     */
    public leagueLeagueIdMatchupsWeekGet(leagueId: string, week: number, options?: Configuration): Promise<Array<Matchup>> {
        const result = this.api.leagueLeagueIdMatchupsWeekGet(leagueId, week, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves all rosters in a league.
     * Getting rosters in a league
     * @param leagueId the league to get
     */
    public leagueLeagueIdRostersGet(leagueId: string, options?: Configuration): Promise<Array<Roster>> {
        const result = this.api.leagueLeagueIdRostersGet(leagueId, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves all traded picks in a league, including future picks.
     * Get traded picks
     * @param leagueId The ID of the league to retrieve matchups from
     */
    public leagueLeagueIdTradedPicksGet(leagueId: string, options?: Configuration): Promise<Array<TradedPick>> {
        const result = this.api.leagueLeagueIdTradedPicksGet(leagueId, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * Get Transactions
     * @param leagueId The ID of the league to retrieve matchups from
     * @param round The week you want to pull from
     */
    public leagueLeagueIdTransactionsRoundGet(leagueId: string, round: number, options?: Configuration): Promise<Array<any>> {
        const result = this.api.leagueLeagueIdTransactionsRoundGet(leagueId, round, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves all users in a league. This also includes each users display_name, avatar, and their metadata which sometimes includes a nickname they gave their team.
     * Getting users in a league
     * @param leagueId the league to get
     */
    public leagueLeagueIdUsersGet(leagueId: string, options?: Configuration): Promise<Array<UserInLeague>> {
        const result = this.api.leagueLeagueIdUsersGet(leagueId, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * Getting the winners playoff bracket
     * @param leagueId The ID of the league to retrieve matchups from
     */
    public leagueLeagueIdWinnersBracketGet(leagueId: string, options?: Configuration): Promise<Array<any>> {
        const result = this.api.leagueLeagueIdWinnersBracketGet(leagueId, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves all traded picks in a league, including future picks.
     * Get NFL State
     * @param sport nfl, nba, lcs, etc
     */
    public stateSportGet(sport: 'nfl' | 'nba' | 'lcs', options?: Configuration): Promise<SportState> {
        const result = this.api.stateSportGet(sport, options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves all leagues.
     * @param userId the user is to get
     * @param sport Only \&quot;nfl\&quot; is supported right now
     * @param season The NFL season to get
     */
    public userUserIdLeaguesSportSeasonGet(userId: string, sport: string, season: number, options?: Configuration): Promise<Array<League>> {
        const result = this.api.userUserIdLeaguesSportSeasonGet(userId, sport, season, options);
        return result.toPromise();
    }


}



import { ObservablePlayersApi } from './ObservableAPI';

import { PlayersApiRequestFactory, PlayersApiResponseProcessor} from "../apis/PlayersApi";
export class PromisePlayersApi {
    private api: ObservablePlayersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlayersApiRequestFactory,
        responseProcessor?: PlayersApiResponseProcessor
    ) {
        this.api = new ObservablePlayersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Please use this call sparingly, as it is intended only to be used once per day at most to keep your player IDs updated. The average size of this query is 5MB. <br/> Since rosters and draft picks contain Player IDs which look like \"1042\", \"2403\", \"CAR\", etc, you will need to know what those IDs map to. The /players call provides you the map necessary to look up any player. <br/> You should save this information on your own servers as this is not intended to be called every time you need to look up players due to the filesize being close to 5MB in size. You do not need to call this endpoint more than once per day. 
     * Fetch all players
     */
    public playersNflGet(options?: Configuration): Promise<{ [key: string]: Player; }> {
        const result = this.api.playersNflGet(options);
        return result.toPromise();
    }

    /**
     * Please give attribution to Sleeper you are using our trending data. If you'd like to embed our trending list on your website or blog, please use the embed code on the right. <br/> You can use this endpoint to get a list of trending players based on adds or drops in the past 24 hours. <br/> You should save this information on your own servers as this is not intended to be called every time you need to look up players due to the filesize being close to 5MB in size. You do not need to call this endpoint more than once per day. 
     * Trending Players
     * @param sport nfl, nba, lcs, etc
     * @param type Either add or drop
     * @param lookbackHours Number of hours to look back (default is 24) - optional
     * @param limit Number of results you want, (default is 25) - optional
     */
    public playersSportTrendingTypeGet(sport: 'nfl' | 'nba' | 'lcs', type: 'add' | 'drop', lookbackHours?: string, limit?: string, options?: Configuration): Promise<Array<TrendingPlayer>> {
        const result = this.api.playersSportTrendingTypeGet(sport, type, lookbackHours, limit, options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update an existing pet
     * @param userId The id of the user to get
     */
    public userUserIdGet(userId: string, options?: Configuration): Promise<User> {
        const result = this.api.userUserIdGet(userId, options);
        return result.toPromise();
    }

    /**
     * Get user information
     * @param username The username to get
     */
    public userUsernameGet(username: string, options?: Configuration): Promise<User> {
        const result = this.api.userUsernameGet(username, options);
        return result.toPromise();
    }


}



