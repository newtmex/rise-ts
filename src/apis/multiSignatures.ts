import { MultiSignaturesAPI } from '../types/apis/MultiSignaturesAPI';
import { cback, rs as RsType } from '../types/base';
/**
 * @private
 * @internal
 */
export const multiSignatures = (rs: RsType): MultiSignaturesAPI => ({
  getPending(publicKey: string, callback?: cback<any>) {
    return rs({
      params: { publicKey },
      path: '/multisignatures/pending',
    }, callback);
  },

  getAccounts(publicKey: string, callback?: cback<any>) {
    return rs({
      params: {publicKey},
      path: '/multisignatures/accounts',
    }, callback);
  },
});
