import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories';

test.group('Polls create', () => {
  // Write your test here
  test('disallow guests from  creating a poll', async({ client, route}) => {
     const response = await client.post(route('PollsController.store'))
     response.assertStatus(401);
  })

  test('disallow when poll title and options are not defined', async({ client, route}) => {
    const user = await UserFactory.create()
    const response = await client.post(route('PollsController.store')).loginAs(user)
    response.dumpBody()
    response.assertStatus(422);
 })
})
