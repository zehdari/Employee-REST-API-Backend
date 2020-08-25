import { APIGatewayEvent } from 'aws-lambda';
const knex = require('../../knex/knex.js');

export default async function (event: APIGatewayEvent): Promise<any> {

  const deleteStatus = async () => {
    employeeStatus = await knex('employees_tb').where({
      id: deleteParams.Key.id
    }).select('status');
  }

  const deactivateEmployee = async () => {
    knex('employees_tb').where({ id: deleteParams.Key.id })
      .update({ status: 'Inactive' })
      .then(console.log('Deactivation success'));
    console.log('id: ', deleteParams.Key.id)
  }

  let deleteParams = {
    TableName: 'employees_tb',
    Key: {
      id: event.pathParameters.id
    }
  }
  console.log(deleteParams.Key.id)
  let employeeStatus;

  try {
    await deleteStatus()
  } catch (patchError) {
    console.log('There was problem posting the employee')
    console.log('deleteParams', deleteParams)
    return {
      status: 500
    }
  }
  employeeStatus = employeeStatus[0]['status'];
  if (employeeStatus == 'Active') {
    try {
      await deactivateEmployee()
    } catch (patchError) {
      console.log('There was problem posting the employee')
      console.log('deleteParams', deleteParams)
      return {
        status: 500
      }

    }
  } else {
    return {
      status: 200,
      body: JSON.stringify({
        message: 'Employee already deactivated',
        id: deleteParams.Key.id
      })
    }
  }

  return {
    status: 201,
    body: JSON.stringify({
      message: 'Employee successfully deactivated',
      id: deleteParams.Key.id
    })
  }
}

