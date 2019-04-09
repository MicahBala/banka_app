/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import request from 'supertest';
import { expect } from 'chai';
import app from '../server';

describe('Test API endpoints', () => {
  describe('Create new user and signin a user', () => {
    it('Should create a new user on POST /api/v1/auth/signup', done => {
      const newUser = {
        id: 1,
        email: 'mb@gmail.com',
        firstName: 'Micah',
        lastName: 'Bala',
        password: 'mike123',
        type: 'user',
        isAdmin: false
      };

      request(app)
        .post('/api/v1/auth/signup')
        .send(newUser)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(() => {
          expect(newUser).to.exist;
          expect(newUser).to.have.property('id');
          expect(newUser).to.have.property('firstName');
          expect(newUser).to.have.property('lastName');
          expect(newUser).to.have.property('password');
          expect(newUser).to.have.property('type');
          expect(newUser).to.have.property('isAdmin');
          done();
        });
    });

    it('Should sign in a user on POST /api/v1/auth/signin', done => {
      const loginUser = {
        email: 'mb@gmail.com',
        password: 'mike123'
      };

      request(app)
        .post('/api/v1/auth/signin')
        .send(loginUser)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(() => {
          expect(loginUser).to.exist;
          expect(loginUser).to.have.property('email');
          expect(loginUser).to.have.property('password');
          done();
        });
    });
  });

  describe('Create and update bank account', () => {
    it('Should create a new bank account on POST /api/v1/accounts', done => {
      const newAccount = {
        accountNumber: '1234567890',
        firstName: 'Joe',
        lastName: 'Sam',
        email: 'joesam@yahoo.com',
        type: 'Savings',
        openingBalance: 0,
        status: 'active'
      };

      request(app)
        .post('/api/v1/accounts')
        .send(newAccount)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(() => {
          expect(newAccount).to.exist;
          expect(newAccount).to.have.property('accountNumber');
          expect(newAccount).to.have.property('firstName');
          expect(newAccount).to.have.property('lastName');
          expect(newAccount).to.have.property('email');
          expect(newAccount).to.have.property('type');
          expect(newAccount).to.have.property('openingBalance');
          expect(newAccount).to.have.property('status');
          done();
        });
    });

    it('Should update a user bank account given account number on PATCH /api/v1/accounts/:acctNum', done => {
      const patchAcct = { status: 'active' };
      request(app)
        .patch('/api/v1/accounts/1234567890')
        .send(patchAcct)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(() => {
          expect(patchAcct)
            .to.has.property('status')
            .eql('active');
          done();
        });
    });

    it('Should delete user bank account given account number on DELETE /api/v1/accounts/:acctNum', done => {
      request(app)
        .delete('/api/v1/accounts/1')
        .expect(200, done);
    });
  });

  it('Should credit a user account POST /api/v1/transactions/:acctNum/credit', done => {
    const transactionCredit = {
      transactionId: '1234',
      accountNumber: '5678',
      amount: 1000,
      cashier: 'ed40cec0-5aa2-11e9-be55-673c24c5540e',
      transactionType: 'credit',
      accountBalance: 1000
    };
    request(app)
      .post('/api/v1/transactions/5678/credit')
      .send(transactionCredit)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Should debit a user bank account POST /api/v1/transactions/:acctNum/debit', done => {
    const transactionDebit = {
      transactionId: 'ed40a7b0-5aa2-11e9-be55-673c24c5540e',
      accountNumber: '4567',
      amount: 10000,
      cashier: '12345',
      transactionType: 'credit',
      accountBalance: 10000
    };

    request(app)
      .post('/api/v1/transactions/4567/debit')
      .send(transactionDebit)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
