import { Injectable } from '@angular/core';
import { createStore, select, getStoresSnapshot, withProps } from '@ngneat/elf';
import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';

interface User {
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthProps {
  user: User | null;
  token: string | null;
}

const authStore = createStore(
  { name: 'auth' },
  withProps<AuthProps>({ user: null, token: null })
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
