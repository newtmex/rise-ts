import { expect } from 'chai';
import * as sinon from 'sinon';
import { accounts } from '../../src/apis/accounts';
import { apiBasicChecker } from './testutils';

describe('Accounts', () => {

  it('.getBalance should propagate given params and construct url correcly', () => {
    const spy = sinon.spy();
    accounts(spy).getBalance('address');
    apiBasicChecker(spy, '/accounts/getBalance', undefined);
    expect(spy.firstCall.args[0].params).to.be.deep.eq({address: 'address'});
  });

  it('.getAccountByPublicKey should propagate given params and construct url correcly', () => {
    const spy = sinon.spy();
    accounts(spy).getAccountByPublicKey('publicKey');
    apiBasicChecker(spy, '/accounts', undefined);
    expect(spy.firstCall.args[0].params).to.be.deep.eq({publicKey: 'publicKey'});
  });

  it('.getPublicKey should propagate given params and construct url correcly', () => {
    const spy = sinon.spy();
    accounts(spy).getPublicKey('address');
    apiBasicChecker(spy, '/accounts/getPublicKey', undefined);
    expect(spy.firstCall.args[0].params).to.be.deep.eq({address: 'address'});

  });

  it('.getAccount should propagate given params and construct url correctly', () => {
    const spy = sinon.spy();
    accounts(spy).getAccount('address');
    apiBasicChecker(spy, '/accounts', undefined);
    expect(spy.firstCall.args[0].params).to.be.deep.eq({address: 'address'});

  });

  it('.getDelegates should propagate given params and construct url correctly', () => {
    const spy = sinon.spy();
    accounts(spy).getDelegates('address');
    apiBasicChecker(spy, '/accounts/delegates', undefined);
    expect(spy.firstCall.args[0].params).to.be.deep.eq({address: 'address'});

  });

});
