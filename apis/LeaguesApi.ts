// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { League } from '../models/League';
import { Matchup } from '../models/Matchup';
import { Roster } from '../models/Roster';
import { SportState } from '../models/SportState';
import { TradedPick } from '../models/TradedPick';
import { UserInLeague } from '../models/UserInLeague';

/**
 * no description
 */
export class LeaguesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint retrieves all leagues.
     * Get a specific league
     * @param leagueId the league to get
     */
    public async leagueLeagueIdGet(leagueId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'leagueId' is not null or undefined
        if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('Required parameter leagueId was null or undefined when calling leagueLeagueIdGet.');
        }


        // Path Params
        const localVarPath = '/league/{league_id}'
            .replace('{' + 'league_id' + '}', encodeURIComponent(String(leagueId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * Getting the loosers playoff bracket
     * @param leagueId The ID of the league to retrieve matchups from
     */
    public async leagueLeagueIdLosesBracketGet(leagueId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'leagueId' is not null or undefined
        if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('Required parameter leagueId was null or undefined when calling leagueLeagueIdLosesBracketGet.');
        }


        // Path Params
        const localVarPath = '/league/{league_id}/loses_bracket'
            .replace('{' + 'league_id' + '}', encodeURIComponent(String(leagueId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * This endpoint retrieves all matchups in a league for a given week. Each object in the list represents one team. The two teams with the same matchup_id match up against each other. The starters is in an ordered list of player_ids, and players is a list of all player_ids in this matchup. The bench can be deduced by removing the starters from the players field.
     * Getting matchups in a league
     * @param leagueId The ID of the league to retrieve matchups from
     * @param week The week these matchups take place
     */
    public async leagueLeagueIdMatchupsWeekGet(leagueId: string, week: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'leagueId' is not null or undefined
        if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('Required parameter leagueId was null or undefined when calling leagueLeagueIdMatchupsWeekGet.');
        }


        // verify required parameter 'week' is not null or undefined
        if (week === null || week === undefined) {
            throw new RequiredError('Required parameter week was null or undefined when calling leagueLeagueIdMatchupsWeekGet.');
        }


        // Path Params
        const localVarPath = '/league/{league_id}/matchups/{week}'
            .replace('{' + 'league_id' + '}', encodeURIComponent(String(leagueId)))
            .replace('{' + 'week' + '}', encodeURIComponent(String(week)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * This endpoint retrieves all rosters in a league.
     * Getting rosters in a league
     * @param leagueId the league to get
     */
    public async leagueLeagueIdRostersGet(leagueId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'leagueId' is not null or undefined
        if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('Required parameter leagueId was null or undefined when calling leagueLeagueIdRostersGet.');
        }


        // Path Params
        const localVarPath = '/league/{league_id}/rosters'
            .replace('{' + 'league_id' + '}', encodeURIComponent(String(leagueId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * This endpoint retrieves all traded picks in a league, including future picks.
     * Get traded picks
     * @param leagueId The ID of the league to retrieve matchups from
     */
    public async leagueLeagueIdTradedPicksGet(leagueId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'leagueId' is not null or undefined
        if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('Required parameter leagueId was null or undefined when calling leagueLeagueIdTradedPicksGet.');
        }


        // Path Params
        const localVarPath = '/league/{league_id}/traded_picks'
            .replace('{' + 'league_id' + '}', encodeURIComponent(String(leagueId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * Get Transactions
     * @param leagueId The ID of the league to retrieve matchups from
     * @param round The week you want to pull from
     */
    public async leagueLeagueIdTransactionsRoundGet(leagueId: string, round: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'leagueId' is not null or undefined
        if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('Required parameter leagueId was null or undefined when calling leagueLeagueIdTransactionsRoundGet.');
        }


        // verify required parameter 'round' is not null or undefined
        if (round === null || round === undefined) {
            throw new RequiredError('Required parameter round was null or undefined when calling leagueLeagueIdTransactionsRoundGet.');
        }


        // Path Params
        const localVarPath = '/league/{league_id}/transactions/{round}'
            .replace('{' + 'league_id' + '}', encodeURIComponent(String(leagueId)))
            .replace('{' + 'round' + '}', encodeURIComponent(String(round)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * This endpoint retrieves all users in a league. This also includes each users display_name, avatar, and their metadata which sometimes includes a nickname they gave their team.
     * Getting users in a league
     * @param leagueId the league to get
     */
    public async leagueLeagueIdUsersGet(leagueId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'leagueId' is not null or undefined
        if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('Required parameter leagueId was null or undefined when calling leagueLeagueIdUsersGet.');
        }


        // Path Params
        const localVarPath = '/league/{league_id}/users'
            .replace('{' + 'league_id' + '}', encodeURIComponent(String(leagueId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * Getting the winners playoff bracket
     * @param leagueId The ID of the league to retrieve matchups from
     */
    public async leagueLeagueIdWinnersBracketGet(leagueId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'leagueId' is not null or undefined
        if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('Required parameter leagueId was null or undefined when calling leagueLeagueIdWinnersBracketGet.');
        }


        // Path Params
        const localVarPath = '/league/{league_id}/winners_bracket'
            .replace('{' + 'league_id' + '}', encodeURIComponent(String(leagueId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * This endpoint retrieves all traded picks in a league, including future picks.
     * Get NFL State
     * @param sport nfl, nba, lcs, etc
     */
    public async stateSportGet(sport: 'nfl' | 'nba' | 'lcs', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'sport' is not null or undefined
        if (sport === null || sport === undefined) {
            throw new RequiredError('Required parameter sport was null or undefined when calling stateSportGet.');
        }


        // Path Params
        const localVarPath = '/state/{sport}'
            .replace('{' + 'sport' + '}', encodeURIComponent(String(sport)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * This endpoint retrieves all leagues.
     * @param userId the user is to get
     * @param sport Only \&quot;nfl\&quot; is supported right now
     * @param season The NFL season to get
     */
    public async userUserIdLeaguesSportSeasonGet(userId: string, sport: string, season: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError('Required parameter userId was null or undefined when calling userUserIdLeaguesSportSeasonGet.');
        }


        // verify required parameter 'sport' is not null or undefined
        if (sport === null || sport === undefined) {
            throw new RequiredError('Required parameter sport was null or undefined when calling userUserIdLeaguesSportSeasonGet.');
        }


        // verify required parameter 'season' is not null or undefined
        if (season === null || season === undefined) {
            throw new RequiredError('Required parameter season was null or undefined when calling userUserIdLeaguesSportSeasonGet.');
        }


        // Path Params
        const localVarPath = '/user/{user_id}/leagues/{sport}/{season}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'sport' + '}', encodeURIComponent(String(sport)))
            .replace('{' + 'season' + '}', encodeURIComponent(String(season)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

}

export class LeaguesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to leagueLeagueIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leagueLeagueIdGet(response: ResponseContext): Promise<League > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: League = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "League", ""
            ) as League;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Bad Request -- Your request is invalid.");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found -- The specified kitten could not be found.");
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Too Many Requests -- You&#39;re requesting too many kittens! Slow down!");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error -- We had a problem with our server. Try again later.");
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Service Unavailable -- We&#39;re temporarily offline for maintenance. Please try again later.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: League = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "League", ""
            ) as League;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to leagueLeagueIdLosesBracketGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leagueLeagueIdLosesBracketGet(response: ResponseContext): Promise<Array<any> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<any> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<any>", ""
            ) as Array<any>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Bad Request -- Your request is invalid.");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found -- The specified kitten could not be found.");
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Too Many Requests -- You&#39;re requesting too many kittens! Slow down!");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error -- We had a problem with our server. Try again later.");
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Service Unavailable -- We&#39;re temporarily offline for maintenance. Please try again later.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<any> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<any>", ""
            ) as Array<any>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to leagueLeagueIdMatchupsWeekGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leagueLeagueIdMatchupsWeekGet(response: ResponseContext): Promise<Array<Matchup> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Matchup> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Matchup>", ""
            ) as Array<Matchup>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Bad Request -- Your request is invalid.");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found -- The specified kitten could not be found.");
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Too Many Requests -- You&#39;re requesting too many kittens! Slow down!");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error -- We had a problem with our server. Try again later.");
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Service Unavailable -- We&#39;re temporarily offline for maintenance. Please try again later.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Matchup> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Matchup>", ""
            ) as Array<Matchup>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to leagueLeagueIdRostersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leagueLeagueIdRostersGet(response: ResponseContext): Promise<Array<Roster> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Roster> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Roster>", ""
            ) as Array<Roster>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Bad Request -- Your request is invalid.");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found -- The specified kitten could not be found.");
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Too Many Requests -- You&#39;re requesting too many kittens! Slow down!");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error -- We had a problem with our server. Try again later.");
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Service Unavailable -- We&#39;re temporarily offline for maintenance. Please try again later.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Roster> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Roster>", ""
            ) as Array<Roster>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to leagueLeagueIdTradedPicksGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leagueLeagueIdTradedPicksGet(response: ResponseContext): Promise<Array<TradedPick> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TradedPick> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TradedPick>", ""
            ) as Array<TradedPick>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Bad Request -- Your request is invalid.");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found -- The specified kitten could not be found.");
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Too Many Requests -- You&#39;re requesting too many kittens! Slow down!");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error -- We had a problem with our server. Try again later.");
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Service Unavailable -- We&#39;re temporarily offline for maintenance. Please try again later.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TradedPick> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TradedPick>", ""
            ) as Array<TradedPick>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to leagueLeagueIdTransactionsRoundGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leagueLeagueIdTransactionsRoundGet(response: ResponseContext): Promise<Array<any> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<any> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<any>", ""
            ) as Array<any>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Bad Request -- Your request is invalid.");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found -- The specified kitten could not be found.");
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Too Many Requests -- You&#39;re requesting too many kittens! Slow down!");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error -- We had a problem with our server. Try again later.");
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Service Unavailable -- We&#39;re temporarily offline for maintenance. Please try again later.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<any> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<any>", ""
            ) as Array<any>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to leagueLeagueIdUsersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leagueLeagueIdUsersGet(response: ResponseContext): Promise<Array<UserInLeague> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<UserInLeague> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<UserInLeague>", ""
            ) as Array<UserInLeague>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Bad Request -- Your request is invalid.");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found -- The specified kitten could not be found.");
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Too Many Requests -- You&#39;re requesting too many kittens! Slow down!");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error -- We had a problem with our server. Try again later.");
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Service Unavailable -- We&#39;re temporarily offline for maintenance. Please try again later.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<UserInLeague> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<UserInLeague>", ""
            ) as Array<UserInLeague>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to leagueLeagueIdWinnersBracketGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leagueLeagueIdWinnersBracketGet(response: ResponseContext): Promise<Array<any> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<any> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<any>", ""
            ) as Array<any>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Bad Request -- Your request is invalid.");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found -- The specified kitten could not be found.");
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Too Many Requests -- You&#39;re requesting too many kittens! Slow down!");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error -- We had a problem with our server. Try again later.");
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Service Unavailable -- We&#39;re temporarily offline for maintenance. Please try again later.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<any> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<any>", ""
            ) as Array<any>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to stateSportGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async stateSportGet(response: ResponseContext): Promise<SportState > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SportState = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SportState", ""
            ) as SportState;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Bad Request -- Your request is invalid.");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found -- The specified kitten could not be found.");
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Too Many Requests -- You&#39;re requesting too many kittens! Slow down!");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error -- We had a problem with our server. Try again later.");
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Service Unavailable -- We&#39;re temporarily offline for maintenance. Please try again later.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SportState = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SportState", ""
            ) as SportState;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to userUserIdLeaguesSportSeasonGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async userUserIdLeaguesSportSeasonGet(response: ResponseContext): Promise<Array<League> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<League> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<League>", ""
            ) as Array<League>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Bad Request -- Your request is invalid.");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found -- The specified kitten could not be found.");
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Too Many Requests -- You&#39;re requesting too many kittens! Slow down!");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error -- We had a problem with our server. Try again later.");
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Service Unavailable -- We&#39;re temporarily offline for maintenance. Please try again later.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<League> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<League>", ""
            ) as Array<League>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
