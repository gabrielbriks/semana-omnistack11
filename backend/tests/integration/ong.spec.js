const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'jubileu',
      email: 'contato@teste.com',
      whatsapp: '6155511233',
      city: 'Japa',
      uf: 'Home',
    });

    console.log(response.body);
  });
});
