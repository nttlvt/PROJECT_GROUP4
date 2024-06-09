import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { ReactQueryProvider } from './context/ReactQuerryProvider.jsx';
import ReactToastifyProvider from './context/ReactToastyfyProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactToastifyProvider>
      <BrowserRouter>
        <Provider store={store}>
          <ReactQueryProvider>
            <App />
          </ReactQueryProvider>
        </Provider>
      </BrowserRouter>
    </ReactToastifyProvider>
  </React.StrictMode>,

)
