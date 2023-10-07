import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        <NativeBaseProvider>
          <Routes />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
