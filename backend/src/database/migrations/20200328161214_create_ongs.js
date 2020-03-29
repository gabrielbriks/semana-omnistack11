exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    //Campos da table
    table.string("id").primary(); //adicionando campo 'id' do tipo 'string' que é a chave primaria do nosso bd.
    table.string("name").notNullable(); // campo 'name' e não pode ser nula.
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable(); // campo cidade
    table.string("uf", 2).notNullable(); // campo estado, como ja sabemos que será sempre 2, adicionarmos segundo param.
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
