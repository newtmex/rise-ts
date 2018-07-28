import { AccountsAPI } from '../types/apis/AccountsAPI';
import { cback, rs as RsType } from '../types/base';
import { Account, Delegate } from '../types/beans';

/**
 * @private
 * @internal
 */
export const accounts = (rs: RsType): AccountsAPI => ({

  getBalance(address: string, callback?: cback<{ balance: string, unconfirmedBalance: string }>) {
    return rs(
      {
        params: {address},
        path: '/accounts/getBalance',
      },
      callback
    );
  },

  getPublicKey(address: string, callback?: cback<{ publicKey: string }>) {
    return rs(
      {
        params: {address},
        path: '/accounts/getPublicKey',
      },
      callback
    );
  },

  getAccount(address: string, callback?: cback<{ account: Account }>) {
    return rs(
      {
        params: {address},
        path: '/accounts',
      },
      callback
    );
  },

  getAccountByPublicKey(publicKey: string, callback?: cback<{ account: Account }>) {
    return rs(
      {
        params: {publicKey},
        path: '/accounts',
      },
      callback
    );
  },

  getDelegates(address: string, callback?: cback<{ delegates: Delegate[] }>) {
    return rs(
      {
        params: {address},
        path: '/accounts/delegates',
      },
      callback
    );
  },

});
