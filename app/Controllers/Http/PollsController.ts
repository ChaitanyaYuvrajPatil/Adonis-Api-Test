import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Poll from 'App/Models/Poll'
// import Logger from '@ioc:Adonis/Core/Logger'
import { schema } from '@ioc:Adonis/Core/Validator';
  

export default class PollsController {

    public async index({} : HttpContextContract){
        // Logger.info('A info message')
        // Logger.error("Error occur while ... ")

        const polls = await Poll.query().preload('options').preload('auther').paginate(1,20);

        return polls.serialize({
            fields: ['title', 'auther'],
        })
    }

    public async store({ request }: HttpContextContract) {
        const payload = await request.validate({
            schema: schema.create({
                title: schema.string(),
                options: schema.array().members(
                    schema.object().members({
                        title: schema.string()
                    })
                )
            })
        })
        return payload;
        
    }
}
 