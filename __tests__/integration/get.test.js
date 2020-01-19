const request = require('supertest');
const app = require('../../src/index');

describe('Integration', () => {
  it('should return a response with status 200 or 500', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
  afterAll(done => {
    app.close(done);
  })
});