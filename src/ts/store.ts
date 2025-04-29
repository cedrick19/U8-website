import { initialProfileState, profileStoreAction } from '@/store/profileStore';
import { createStore } from 'framework7';

export const store = createStore({
  state: {
    ...initialProfileState,
  },
  actions: {
    ...profileStoreAction,
  },
});
