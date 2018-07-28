import {expect} from 'chai';
import * as sinon from 'sinon';
import {multiSignatures} from '../../src/apis/multiSignatures';

describe('Multisignature', () => {

  it('.getPending should call /multisignatures/pending and propagate publicKey', () => {
    const stub = sinon.stub();
    multiSignatures(stub).getPending('publicKey');
    expect(stub.calledOnce).is.true;
    expect(stub.firstCall.args[0].path).eq('/multisignatures/pending');
    expect(stub.firstCall.args[0].params).deep.eq({ publicKey: 'publicKey' });
  });

  it('.getAccounts should call /multisignatures/accounts and propagate publicKey', () => {
    const stub = sinon.stub();
    multiSignatures(stub).getAccounts('publicKey');
    expect(stub.calledOnce).is.true;
    expect(stub.firstCall.args[0].path).eq('/multisignatures/accounts');
    expect(stub.firstCall.args[0].params.publicKey).deep.eq('publicKey');
  });

});
