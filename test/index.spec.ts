import * as chai from 'chai';
import * as sinon from 'sinon';
import * as chaiAsPromised from 'chai-as-promised';
import {transport} from '../src/apis/transport';
import {APIWrapper, rise} from '../src/index';

const { expect } = chai;
chai.use(chaiAsPromised);

const subpackages = ['accounts', 'blocks', 'delegates', 'loader', 'multiSignatures', 'peers', 'signatures', 'transactions'];
const functions   = ['buildTransport', 'transport'];

describe('rise', () => {
  it('should have field nodeAddress', () => {
    expect(rise.nodeAddress).to.be.string;
  });
  it('should set nodeAddress to wallet', () => {
    expect(rise.nodeAddress).to.eq('https://wallet.rise.vision');
  })
  it('should have fn newWrapper', () => {
    expect(rise.newWrapper).to.be.a('function');
  });

  it('should have timeout', () => {
    expect(rise.timeout).to.be.a('number');
  });

  // subpackages.forEach((subPac) => {
  //   it(`should have called .${subPac}`, () => {
  //     expect(apiStub[subPac].calledOnce).is.true;
  //   });
  // });

  functions.forEach((fn) => {
    it(`should have .${fn}() defined and function`, () => {

      expect(rise[fn]).to.exist;
      expect(rise[fn]).to.be.a('function');
    });
  });

  describe('newWrapper', () => {
    let wrapp: APIWrapper;
    beforeEach(() => {
      wrapp = rise.newWrapper('http://localhost.com');
    });
    it('should create a newWrapper with all the subpackages defined', () => {
      subpackages.forEach((sp) => expect(wrapp[sp]).to.exist);
      functions.forEach((sp) => expect(wrapp[sp]).to.exist);
    });
    it('should allow to define timeout which will be then read ', async () => {
      const opts = {timeout: 100000};
      let called = false;
      sinon.stub(opts, 'timeout').get(() => {
        called = true;
        return 5;
      });
      const w = rise.newWrapper('http://localhost', opts);
      try { await w.blocks.getNethash(); } catch (e) {}
      expect(called).is.true;
    });
  });

  it('one method should call resolver and probably fail due to inexistent host', async () => {
    rise.nodeAddress = 'http://127.0.0.1:7777';
    rise.timeout = 10000;
    expect(rise.loader.status()).to.be.rejected;
  });

});
