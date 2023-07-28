import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'poll_options'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('poll_id').unsigned().notNullable().references('id').inTable('polls')
      table.string('title').notNullable()
      table.integer('votes_count').notNullable().defaultTo(0)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
