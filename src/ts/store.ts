import { createStore } from 'framework7';

interface WalletParams {
  state: {
    walletParams: string;
    gameActiveState: number;
  };
}

export const store = createStore({
  state: {
    walletParams: 'usdt',
    gameActiveState: 0,
  },
  actions: {
    setParams: ({ state }: WalletParams, params: string) => {
      state.walletParams = params;
    },
    setGameActiveState: ({ state }: WalletParams, activeState: number) => {
      state.gameActiveState = activeState;
    },
  },
});
