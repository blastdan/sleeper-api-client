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
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';



import { Configuration }                                     from '../configuration';



export interface AvatarsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Get an avatar
     * Get a full size avatar image
     * @param avatarId The avatar id to get
     */
    avatarsAvatarIdGet(avatarId: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * Get an avatar thumbnail
     * Get a thumbnail for the avatar
     * @param avatarId The avatar id to get
     */
    avatarsThumbsAvatarIdGet(avatarId: string, extraHttpRequestParams?: any): Observable<{}>;

}
