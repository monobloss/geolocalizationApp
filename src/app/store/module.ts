import {NgModule} from '@angular/core';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState} from './model';
import {createLogger} from 'redux-logger';
import {RootEpics} from './epics';
import {rootReducer} from './reducers';
import {GlobalActions} from "./global/globalActions";
import {GlobalEpics} from "./global/globalEpics";


@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics, GlobalActions, GlobalEpics],
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    private rootEpics: RootEpics ,
    devTools: DevToolsExtension
  ) {
    const storeEnhancers = devTools.isEnabled() ?
      [ devTools.enhancer() ] :
      [];

    // TODO: Add root reducer
    store.configureStore(
      rootReducer,
      {},
      [ createLogger(), ...rootEpics.createEpics() ],
      storeEnhancers);
  }
}
