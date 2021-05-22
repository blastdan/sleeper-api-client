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


export interface SportState { 
    /**
     * week
     */
    week: number;
    /**
     * pre, post, regular
     */
    season_type: SportState.SeasonTypeEnum;
    /**
     * regular season start
     */
    season_start_date: string;
    /**
     * current season
     */
    season: string;
    /**
     * previous season
     */
    previous_season: string;
    /**
     * week of regular season
     */
    leg: number;
    /**
     * active season for leagues
     */
    league_season: string;
    /**
     * flips in December
     */
    league_create_season: string;
    /**
     * Which week to display in UI, can be different than week
     */
    display_week: number;
}
export namespace SportState {
    export type SeasonTypeEnum = 'pre' | 'post' | 'regular';
    export const SeasonTypeEnum = {
        Pre: 'pre' as SeasonTypeEnum,
        Post: 'post' as SeasonTypeEnum,
        Regular: 'regular' as SeasonTypeEnum
    };
}

