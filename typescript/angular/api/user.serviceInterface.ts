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

import { User } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface UserServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Update an existing pet
     * 
     * @param userId The id of the user to get
     */
    userUserIdGet(userId: string, extraHttpRequestParams?: any): Observable<User>;

    /**
     * Get user information
     * 
     * @param username The username to get
     */
    userUsernameGet(username: string, extraHttpRequestParams?: any): Observable<User>;

}
