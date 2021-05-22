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
import { Configuration } from '../configuration';


@Injectable()
export class AvatarsService {

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
     * Get an avatar
     * Get a full size avatar image
     * @param avatarId The avatar id to get
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public avatarsAvatarIdGet(avatarId: string, ): Observable<AxiosResponse<any>>;
    public avatarsAvatarIdGet(avatarId: string, ): Observable<any> {

        if (avatarId === null || avatarId === undefined) {
            throw new Error('Required parameter avatarId was null or undefined when calling avatarsAvatarIdGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<any>(`${this.basePath}/avatars/${encodeURIComponent(String(avatar_id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Get an avatar thumbnail
     * Get a thumbnail for the avatar
     * @param avatarId The avatar id to get
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public avatarsThumbsAvatarIdGet(avatarId: string, ): Observable<AxiosResponse<any>>;
    public avatarsThumbsAvatarIdGet(avatarId: string, ): Observable<any> {

        if (avatarId === null || avatarId === undefined) {
            throw new Error('Required parameter avatarId was null or undefined when calling avatarsThumbsAvatarIdGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<any>(`${this.basePath}/avatars/thumbs/${encodeURIComponent(String(avatar_id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
}
