exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.increments(); // Primary Key, vai gerar de forma automatica esse campo, como 1,2,3,4 e etc.

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("value").notNullable();

    //Irá armazenar o Id da ongs;
    table.string("ong_id").notNullable();

    /*criando a chave estrangeira;
      Dizemos que toda vez que o nosso campo acima "ong_id" estiver preenchido ele deve ser 
      um id de uma ong.
    */
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.dropTable("incidents");
};
