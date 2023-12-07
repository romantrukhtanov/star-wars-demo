import { observable, makeObservable, action, computed } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import type { Theme, UserTheme } from '@/types';

export class SettingsStore {
  constructor() {
    makeObservable(this);

    makePersistable(this, { name: 'SettingsStore', properties: ['userTheme'] });

    this.mediaPrefersColorSchemeDark.addEventListener('change', this.handleChangeSystemPrefersColorSchemeDark);
  }

  @observable
  public userTheme: UserTheme = 'system';

  @action.bound
  public setUserTheme = (userTheme: UserTheme) => {
      this.userTheme = userTheme;
    };

  private mediaPrefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)');

  @observable
  private isSystemPrefersColorSchemeDark: boolean = this.mediaPrefersColorSchemeDark.matches;

  @action.bound
  private handleChangeSystemPrefersColorSchemeDark = () => {
      this.isSystemPrefersColorSchemeDark = this.mediaPrefersColorSchemeDark.matches;
    };

  @computed
  public get appTheme(): Theme {
    if (this.userTheme !== 'system') {
      return this.userTheme;
    }
    return this.isSystemPrefersColorSchemeDark ? 'dark' : 'light';
  }
}
