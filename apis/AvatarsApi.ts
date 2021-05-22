// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';


/**
 * no description
 */
export class AvatarsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a full size avatar image
     * Get an avatar
     * @param avatarId The avatar id to get
     */
    public async avatarsAvatarIdGet(avatarId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'avatarId' is not null or undefined
        if (avatarId === null || avatarId === undefined) {
            throw new RequiredError('Required parameter avatarId was null or undefined when calling avatarsAvatarIdGet.');
        }


        // Path Params
        const localVarPath = '/avatars/{avatar_id}'
            .replace('{' + 'avatar_id' + '}', encodeURIComponent(String(avatarId)));

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
     * Get a thumbnail for the avatar
     * Get an avatar thumbnail
     * @param avatarId The avatar id to get
     */
    public async avatarsThumbsAvatarIdGet(avatarId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'avatarId' is not null or undefined
        if (avatarId === null || avatarId === undefined) {
            throw new RequiredError('Required parameter avatarId was null or undefined when calling avatarsThumbsAvatarIdGet.');
        }


        // Path Params
        const localVarPath = '/avatars/thumbs/{avatar_id}'
            .replace('{' + 'avatar_id' + '}', encodeURIComponent(String(avatarId)));

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

export class AvatarsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to avatarsAvatarIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async avatarsAvatarIdGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to avatarsThumbsAvatarIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async avatarsThumbsAvatarIdGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
