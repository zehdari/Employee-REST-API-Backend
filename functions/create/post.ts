import { APIGatewayEvent } from 'aws-lambda';
const knex = require('../../knex/knex.js');

export default async function (event: APIGatewayEvent): Promise<any> {
    let bodyObj;

    if (event.body != null) {
        bodyObj = JSON.parse(event.body)
    } else {
        console.log('Body is null')
    }

    if (typeof bodyObj.name == 'undefined' || typeof bodyObj.email == 'undefined' ||
        typeof bodyObj.phone == 'undefined' || typeof bodyObj.address == 'undefined' ||
        typeof bodyObj.status == 'undefined') {
        console.log('Missing parameters')
        return {
            status: 400
        }
    }

    let postParams = {
        TableName: 'employees_tb',
        Item: {
            name: bodyObj.name,
            email: bodyObj.email,
            phone: bodyObj.phone,
            address: bodyObj.address,
            status: bodyObj.status
        }
    }

    try {
        await knex.table('employees_tb').insert(postParams.Item)
            .then(data => console.log(data));

    } catch (postError) {
        console.log('There was problem posting the employee')
        console.log('postParams', postParams)

        return {
            status: 500,
        }
    }

    return {
        status: 201,
        body: JSON.stringify({
            message: 'Employee successfully posted',
            input: postParams.Item
        })
    }

}
