import axios from 'axios';

import {
  AccountsAPI,
  BlocksAPI,
  DelegatesAPI,
  LoaderAPI,
  MultiSignaturesAPI,
  PeersAPI,
  SignaturesAPI,
  TransactionsAPI,
  TransportApi,
  TransportHeaders
} from './types/apis/';

import {
  accounts,
  blocks,
  delegates,
  loader,
  multiSignatures,
  peers,
  signatures,
  transactions,
  transport
} from './apis/';
import {addTransportBuilder, requester} from './internal_utils';
import {BaseApiResponse, cback as cbackType} from './types/base';

export * from './types/beans';

export interface RiseAPI extends APIWrapper {
  /**
   * Default Node Address: ex: http://localhost:1234 (no leading slash)
   */
  nodeAddress: string;

  /**
   * Timeout for default DposAPI requests
   */
  timeout: number;

  /**
   * Specify if error should be rewritten as response.
   */
  errorAsResponse: boolean;

  /**
   * Creates a new API Wrapper with the given node address.
   * So that you can be connected to multiple nodes at once.
   * @param nodeAddress Ex: http://localhost:1234 (no leading slash)
   * @param opts connection options
   */
  newWrapper(nodeAddress: string, opts?: { timeout: number }): APIWrapper;
}

export interface APIWrapper {
  /**
   * Accounts APIs
   */
  accounts: AccountsAPI;
  /**
   * Blocks Query APIs
   */
  blocks: BlocksAPI;
  /**
   * Node loading status APIs
   */
  loader: LoaderAPI;
  /**
   * Transactions APIs
   */
  transactions: TransactionsAPI;
  /**
   * Peers APIs
   */
  peers: PeersAPI;
  /**
   * Signature APIs
   */
  signatures: SignaturesAPI;
  /**
   * Delegates APIs
   */
  delegates: DelegatesAPI;
  /**
   * Multi Signature Accounts APIs
   */
  multiSignatures: MultiSignaturesAPI;

  /**
   * Easily create a transport API without providing headers.
   * @param {boolean} flushCache flush current transportAPI cache
   * @returns {Promise<TransportApi>}
   */
  buildTransport: (flushCache?: boolean) => Promise<TransportApi>;

  /**
   * Access transport APIs
   * @param {TransportHeaders} headers
   * @returns {TransportApi}
   */
  transport: (headers: TransportHeaders) => TransportApi;

  rawRequest: <R>(obj: { noApiPrefix?: boolean, headers?: any, params?: any, path: string, method?: string, data?: any }, cback: cbackType<R>) => Promise<R & BaseApiResponse>;
}

export const rise: RiseAPI = (() => {
  const toRet = {
    errorAsResponse: true,
    nodeAddress: 'https://wallet.rise.vision',
    newWrapper(nodeAddress: string, opts: {timeout: number, errorAsResponse?: boolean} = {timeout: 4000}): APIWrapper {
      const req = requester(axios, nodeAddress, {...{errorAsResponse: true}, ...opts});
      return addTransportBuilder(
        {
          accounts       : accounts(req),
          blocks         : blocks(req),
          delegates      : delegates(req),
          loader         : loader(req),
          multiSignatures: multiSignatures(req),
          peers          : peers(req),
          rawRequest     : req,
          signatures     : signatures(req),
          transactions   : transactions(req),
          transport      : transport(req),
        },
        req
      );
    },
    timeout: 4000,
  } as RiseAPI;

  function rproxy<R>(obj: { params?: any, path: string, method?: string, data?: any }, cback: cbackType<R>): Promise<R & BaseApiResponse> {
    return requester(axios, toRet.nodeAddress, {timeout: toRet.timeout, errorAsResponse: toRet.errorAsResponse}).apply(null, arguments);
  }

  toRet.accounts        = accounts(rproxy);
  toRet.loader          = loader(rproxy);
  toRet.transactions    = transactions(rproxy);
  toRet.peers           = peers(rproxy);
  toRet.blocks          = blocks(rproxy);
  toRet.signatures      = signatures(rproxy);
  toRet.delegates       = delegates(rproxy);
  toRet.multiSignatures = multiSignatures(rproxy);
  toRet.transport       = transport(rproxy);
  toRet.rawRequest      = rproxy;

  return addTransportBuilder(toRet, rproxy);
})();
