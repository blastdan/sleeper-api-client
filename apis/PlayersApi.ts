// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { Player } from '../models/Player';
import { TrendingPlayer } from '../models/TrendingPlayer';

/**
 * no description
 */
export class PlayersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Please use this call sparingly, as it is intended only to be used once per day at most to keep your player IDs updated. The average size of this query is 5MB. <br/> Since rosters and draft picks contain Player IDs which look like \"1042\", \"2403\", \"CAR\", etc, you will need to know what those IDs map to. The /players call provides you the map necessary to look up any player. <br/> You should save this information on your own servers as this is not intended to be called every time you need to look up players due to the filesize being close to 5MB in size. You do not need to call this endpoint more than once per day. 
     * Fetch all players
     */
    public async playersNflGet(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/players/nfl';

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
     * Please give attribution to Sleeper you are using our trending data. If you'd like to embed our trending list on your website or blog, please use the embed code on the right. <br/> You can use this endpoint to get a list of trending players based on adds or drops in the past 24 hours. <br/> You should save this information on your own servers as this is not intended to be called every time you need to look up players due to the filesize being close to 5MB in size. You do not need to call this endpoint more than once per day. 
     * Trending Players
     * @param sport nfl, nba, lcs, etc
     * @param type Either add or drop
     * @param lookbackHours Number of hours to look back (default is 24) - optional
     * @param limit Number of results you want, (default is 25) - optional
     */
    public async playersSportTrendingTypeGet(sport: 'nfl' | 'nba' | 'lcs', type: 'add' | 'drop', lookbackHours?: string, limit?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'sport' is not null or undefined
        if (sport === null || sport === undefined) {
            throw new RequiredError('Required parameter sport was null or undefined when calling playersSportTrendingTypeGet.');
        }


        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError('Required parameter type was null or undefined when calling playersSportTrendingTypeGet.');
        }




        // Path Params
        const localVarPath = '/players/{sport}/trending/{type}'
            .replace('{' + 'sport' + '}', encodeURIComponent(String(sport)))
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lookbackHours !== undefined) {
            requestContext.setQueryParam("lookback_hours", ObjectSerializer.serialize(lookbackHours, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

}

export class PlayersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to playersNflGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async playersNflGet(response: ResponseContext): Promise<{ [key: string]: Player; } > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: Player; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: Player; }", ""
            ) as { [key: string]: Player; };
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
            const body: { [key: string]: Player; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: Player; }", ""
            ) as { [key: string]: Player; };
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to playersSportTrendingTypeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async playersSportTrendingTypeGet(response: ResponseContext): Promise<Array<TrendingPlayer> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TrendingPlayer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TrendingPlayer>", ""
            ) as Array<TrendingPlayer>;
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
            const body: Array<TrendingPlayer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TrendingPlayer>", ""
            ) as Array<TrendingPlayer>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
