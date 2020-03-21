import React from 'react';
import Tabs from './components/Tabs';
import {Provider} from 'react-redux';
import {store} from './redux/store';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Tabs />
        </Provider>
    </div>
  );
}

export default App;
