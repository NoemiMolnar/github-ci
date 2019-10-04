const { connector } = require('./connector');
const { scopeConnector } = require('./scopeConnector');
const { fields } = require('./fields');

const scopeFields = [
    {
        id: 'owner',
        name: 'owner',
        type: 'String',
        isDimension: true,
        isMetric: true,
    }
]

const endpoints = [
    {
        id: 'search-endpoint',
        name: 'Search endpoint',
        connector: connector,
        fields,
        scope: {
            enabled: true,
            required: false,
        },
    },
    {
        id: 'scopes',
        name: 'Scopes',
        connector: scopeConnector,
        fields: scopeFields,
        isSelectable: false,
        dateRange: {
            enabled: false,
            required: false,
        },
        scope: {
            enabled: true,
            required: false,
        },
    }
];

const adapter = {
    id: 'github-ci',
    authentication: {
        type: 'oauth2',
        oauth2Options: {
            version: '2.0',
            base_site: 'https://github.com/login/oauth',
            access_token_path: '/access_token',
            authorize_path: '/authorize',
            scopes: ['repo'],
            environment: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
            },
        },
    },
    endpoints,
};

module.exports = {
    adapter,
};