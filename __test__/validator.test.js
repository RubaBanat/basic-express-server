'use strict';
const superTest = require('supertest');
const server = require('../src/server.js');
const request = superTest(server.app);

describe('validator', () => {
  it('handle error', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });
  it('handle invalid name', async () => {
    const response = await request.get('/person').query({name: 'ruba'});
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({name: 'ruba'});
  });
});