import { TransactionsAPI } from '../types/apis/TransactionsAPI';
import { cback, rs as RsType } from '../types/base';
import { Transaction } from '../types/beans';
/**
 * @private
 * @internal
 */
export const transactions = (rs: RsType): TransactionsAPI => ({

  get<T>(id: string, callback?: cback<{ transaction: Transaction<T> }>) {
    return rs({
      params: {id},
      path: '/transactions/get',
    }, callback);
  },

  count(callback?: cback<{ confirmed: number, multisignature: number, unconfirmed: number, queued: number }>) {
    return rs({
      path: '/transactions/count',
    }, callback);
  },

  getList(query = {}, callback?) {
    return rs({
      params: {...query},
      path: '/transactions',
    }, callback);
  },

  getUnconfirmedTransactions(callback?: cback<{ transactions: Array<Transaction<any>> }>) {
    return rs({
      path: '/transactions/unconfirmed',
    }, callback);
  },

  getUnconfirmedTransaction(id: string, callback?: cback<{ transactions: Array<Transaction<any>> }>) {
    return rs({
      params: {id},
      path: '/transactions/unconfirmed/get',
    }, callback);
  },

  put(tx: Array<Transaction<any>>|Transaction<any>, callback?: cback<void>) {
    if (Array.isArray(tx)) {
      return rs({
        method: 'PUT',
        params: {transactions: tx},
        path: '/transactions/',
      }, callback);
    }
    return rs({
      method: 'PUT',
      params: {transaction: tx},
      path: '/transactions/',
    }, callback);
  }
});
