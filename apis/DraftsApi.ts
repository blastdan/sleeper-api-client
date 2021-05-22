// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { Draft } from '../models/Draft';
import { Pick } from '../models/Pick';
import { TradedPick } from '../models/TradedPick';

/**
 * no description
 */
export class DraftsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint retrieves a specific draft.
     * Get a specific draft
     * @param draftId The ID of the draft to retrieve
     */
    public async draftDraftIdGet(draftId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'draftId' is not null or undefined
        if (draftId === null || draftId === undefined) {
            throw new RequiredError('Required parameter draftId was null or undefined when calling draftDraftIdGet.');
        }


        // Path Params
        const localVarPath = '/draft/{draft_id}'
            .replace('{' + 'draft_id' + '}', encodeURIComponent(String(draftId)));

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
     * This endpoint retrieves a specific draft.
     * Get a specific draft
     * @param draftId The ID of the draft to retrieve
     */
    public async draftDraftIdPicksGet(draftId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'draftId' is not null or undefined
        if (draftId === null || draftId === undefined) {
            throw new RequiredError('Required parameter draftId was null or undefined when calling draftDraftIdPicksGet.');
        }


        // Path Params
        const localVarPath = '/draft/{draft_id}/picks'
            .replace('{' + 'draft_id' + '}', encodeURIComponent(String(draftId)));

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
     * This endpoint retrieves a specific draft.
     * Get a specific draft
     * @param draftId The ID of the draft to retrieve
     */
    public async draftDraftIdTradedPicksGet(draftId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'draftId' is not null or undefined
        if (draftId === null || draftId === undefined) {
            throw new RequiredError('Required parameter draftId was null or undefined when calling draftDraftIdTradedPicksGet.');
        }


        // Path Params
        const localVarPath = '/draft/{draft_id}/traded_picks'
            .replace('{' + 'draft_id' + '}', encodeURIComponent(String(draftId)));

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
     * This endpoint retrieves all drafts for a league. Keep in mind that a league can have multiple drafts, especially dynasty leagues. Drafts are sorted by most recent to earliest. Most leagues should only have one draft.
     * Get all drafts for a league
     * @param leagueId The ID of the league for which you are trying to retrieve drafts.
     */
    public async leagueLeagueIdDraftsGet(leagueId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'leagueId' is not null or undefined
        if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('Required parameter leagueId was null or undefined when calling leagueLeagueIdDraftsGet.');
        }


        // Path Params
        const localVarPath = '/league/{league_id}/drafts'
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
     * This endpoint retrieves all drafts by a user.
     * Get all drafts for user
     * @param userId the user is to get
     * @param sport Only \&quot;nfl\&quot; is supported right now
     * @param season The NFL season to get
     */
    public async userUserIdDraftsSportSeasonGet(userId: string, sport: string, season: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError('Required parameter userId was null or undefined when calling userUserIdDraftsSportSeasonGet.');
        }


        // verify required parameter 'sport' is not null or undefined
        if (sport === null || sport === undefined) {
            throw new RequiredError('Required parameter sport was null or undefined when calling userUserIdDraftsSportSeasonGet.');
        }


        // verify required parameter 'season' is not null or undefined
        if (season === null || season === undefined) {
            throw new RequiredError('Required parameter season was null or undefined when calling userUserIdDraftsSportSeasonGet.');
        }


        // Path Params
        const localVarPath = '/user/{user_id}/drafts/{sport}/{season}'
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

export class DraftsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to draftDraftIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async draftDraftIdGet(response: ResponseContext): Promise<Array<Draft> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Draft> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Draft>", ""
            ) as Array<Draft>;
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
            const body: Array<Draft> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Draft>", ""
            ) as Array<Draft>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to draftDraftIdPicksGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async draftDraftIdPicksGet(response: ResponseContext): Promise<Array<Pick> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Pick> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Pick>", ""
            ) as Array<Pick>;
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
            const body: Array<Pick> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Pick>", ""
            ) as Array<Pick>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to draftDraftIdTradedPicksGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async draftDraftIdTradedPicksGet(response: ResponseContext): Promise<Array<TradedPick> > {
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
     * @params response Response returned by the server for a request to leagueLeagueIdDraftsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leagueLeagueIdDraftsGet(response: ResponseContext): Promise<Array<Draft> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Draft> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Draft>", ""
            ) as Array<Draft>;
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
            const body: Array<Draft> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Draft>", ""
            ) as Array<Draft>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to userUserIdDraftsSportSeasonGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async userUserIdDraftsSportSeasonGet(response: ResponseContext): Promise<Array<Draft> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Draft> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Draft>", ""
            ) as Array<Draft>;
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
            const body: Array<Draft> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Draft>", ""
            ) as Array<Draft>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
