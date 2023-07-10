import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootComponent from './RootComponent'
import { persistor, store } from './redux/store'
import GlobalStyles from 'components/template/layouts/GlobalStyles'


const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GlobalStyles>
                    <RootComponent />
                </GlobalStyles>
            </PersistGate>
        </Provider>
    )
}

export default App
