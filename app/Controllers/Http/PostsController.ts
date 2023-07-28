import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cache from '@ioc:Kaperskyguru/Adonis-Cache';
import Post from 'App/Models/Post'
import Logger from '@ioc:Adonis/Core/Logger'
import _ from 'lodash'


export default class PostsController {
    public async index()
    {  
         //Lodash package function
        const data = [1, 2, 3, 4, 5];
        const doubledData = _.map(data, (num) => num * 2);
        console.log("Lodash data : ", doubledData);

        //For Cache 
        const forums = await Cache.remember('forums',60, async function () {
            return await Post.all();
        })

        return forums;
    }

    public async store({request}: HttpContextContract)
    {
       try{
            const data = request.body()
            const post = new Post()
            post.title = data.title;
            post.content = data.content
            post.save();
            Logger.info("Data is saved successfully...."); 
            return {
                type : "success"
            }
       }catch(e){
            Logger.error('Error Uccur while storing....')
            return {
                type : "error"
            }
       }
        
    }
}
