import { APIGatewayEvent } from 'aws-lambda';
const knex = require('../../knex/knex.js');

export default async function (event: APIGatewayEvent): Promise<any> {
  let employeeStatus;

  const patchStatus = async () => {
    employeeStatus = await knex('employees_tb').where({
      id: patchParams.Key.id
    }).select('status');
  }
  const activateEmployee = async () => {
    knex('employees_tb').where({ id: patchParams.Key.id })
      .update({ status: 'Active' })
      .then(console.log("Activation Success"));
    console.log("id: ", patchParams.Key.id)
  }

  let patchParams = {
    TableName: 'employees_tb',
    Key: {
      id: event.pathParameters.id
    }
  }
  console.log(patchParams.Key.id)

  if (!patchParams.Key.id) {
    console.log('No id found')
    return {
      status: 400
    }
  }

  try {
    await patchStatus()
  } catch (patchError) {
    console.log('There was problem posting the employee')
    console.log('patchParams', patchParams)
    return {
      status: 500
    }
  }

  employeeStatus = employeeStatus[0]['status'];
  if (employeeStatus == 'Inactive') {
    try {
      await activateEmployee()
    } catch (patchError) {
      console.log('There was problem posting the employee')
      console.log('patchParams', patchParams)
      return {
        status: 500
      }

    }
  } else {
    return {
      status: 200,
      body: JSON.stringify({
        message: 'Employee already active',
        id: patchParams.Key.id
      })
    }
  }

  return {
    status: 201,
    body: JSON.stringify({
      message: 'Employee successfully activated',
      id: patchParams.Key.id
    })
  }
}

