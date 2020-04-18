const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/conection');

describe('ONG', () => {
  //antes de cada um dos testes
  beforeEach(async () => {
    /* è bom implementar aqui um Rollback das migrations, para que ele venha desfaze-las
    em seguida, porque com isso estaremos zerando o BD que consequentemente também estaremos
    evitando que o BD de teste fique enorme e/ou provoque outros erros  
    */
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  //Executar algo depois de todos os testes
  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'jubileu',
      email: 'contato@teste.com',
      whatsapp: '6155511233',
      city: 'Japa',
      uf: 'DF',
    });

    //Eu espero
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
