const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
})

exports.handler = async (event) => {
    const params = {
        TableName: 'DynamoDBTutorial',
        items: event
    };
    const id = 'asuyfgys';
    params.items.id = id;

    return await db.put(params).promise();
};