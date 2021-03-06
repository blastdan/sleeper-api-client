/**
 * Sleeper API
 * The Sleeper API is a read-only HTTP API that is free to use and allows             access to a users leagues, drafts, and rosters. No API Token is necessary, as you cannot modify contents via this API. Be mindful of the frequency of calls. A general rule is to stay under 1000 API calls per minute, otherwise, you risk being IP-blocked.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { League } from '../model/models';
import { Matchup } from '../model/models';
import { Roster } from '../model/models';
import { SportState } from '../model/models';
import { TradedPick } from '../model/models';
import { UserInLeague } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

    protected basePath = 'https://api.sleeper.app/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Get a specific league
     * This endpoint retrieves all leagues.
     * @param leagueId the league to get
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public leagueLeagueIdGet(leagueId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<League>;
    public leagueLeagueIdGet(leagueId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<League>>;
    public leagueLeagueIdGet(leagueId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<League>>;
    public leagueLeagueIdGet(leagueId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdGet.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<League>(`${this.configuration.basePath}/league/${encodeURIComponent(String(leagueId))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Getting the loosers playoff bracket
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * @param leagueId The ID of the league to retrieve matchups from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public leagueLeagueIdLosesBracketGet(leagueId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<object>>;
    public leagueLeagueIdLosesBracketGet(leagueId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<object>>>;
    public leagueLeagueIdLosesBracketGet(leagueId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<object>>>;
    public leagueLeagueIdLosesBracketGet(leagueId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdLosesBracketGet.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<Array<object>>(`${this.configuration.basePath}/league/${encodeURIComponent(String(leagueId))}/loses_bracket`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Getting matchups in a league
     * This endpoint retrieves all matchups in a league for a given week. Each object in the list represents one team. The two teams with the same matchup_id match up against each other. The starters is in an ordered list of player_ids, and players is a list of all player_ids in this matchup. The bench can be deduced by removing the starters from the players field.
     * @param leagueId The ID of the league to retrieve matchups from
     * @param week The week these matchups take place
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public leagueLeagueIdMatchupsWeekGet(leagueId: string, week: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<Matchup>>;
    public leagueLeagueIdMatchupsWeekGet(leagueId: string, week: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<Matchup>>>;
    public leagueLeagueIdMatchupsWeekGet(leagueId: string, week: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<Matchup>>>;
    public leagueLeagueIdMatchupsWeekGet(leagueId: string, week: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdMatchupsWeekGet.');
        }
        if (week === null || week === undefined) {
            throw new Error('Required parameter week was null or undefined when calling leagueLeagueIdMatchupsWeekGet.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<Array<Matchup>>(`${this.configuration.basePath}/league/${encodeURIComponent(String(leagueId))}/matchups/${encodeURIComponent(String(week))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Getting rosters in a league
     * This endpoint retrieves all rosters in a league.
     * @param leagueId the league to get
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public leagueLeagueIdRostersGet(leagueId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<Roster>>;
    public leagueLeagueIdRostersGet(leagueId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<Roster>>>;
    public leagueLeagueIdRostersGet(leagueId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<Roster>>>;
    public leagueLeagueIdRostersGet(leagueId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdRostersGet.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<Array<Roster>>(`${this.configuration.basePath}/league/${encodeURIComponent(String(leagueId))}/rosters`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get traded picks
     * This endpoint retrieves all traded picks in a league, including future picks.
     * @param leagueId The ID of the league to retrieve matchups from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public leagueLeagueIdTradedPicksGet(leagueId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<TradedPick>>;
    public leagueLeagueIdTradedPicksGet(leagueId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<TradedPick>>>;
    public leagueLeagueIdTradedPicksGet(leagueId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<TradedPick>>>;
    public leagueLeagueIdTradedPicksGet(leagueId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdTradedPicksGet.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<Array<TradedPick>>(`${this.configuration.basePath}/league/${encodeURIComponent(String(leagueId))}/traded_picks`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Transactions
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * @param leagueId The ID of the league to retrieve matchups from
     * @param round The week you want to pull from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public leagueLeagueIdTransactionsRoundGet(leagueId: string, round: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<object>>;
    public leagueLeagueIdTransactionsRoundGet(leagueId: string, round: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<object>>>;
    public leagueLeagueIdTransactionsRoundGet(leagueId: string, round: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<object>>>;
    public leagueLeagueIdTransactionsRoundGet(leagueId: string, round: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdTransactionsRoundGet.');
        }
        if (round === null || round === undefined) {
            throw new Error('Required parameter round was null or undefined when calling leagueLeagueIdTransactionsRoundGet.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<Array<object>>(`${this.configuration.basePath}/league/${encodeURIComponent(String(leagueId))}/transactions/${encodeURIComponent(String(round))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Getting users in a league
     * This endpoint retrieves all users in a league. This also includes each users display_name, avatar, and their metadata which sometimes includes a nickname they gave their team.
     * @param leagueId the league to get
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public leagueLeagueIdUsersGet(leagueId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<UserInLeague>>;
    public leagueLeagueIdUsersGet(leagueId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<UserInLeague>>>;
    public leagueLeagueIdUsersGet(leagueId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<UserInLeague>>>;
    public leagueLeagueIdUsersGet(leagueId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdUsersGet.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<Array<UserInLeague>>(`${this.configuration.basePath}/league/${encodeURIComponent(String(leagueId))}/users`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Getting the winners playoff bracket
     * This endpoint retrieves the playoff bracket for a league for 4, 6, and 8 team playoffs. Each row represents a matchup between 2 teams.
     * @param leagueId The ID of the league to retrieve matchups from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public leagueLeagueIdWinnersBracketGet(leagueId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<object>>;
    public leagueLeagueIdWinnersBracketGet(leagueId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<object>>>;
    public leagueLeagueIdWinnersBracketGet(leagueId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<object>>>;
    public leagueLeagueIdWinnersBracketGet(leagueId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdWinnersBracketGet.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<Array<object>>(`${this.configuration.basePath}/league/${encodeURIComponent(String(leagueId))}/winners_bracket`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get NFL State
     * This endpoint retrieves all traded picks in a league, including future picks.
     * @param sport nfl, nba, lcs, etc
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public stateSportGet(sport: 'nfl' | 'nba' | 'lcs', observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<SportState>;
    public stateSportGet(sport: 'nfl' | 'nba' | 'lcs', observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<SportState>>;
    public stateSportGet(sport: 'nfl' | 'nba' | 'lcs', observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<SportState>>;
    public stateSportGet(sport: 'nfl' | 'nba' | 'lcs', observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (sport === null || sport === undefined) {
            throw new Error('Required parameter sport was null or undefined when calling stateSportGet.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<SportState>(`${this.configuration.basePath}/state/${encodeURIComponent(String(sport))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This endpoint retrieves all leagues.
     * @param userId the user is to get
     * @param sport Only \&quot;nfl\&quot; is supported right now
     * @param season The NFL season to get
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userUserIdLeaguesSportSeasonGet(userId: string, sport: string, season: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<League>>;
    public userUserIdLeaguesSportSeasonGet(userId: string, sport: string, season: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<League>>>;
    public userUserIdLeaguesSportSeasonGet(userId: string, sport: string, season: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<League>>>;
    public userUserIdLeaguesSportSeasonGet(userId: string, sport: string, season: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling userUserIdLeaguesSportSeasonGet.');
        }
        if (sport === null || sport === undefined) {
            throw new Error('Required parameter sport was null or undefined when calling userUserIdLeaguesSportSeasonGet.');
        }
        if (season === null || season === undefined) {
            throw new Error('Required parameter season was null or undefined when calling userUserIdLeaguesSportSeasonGet.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<Array<League>>(`${this.configuration.basePath}/user/${encodeURIComponent(String(userId))}/leagues/${encodeURIComponent(String(sport))}/${encodeURIComponent(String(season))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
