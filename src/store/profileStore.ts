interface WalletParams {
  state: {
    walletParams: string;
    gameActiveState: number;
    fundActiveState: number;
  };
}
interface ProfileActions {
  setParams: ({ state }: WalletParams, params: string) => void;
  setGameActiveState: ({ state }: WalletParams, activeState: number) => void;
  setFundActiveState: ({ state }: WalletParams, activeState: number) => void;
}

export const initialProfileState = {
  walletParams: 'usdt',
  gameActiveState: 0,
  fundActiveState: 0,
};

export const profileStoreAction: ProfileActions = {
  setParams: ({ state }: WalletParams, params: string) => {
    state.walletParams = params;
  },
  setGameActiveState: ({ state }: WalletParams, activeState: number) => {
    state.gameActiveState = activeState;
  },
  setFundActiveState: ({ state }: WalletParams, activeState: number) => {
    state.fundActiveState = activeState;
  },
};
