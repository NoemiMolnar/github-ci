const request = require('request-promise-native');

async function scopeConnector(requestOptions) {
    const rows = await request({
        uri: 'https://api.github.com',
        qs: {
            access_token: requestOptions.credentials.accessToken,
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    })

    return { rows };
}

module.exports = {
    scopeConnector,
};
