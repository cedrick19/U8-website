import { createStore } from 'framework7';

interface WalletParams {
  state: {
    walletParams: string;
  };
}

export const store = createStore({
  state: {
    walletParams: 'usdt',
  },
  actions: {
    setParams: ({ state }: WalletParams, params: string) => {
      state.walletParams = params;
    },
  },
});
