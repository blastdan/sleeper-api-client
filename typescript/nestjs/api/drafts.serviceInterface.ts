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

import { Observable }                                        from 'rxjs';

import { Draft } from '../model/draft';
import { Pick } from '../model/pick';
import { TradedPick } from '../model/tradedPick';


import { Configuration }                                     from '../configuration';


export interface DraftsServiceInterface {
    defaultHeaders: {};
    configuration: Configuration;

    /**
    * Get a specific draft
    * This endpoint retrieves a specific draft.
    * @param draftId The ID of the draft to retrieve
    */
    draftDraftIdGet(draftId: string, extraHttpRequestParams?: any): Observable<Array<Draft>>;

    /**
    * Get a specific draft
    * This endpoint retrieves a specific draft.
    * @param draftId The ID of the draft to retrieve
    */
    draftDraftIdPicksGet(draftId: string, extraHttpRequestParams?: any): Observable<Array<Pick>>;

    /**
    * Get a specific draft
    * This endpoint retrieves a specific draft.
    * @param draftId The ID of the draft to retrieve
    */
    draftDraftIdTradedPicksGet(draftId: string, extraHttpRequestParams?: any): Observable<Array<TradedPick>>;

    /**
    * Get all drafts for a league
    * This endpoint retrieves all drafts for a league. Keep in mind that a league can have multiple drafts, especially dynasty leagues. Drafts are sorted by most recent to earliest. Most leagues should only have one draft.
    * @param leagueId The ID of the league for which you are trying to retrieve drafts.
    */
    leagueLeagueIdDraftsGet(leagueId: string, extraHttpRequestParams?: any): Observable<Array<Draft>>;

    /**
    * Get all drafts for user
    * This endpoint retrieves all drafts by a user.
    * @param userId the user is to get
    * @param sport Only \&quot;nfl\&quot; is supported right now
    * @param season The NFL season to get
    */
    userUserIdDraftsSportSeasonGet(userId: string, sport: string, season: number, extraHttpRequestParams?: any): Observable<Array<Draft>>;

}