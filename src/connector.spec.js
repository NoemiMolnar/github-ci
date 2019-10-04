const { describe, it, before, beforeEach, after } = require('mocha');
const { expect } = require('chai');
const nock = require('nock');
const { connector } = require('./connector');

describe('Facebook Insights KeywordStats endpoint tests', function () {
    before(async function () {
    });

    beforeEach(function () {
        this.requestOptions = {
            credentials: {
                accessToken: '123'
            },
        };
    });

    after(function () {
    });

    it('should fetch the keywordstats from the Facebook Ads API', async function () {
        const data = await connector(this.requestOptions);

        expect(data.rows[0]).to.deep.include({
            title: 'Quality Score in Google Ads is mismatching user\'s account.',
        });
    });

});
