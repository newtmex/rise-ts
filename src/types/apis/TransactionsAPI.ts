import {BaseApiResponse, cback} from '../base';
import {Transaction, TransactionType} from '../beans';

export interface TransactionsAPI {

  get<T>(id: string, callback?: cback<{ transaction: Transaction<T> }>): Promise<{ transaction: Transaction<T> & { height: number, blockId: string, confirmations: number } } & BaseApiResponse>;

  getList(query?: {
            blockId?: string, 'and:blockId'?: string,
            type?: TransactionType, 'and:type'?: TransactionType,
            senderId?: string, 'and:senderId'?: string,
            recipientId?: string, 'and:recipientId'?: string,
            fromHeight?: number, 'and:fromHeight'?: number,
            toHeight?: number, 'and:toHeight'?: number,
            fromUnixTime?: number, 'and:fromUnixTime'?: number,
            toUnixTime?: number, 'and:toUnixTime'?: number,
            limit?: number, offset?: number, orderBy?: string,
          },
          callback?: cback<{ count: number, transactions: Array<(Transaction<any> & { height: number, blockId: string, confirmations: number })> }>): Promise<{ count: number, transactions: Array<(Transaction<any> & { height: number, blockId: string, confirmations: number })> } & BaseApiResponse>;

  count(callback?: cback<{ confirmed: number, multisignature: number, unconfirmed: number, queued: number }>): Promise<{ confirmed: number, multisignature: number, unconfirmed: number, queued: number } & BaseApiResponse>;

  getUnconfirmedTransactions(callback?: cback<{ transactions: Array<Transaction<any>> }>): Promise<{ transactions: Array<Transaction<any>> } & BaseApiResponse>;

  getUnconfirmedTransaction(id: string, callback?: cback<{ transactions: Array<Transaction<any>> }>): Promise<{ transactions: Array<Transaction<any>> } & BaseApiResponse>;

  /**
   * Enqueues a new transaction (or multiple transactions) for inclusion in the block
   * @param {Array<Transaction<any>> | Transaction<any>} tx
   * @param {cback<void>} callback
   * @since 1.1.1 core version
   */
  put(tx: Array<Transaction<any>>|Transaction<any>, callback?: cback<void>): Promise<BaseApiResponse>;
}
