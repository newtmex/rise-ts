import { BaseApiResponse, cback } from '../base';
import { Account, Delegate } from '../beans';
// tslint:disable max-line-length

export interface AccountsAPI {

  /**
   * Returns balance and unconfirmed balance for the specified address!
   * @param address address to check
   * @param callback callback where to receive the result.
   */
  getBalance(address: string, callback?: cback<{ balance: string, unconfirmedBalance: string }>): Promise<{ balance: string, unconfirmedBalance: string } & BaseApiResponse>;

  /**
   * Returns the address public key
   * @param address
   * @param callback callback where to receive the result.
   */
  getPublicKey(address: string, callback?: cback<{ publicKey: string }>): Promise<{ publicKey: string } & BaseApiResponse>;

  /**
   * Get Account information by its address
   * @param address
   * @param callback callback where to receive the result.
   */
  getAccount(address: string, callback?: cback<{ account: Account }>): Promise<{ account: Account } & BaseApiResponse>;

  /**
   * Get Account information by its publicKey
   * @param publicKey
   * @param callback callback where to receive the result.
   */
  getAccountByPublicKey(publicKey: string, callback?: cback<{ account: Account }>): Promise<{ account: Account } & BaseApiResponse>;

  /**
   * Return accounts delegates by using the given address
   * @param address
   * @param callback callback where to receive the result.
   */
  getDelegates(address: string, callback?: cback<{ delegates: Delegate[] }>): Promise<{ delegates: Delegate[] } & BaseApiResponse>;

}
