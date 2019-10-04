const request = require('request-promise-native');
const baseUrl = require('./baseUrl');

async function connector(requestOptions) {
    const path = '/search/';
    const [type] = requestOptions.filters.find(({ key }) => key === 'type').expressions;
    const filters = '?q=' + requestOptions.filters.filter(({ key }) => key !== 'type').map((filter) => filter.key + ':' + filter.expressions[0]).join('+');

    const uri = `https://api.github.com/search/${type}${filters}`;

    const result = await request({
        uri,
        qs: {
            access_token: requestOptions.credentials.accessToken,
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    })

    rows = result.items;

    return { rows };
}

module.exports = {
    connector,
};
