import { APIGatewayEvent } from 'aws-lambda';
const knex = require('../../knex/knex.js');

export default async function (event: APIGatewayEvent): Promise<any> {
  let employees;
  try {
    employees = await knex.select('*').from('employees_tb')
      .then(data => (data));
  } catch (getError) {
    console.log('There was problem getting the employees')
    console.log('getError', getError)
    return {
      status: 500
    }
  }
  return {
    status: 200,
    body: JSON.stringify(employees)
  }
}

