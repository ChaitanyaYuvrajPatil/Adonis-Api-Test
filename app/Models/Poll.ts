import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify' 

import User from './User'
import PollOption from './PollOption'

export default class Poll extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null})
  public userId: number

  @column()
  public title: string

  @column()
  @slugify({
    strategy: 'dbIncrement',  
    fields: ['title']
  })

  public slug: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
   
  @belongsTo(() => User)
  public auther: BelongsTo<typeof User>

  @hasMany(()=> PollOption)
  public options: HasMany<typeof PollOption>
}
 