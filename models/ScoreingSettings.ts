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

export class ScoreingSettings {
    'pass2pt': number;
    'passInt': number;
    'fgmiss': number;
    'recYd': number;
    'xpmiss': number;
    'fgm3039': number;
    'blkKick': number;
    'ptsAllow713': number;
    'ff': number;
    'fgm2029': number;
    'fgm4049': number;
    'ptsAllow16': number;
    'stFumRec': number;
    'defStFf': number;
    'stFf': number;
    'ptsAllow2834': number;
    'fgm50p': number;
    'fumRec': number;
    'defTd': number;
    'fgm019': number;
    '_int': number;
    'ptsAllow0': number;
    'ptsAllow2127': number;
    'rec2pt': number;
    'rec': number;
    'xpm': number;
    'stTd': number;
    'defStFumRec': number;
    'defStTd': number;
    'sack': number;
    'fumRecTd': number;
    'rush2pt': number;
    'recTd': number;
    'ptsAllow35p': number;
    'ptsAllow1420': number;
    'rushYd': number;
    'passYd': number;
    'passTd': number;
    'rushTd': number;
    'fumLost': number;
    'fum': number;
    'safe': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pass2pt",
            "baseName": "pass_2pt",
            "type": "number",
            "format": ""
        },
        {
            "name": "passInt",
            "baseName": "pass_int",
            "type": "number",
            "format": ""
        },
        {
            "name": "fgmiss",
            "baseName": "fgmiss",
            "type": "number",
            "format": ""
        },
        {
            "name": "recYd",
            "baseName": "rec_yd",
            "type": "number",
            "format": ""
        },
        {
            "name": "xpmiss",
            "baseName": "xpmiss",
            "type": "number",
            "format": ""
        },
        {
            "name": "fgm3039",
            "baseName": "fgm_30_39",
            "type": "number",
            "format": ""
        },
        {
            "name": "blkKick",
            "baseName": "blk_kick",
            "type": "number",
            "format": ""
        },
        {
            "name": "ptsAllow713",
            "baseName": "pts_allow_7_13",
            "type": "number",
            "format": ""
        },
        {
            "name": "ff",
            "baseName": "ff",
            "type": "number",
            "format": ""
        },
        {
            "name": "fgm2029",
            "baseName": "fgm_20_29",
            "type": "number",
            "format": ""
        },
        {
            "name": "fgm4049",
            "baseName": "fgm_40_49",
            "type": "number",
            "format": ""
        },
        {
            "name": "ptsAllow16",
            "baseName": "pts_allow_1_6",
            "type": "number",
            "format": ""
        },
        {
            "name": "stFumRec",
            "baseName": "st_fum_rec",
            "type": "number",
            "format": ""
        },
        {
            "name": "defStFf",
            "baseName": "def_st_ff",
            "type": "number",
            "format": ""
        },
        {
            "name": "stFf",
            "baseName": "st_ff",
            "type": "number",
            "format": ""
        },
        {
            "name": "ptsAllow2834",
            "baseName": "pts_allow_28_34",
            "type": "number",
            "format": ""
        },
        {
            "name": "fgm50p",
            "baseName": "fgm_50p",
            "type": "number",
            "format": ""
        },
        {
            "name": "fumRec",
            "baseName": "fum_rec",
            "type": "number",
            "format": ""
        },
        {
            "name": "defTd",
            "baseName": "def_td",
            "type": "number",
            "format": ""
        },
        {
            "name": "fgm019",
            "baseName": "fgm_0_19",
            "type": "number",
            "format": ""
        },
        {
            "name": "_int",
            "baseName": "int",
            "type": "number",
            "format": ""
        },
        {
            "name": "ptsAllow0",
            "baseName": "pts_allow_0",
            "type": "number",
            "format": ""
        },
        {
            "name": "ptsAllow2127",
            "baseName": "pts_allow_21_27",
            "type": "number",
            "format": ""
        },
        {
            "name": "rec2pt",
            "baseName": "rec_2pt",
            "type": "number",
            "format": ""
        },
        {
            "name": "rec",
            "baseName": "rec",
            "type": "number",
            "format": ""
        },
        {
            "name": "xpm",
            "baseName": "xpm",
            "type": "number",
            "format": ""
        },
        {
            "name": "stTd",
            "baseName": "st_td",
            "type": "number",
            "format": ""
        },
        {
            "name": "defStFumRec",
            "baseName": "def_st_fum_rec",
            "type": "number",
            "format": ""
        },
        {
            "name": "defStTd",
            "baseName": "def_st_td",
            "type": "number",
            "format": ""
        },
        {
            "name": "sack",
            "baseName": "sack",
            "type": "number",
            "format": ""
        },
        {
            "name": "fumRecTd",
            "baseName": "fum_rec_td",
            "type": "number",
            "format": ""
        },
        {
            "name": "rush2pt",
            "baseName": "rush_2pt",
            "type": "number",
            "format": ""
        },
        {
            "name": "recTd",
            "baseName": "rec_td",
            "type": "number",
            "format": ""
        },
        {
            "name": "ptsAllow35p",
            "baseName": "pts_allow_35p",
            "type": "number",
            "format": ""
        },
        {
            "name": "ptsAllow1420",
            "baseName": "pts_allow_14_20",
            "type": "number",
            "format": ""
        },
        {
            "name": "rushYd",
            "baseName": "rush_yd",
            "type": "number",
            "format": ""
        },
        {
            "name": "passYd",
            "baseName": "pass_yd",
            "type": "number",
            "format": ""
        },
        {
            "name": "passTd",
            "baseName": "pass_td",
            "type": "number",
            "format": ""
        },
        {
            "name": "rushTd",
            "baseName": "rush_td",
            "type": "number",
            "format": ""
        },
        {
            "name": "fumLost",
            "baseName": "fum_lost",
            "type": "number",
            "format": ""
        },
        {
            "name": "fum",
            "baseName": "fum",
            "type": "number",
            "format": ""
        },
        {
            "name": "safe",
            "baseName": "safe",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ScoreingSettings.attributeTypeMap;
    }
    
    public constructor() {
    }
}
