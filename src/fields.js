fields = [
    {
        id: 'title',
        name: 'Title',
        type: 'String',
        isDimension: true,
        isMetric: true,
    },
    {
        id: 'number',
        name: 'Number',
        type: 'String',
        isDimension: true,
        isMetric: true,
    },
    {
        id: 'type',
        name: 'Type',
        type: 'String',
        isDimension: true,
        isMetric: true,
        filter: {
            min: 1,
            max: 1,
            options: [
                {
                    id: 'issues',
                    name: 'Issues',
                },
                {
                    id: 'labels',
                    name: 'Labels',
                },
                {
                    id: 'repositories',
                    name: 'Repositories',
                },
            ],
            operators: [
                {
                    type: 'INCLUDES',
                    capabilities: {
                        caseSensitive: true,
                        caseInsensitive: false,
                        negate: true,
                    },
                },
            ],
        },
    },
    {
        id: 'label',
        name: 'Label',
        type: 'String',
        isDimension: true,
        isMetric: true,
        filter: {
            max: 1,
            options: [
                {
                    id: 'bug',
                    name: 'Bugs',
                },
            ],
            operators: [
                {
                    type: 'INCLUDES',
                    capabilities: {
                        caseSensitive: true,
                        caseInsensitive: false,
                        negate: true,
                    },
                },
            ],
        },
    },
    {
        id: 'repo',
        name: 'Repo',
        type: 'String',
        isDimension: true,
        isMetric: true,
        filter: {
            max: 1,
            options: [
                {
                    id: 'Swydo/Support',
                    name: 'Swydo/Support',
                },
            ],
            operators: [
                {
                    type: 'INCLUDES',
                    capabilities: {
                        caseSensitive: true,
                        caseInsensitive: false,
                        negate: true,
                    },
                },
            ],
        },
    },
    {
        id: 'is',
        name: 'Status',
        type: 'String',
        isDimension: true,
        isMetric: true,
        filter: {
            min: 1,
            max: 1,
            options: [
                {
                    id: 'open',
                    name: 'Open',
                },
                {
                    id: 'closed',
                    name: 'Closed',
                },
            ],
            operators: [
                {
                    type: 'INCLUDES',
                    capabilities: {
                        caseSensitive: true,
                        caseInsensitive: false,
                        negate: true,
                    },
                },
            ],
        },
    },
];

module.exports = {
    fields,
};
