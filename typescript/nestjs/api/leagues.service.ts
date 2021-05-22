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

import { HttpService, Inject, Injectable, Optional } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { League } from '../model/league';
import { Matchup } from '../model/matchup';
import { Roster } from '../model/roster';
import { SportState } from '../model/sportState';
import { TradedPick } from '../model/tradedPick';
import { UserInLeague } from '../model/userInLeague';
import { Configuration } from '../configuration';


@Injectable()
export class LeaguesService {

    protected basePath = 'https://api.sleeper.app/v1';
    public defaultHeaders = new Map()
    public configuration = new Configuration();

    constructor(protected httpClient: HttpService, @Optional() configuration: Configuration) {
        this.configuration = configuration || this.configuration;
        this.basePath = configuration?.basePath || this.basePath;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        return consumes.includes(form);
    }

    /**
     * Get a specific league
     * This endpoint retrieves all leagues.
     * @param leagueId the league to get
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public leagueLeagueIdGet(leagueId: string, ): Observable<AxiosResponse<League>>;
    public leagueLeagueIdGet(leagueId: string, ): Observable<any> {

        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<League>(`${this.basePath}/league/${encodeURIComponent(String(league_id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
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
    public leagueLeagueIdLosesBracketGet(leagueId: string, ): Observable<AxiosResponse<Array<object>>>;
    public leagueLeagueIdLosesBracketGet(leagueId: string, ): Observable<any> {

        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdLosesBracketGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<object>>(`${this.basePath}/league/${encodeURIComponent(String(league_id))}/loses_bracket`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
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
    public leagueLeagueIdMatchupsWeekGet(leagueId: string, week: number, ): Observable<AxiosResponse<Array<Matchup>>>;
    public leagueLeagueIdMatchupsWeekGet(leagueId: string, week: number, ): Observable<any> {

        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdMatchupsWeekGet.');
        }

        if (week === null || week === undefined) {
            throw new Error('Required parameter week was null or undefined when calling leagueLeagueIdMatchupsWeekGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<Matchup>>(`${this.basePath}/league/${encodeURIComponent(String(league_id))}/matchups/${encodeURIComponent(String(week))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
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
    public leagueLeagueIdRostersGet(leagueId: string, ): Observable<AxiosResponse<Array<Roster>>>;
    public leagueLeagueIdRostersGet(leagueId: string, ): Observable<any> {

        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdRostersGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<Roster>>(`${this.basePath}/league/${encodeURIComponent(String(league_id))}/rosters`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
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
    public leagueLeagueIdTradedPicksGet(leagueId: string, ): Observable<AxiosResponse<Array<TradedPick>>>;
    public leagueLeagueIdTradedPicksGet(leagueId: string, ): Observable<any> {

        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdTradedPicksGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<TradedPick>>(`${this.basePath}/league/${encodeURIComponent(String(league_id))}/traded_picks`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
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
    public leagueLeagueIdTransactionsRoundGet(leagueId: string, round: number, ): Observable<AxiosResponse<Array<object>>>;
    public leagueLeagueIdTransactionsRoundGet(leagueId: string, round: number, ): Observable<any> {

        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdTransactionsRoundGet.');
        }

        if (round === null || round === undefined) {
            throw new Error('Required parameter round was null or undefined when calling leagueLeagueIdTransactionsRoundGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<object>>(`${this.basePath}/league/${encodeURIComponent(String(league_id))}/transactions/${encodeURIComponent(String(round))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
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
    public leagueLeagueIdUsersGet(leagueId: string, ): Observable<AxiosResponse<Array<UserInLeague>>>;
    public leagueLeagueIdUsersGet(leagueId: string, ): Observable<any> {

        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdUsersGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<UserInLeague>>(`${this.basePath}/league/${encodeURIComponent(String(league_id))}/users`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
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
    public leagueLeagueIdWinnersBracketGet(leagueId: string, ): Observable<AxiosResponse<Array<object>>>;
    public leagueLeagueIdWinnersBracketGet(leagueId: string, ): Observable<any> {

        if (leagueId === null || leagueId === undefined) {
            throw new Error('Required parameter leagueId was null or undefined when calling leagueLeagueIdWinnersBracketGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<object>>(`${this.basePath}/league/${encodeURIComponent(String(league_id))}/winners_bracket`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
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
    public stateSportGet(sport: 'nfl' | 'nba' | 'lcs', ): Observable<AxiosResponse<SportState>>;
    public stateSportGet(sport: 'nfl' | 'nba' | 'lcs', ): Observable<any> {

        if (sport === null || sport === undefined) {
            throw new Error('Required parameter sport was null or undefined when calling stateSportGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<SportState>(`${this.basePath}/state/${encodeURIComponent(String(sport))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * This endpoint retrieves all leagues.
     * 
     * @param userId the user is to get
     * @param sport Only \&quot;nfl\&quot; is supported right now
     * @param season The NFL season to get
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userUserIdLeaguesSportSeasonGet(userId: string, sport: string, season: number, ): Observable<AxiosResponse<Array<League>>>;
    public userUserIdLeaguesSportSeasonGet(userId: string, sport: string, season: number, ): Observable<any> {

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

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<League>>(`${this.basePath}/user/${encodeURIComponent(String(user_id))}/leagues/${encodeURIComponent(String(sport))}/${encodeURIComponent(String(season))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
}
