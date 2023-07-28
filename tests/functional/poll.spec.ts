import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'

test.group('Polls index', () => {
    test('get collection of posts from thr database', async ({ client })=>{
     
      await UserFactory.query()
         .with('polls', 20, (poll)=> {

            console.log(poll);   
            poll.with('options',3)

        })
        .create()
       
       const response = await client.get('/polls')
       response.dumpBody()
       response.assertStatus(200)
      //  response.assertAgainstApiSpec()
      //  console.log(response.body())
    })
})
 