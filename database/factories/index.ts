import Factory from '@ioc:Adonis/Lucid/Factory'
import Poll from 'App/Models/Poll'
import PollOption from 'App/Models/PollOption'
import User from 'App/Models/User'

export const UserFactory = Factory.define(User, ({ faker })=> {
    return {
        email : faker.internet.password(),
        // fullname : faker.internet.userName(),
        password : faker.internet.password()
    }
})
.relation('polls', () => PollFactory)
.build()

export const PollFactory =  Factory.define(Poll,({ faker })=>{
    return {
        title: faker.lorem.words(4),
    }
})
.relation('options',()=> PollOptionsFactory)
.build()

export const PollOptionsFactory =  Factory.define(PollOption,({ faker })=>{
    return {
        title: faker.lorem.words(4),
    }
}).build()