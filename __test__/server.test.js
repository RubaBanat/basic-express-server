'use strict';
const superTest = require('supertest');
const server = require('../src/server.js');
const request = superTest(server.app);

describe('Server', () => {
  it('invalid routes handler', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  it('invalid method handler', async () => {
    const response = await request.post('/person').query({name: 'ruba'});
    expect(response.status).toEqual(404);
  });
});