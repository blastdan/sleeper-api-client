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
import { ScoreingSettings } from './scoreingSettings';
import { LeagueSettings } from './leagueSettings';


export interface League { 
    total_rosters: number;
    /**
     * can also be \"drafting\", \"in_season\", or \"complete\";
     */
    status: string;
    sport: string;
    settings: LeagueSettings;
    season_type: string;
    season: string;
    scoring_settings: ScoreingSettings;
    roster_positions: Array<string>;
    previous_league_id: string;
    name: string;
    league_id: string;
    draft_id: string;
    avatar: string;
}

