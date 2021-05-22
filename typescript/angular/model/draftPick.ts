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


/**
 * picks that were traded
 */
export interface DraftPick { 
    /**
     * the season this draft pick belongs to
     */
    season: string;
    /**
     * which round this draft pick is
     */
    round: number;
    /**
     * original owner\'s roster_id
     */
    roster_id: number;
    /**
     * previous owner\'s roster id (in this trade)
     */
    previous_owner_id: number;
    /**
     * the new owner of this pick after the trade
     */
    owner_id: number;
}

