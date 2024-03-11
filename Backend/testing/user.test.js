const request = require('supertest');
const app = require('../server'); 
const expect = require('chai').expect;

describe('POST /register', () => {
    it('registers a new user', (done) => {
      request(app)
        .post('/api/users/register')
        .send({ username: 'testuser', email: 'test@example.com', password: 'password123' })
        .end((err, response) => {
          expect(response.statusCode).to.equal(201);
          expect(response.body).to.have.property('user');
          done();
        });
    });
  });