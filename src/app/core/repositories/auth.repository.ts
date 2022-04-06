import { Injectable } from '@angular/core';
import { createStore, select, getStoresSnapshot, withProps } from '@ngneat/elf';
import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';
import { User } from '../interfaces/user';

interface AuthProps {
  user: User | undefined;
  token: string | undefined;
}

const authStore = createStore(
  { name: 'auth' },
  withProps<AuthProps>({ user: undefined, token: undefined })
);

persistState(authStore, {
  key: 'auth',
  storage: localStorageStrategy,
});

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  user$ = authStore.pipe(select((state) => state.user));

  setUser(user: User) {
    authStore.update((state) => ({ ...state, user }));
  }

  updateTermsAndConditions(version: string) {
    authStore.update((state) => ({
      ...state,
      user: {
        ...state.user,
        data: { ...state.user?.data, termsAndConditions: version },
      },
    }));
  }

  setToken(token: string) {
    authStore.update((state) => ({ ...state, token }));
  }

  reset() {
    authStore.reset();
  }

  getToken(): string {
    return getStoresSnapshot()['auth'].token;
  }
}
