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
import { DraftPick } from './draftPick';
import { WaiverBudget } from './waiverBudget';


export interface Transaction { 
    type: string;
    transaction_id: string;
    status_updated: number;
    status: string;
    /**
     * Trades do not use this field
     */
    settings: object | null;
    /**
     * roster_ids involved in this transaction
     */
    roster_ids: Array<number>;
    metadata: object | null;
    /**
     * in football, this is the week
     */
    leg: number;
    drops: object;
    draft_picks: Array<DraftPick>;
    /**
     * user id who initiated the transaction
     */
    creator: string;
    created: number;
    /**
     * roster_ids of the people who agreed to this transaction
     */
    consenter_ids: Array<number>;
    adds: object | null;
    waiver_budget: Array<WaiverBudget>;
}

