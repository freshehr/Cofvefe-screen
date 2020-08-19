import {CDRConfig} from "./CDRService";

export enum CDRProduct {
    Better,
    Ethercis,
    Dips,
    EhrBase,
    Code24,
    Cabolabs,
    Ocean,
    Ehrscape =7
}

const CDRConfigs : CDRConfig[] =[
    {
        name: 'c4h',
        type: CDRProduct.Ehrscape,
        url: 'https://cdr.code4health.org/rest/v1',
        username: 'ianmcnicoll_98aa716e-8bc6-40f6-a5a3-84518c4c60ef',
        password: '$2a$10$7RUqg',
        basicToken: 'Basic YmIyNjRiY2UtYzQwNy00OTgyLTkwMTctOTdkMzcyN2ZjZmE0OiQyYSQxMCQ2MTlraQ==',
    },
    {
        name: 'local_ehrbase',
        type: CDRProduct.EhrBase,
        url: 'https://cdr.code4health.org',
        username: 'ianmcnicoll_98aa716e-8bc6-40f6-a5a3-84518c4c60ef',
        password: '$2a$10$7RUqg',
    },

];

export default CDRConfigs;

