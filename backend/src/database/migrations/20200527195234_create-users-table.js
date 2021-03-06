exports.up = function (knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary().unsigned();
		table.string('name').notNullable();
		table.string('email').unique().index().notNullable();
		table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
		table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('users');
};
