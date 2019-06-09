'use strict';

const superagent = require('superagent');
// const mongoose = require('mongoose');
const app = require('../../../src/app.js');

//allows us to use this mock
jest.mock('../../../src/auth/model.js');

const API_URL = 'http://localhost:8888';

describe('Authentication Server', () => {

  const PORT = 8888;
  beforeAll( () => {
    // mongoose.connect('mongodb://localhost:27017/baseball');
    app.start(PORT);
  });
  afterAll( () => {
    app.stop();
    // mongoose.connection.close();
  });

  // Note that these will actually be using the mocked models
  // from the mock version of require-dir.  IOW .. no need to spin up
  // a mongo server to run these tests. (we don't want to test mongo anyway!)

  it('gets a 401 on a bad login', () => {
    return superagent.get(API_URL)
      .set({Authorization: 'Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViM2ZmY2Y2YzI3Njc3MTY4ZDdjNGFmMCIsImlhdCI6MTUzMDkyMDE4Mn0.MNs9339mCs6pGsZlsC-FToJYkzCAEw-tvnkbvQAzuJY'})
      .then(response => {
      })
      .catch(response => {
        expect(response.status).toEqual(401);
      });
  });

  it('gets a 401 on a bad login', () => {
    return superagent.get(API_URL)
      .auth('foo','bar')
      .then(response => {
      })
      .catch(response => {
        expect(response.status).toEqual(401);
      });
  });

  it('gets a 200 on a good login', () => {
    return superagent.get(API_URL + '/signin')
      .auth('john','foo')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  it('should create a user on signup', () => {
    return superagent.post('http://localhost:8888/signup')
    .send({username:'john', password:'foo'})
    .then(response => {
      expect(response.statusCode.toBe(200));
    })
    .catch(console.err);
  });

  it('Should respond with a 400 if not body has been provided or the body is invalid', () => {
    return superagent.post('http://localhost:8888/signup')
    .send({username: '', password: ''})
    .then(response => {
      expect(response.statusCode.toBe(400));
    })
    .catch(console.err);
  })


});
//400 - POST response with no body. 
/*
CLIENT
let body = {
  user: 'richardtae',
  pass: '329r0rew',
}
http.get('localhost:3000/api/signin', body)


SERVER
req.body = {user, pas}
- check on mongo for match
if(match){
  let token = generateToken() //jfsowwfw8few9eje

}
res.body = {
  token: token
}


CLIENT
http.get('localhost:3000/api/signin', body)
  .then(res => localstorage.set('token', res.body.token);


//llater you make anotehr request get, post 

http.get('local...', body, {Authorization: 'basic ' + localstroage.get('toekn')})

*/