/**
 * Sleeper API
 * The Sleeper API is a read-only HTTP API that is free to use and allows             access to a users leagues, drafts, and rosters. No API Token is necessary, as you cannot modify contents via this API. Be mindful of the frequency of calls. A general rule is to stay under 1000 API calls per minute, otherwise, you risk being IP-blocked.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Player {
    'hashtag': string;
    'depthChartPosition': number;
    'status': string;
    'sport': string;
    'fantasyPositions': Array<string>;
    'number': number;
    'searchLastName': string;
    'injuryStartDate': string;
    'weight': string;
    'position': string;
    'practiceParticipation': string;
    'sportradarId': string;
    'team': string;
    'lastName': string;
    'college': string;
    'fantasyDataId': number;
    'injuryStatus': string;
    'playerId': string;
    'height': string;
    'searchFullName': string;
    'age': number;
    'statsId': string;
    'birthCountry': string;
    'espnId': string;
    'searchRank': number;
    'firstName': string;
    'depthChartOrder': number;
    'yearsExp': number;
    'rotowireId': string;
    'rotoworldId': number;
    'searchFirstName': string;
    'yahooId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hashtag",
            "baseName": "hashtag",
            "type": "string",
            "format": ""
        },
        {
            "name": "depthChartPosition",
            "baseName": "depth_chart_position",
            "type": "number",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "sport",
            "baseName": "sport",
            "type": "string",
            "format": ""
        },
        {
            "name": "fantasyPositions",
            "baseName": "fantasy_positions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "number",
            "format": ""
        },
        {
            "name": "searchLastName",
            "baseName": "search_last_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "injuryStartDate",
            "baseName": "injury_start_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "string",
            "format": ""
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "string",
            "format": ""
        },
        {
            "name": "practiceParticipation",
            "baseName": "practice_participation",
            "type": "string",
            "format": ""
        },
        {
            "name": "sportradarId",
            "baseName": "sportradar_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "college",
            "baseName": "college",
            "type": "string",
            "format": ""
        },
        {
            "name": "fantasyDataId",
            "baseName": "fantasy_data_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "injuryStatus",
            "baseName": "injury_status",
            "type": "string",
            "format": ""
        },
        {
            "name": "playerId",
            "baseName": "player_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "string",
            "format": ""
        },
        {
            "name": "searchFullName",
            "baseName": "search_full_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "age",
            "baseName": "age",
            "type": "number",
            "format": ""
        },
        {
            "name": "statsId",
            "baseName": "stats_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "birthCountry",
            "baseName": "birth_country",
            "type": "string",
            "format": ""
        },
        {
            "name": "espnId",
            "baseName": "espn_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "searchRank",
            "baseName": "search_rank",
            "type": "number",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "depthChartOrder",
            "baseName": "depth_chart_order",
            "type": "number",
            "format": ""
        },
        {
            "name": "yearsExp",
            "baseName": "years_exp",
            "type": "number",
            "format": ""
        },
        {
            "name": "rotowireId",
            "baseName": "rotowire_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "rotoworldId",
            "baseName": "rotoworld_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "searchFirstName",
            "baseName": "search_first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "yahooId",
            "baseName": "yahoo_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Player.attributeTypeMap;
    }
    
    public constructor() {
    }
}

