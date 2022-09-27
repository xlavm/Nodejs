var request = require('supertest')
var app = require('../server')
var assert = require('assert')
var dataApi = require('./work-api.data')

describe('work test', function() {

  it('work create sucesfully', function(done) {
    request(app)
      .post('/api/v1/work/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(dataApi)
      .expect(200, done)
  })

  it('work update sucesfully', function(done) {
    request(app)
      .put('/api/v1/work/5ffd12fb70931c35c0921fd3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(dataApi)
      .expect(200, done)
  })

  it('work delete sucesfully', function(done) {
    request(app)
      .delete('/api/v1/work/5ffd12fb70931c35c0921fd3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('find all works', function(done) {
    request(app)
      .get('/api/v1/work/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        !assert(response, null)
        done();
    })
    .catch(err => done(err))
  })

  it('find one work for id', function(done) {
    request(app)
      .get('/api/v1/work/5ffd12fb70931c35c0921fd3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert(response.body.ip, '5ffd12fb70931c35c0921fd3')
        done();
    })
    .catch(err => done(err))
  })
  

  it('page doesn`t exist', function(done) {
    request(app)
      .post('/api/v1/entrys/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text\/html/)
      .send(null)
      .expect(404, done)
  })

})