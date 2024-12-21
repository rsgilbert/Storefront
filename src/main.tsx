import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './store'
import { SnackbarProvider } from 'notistack'
import { Amplify} from 'aws-amplify'
import outputs from '../amplify_outputs.json'


Amplify.configure(outputs)
performRender();

function performRender() {  
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <SnackbarProvider>
            <App />
        </SnackbarProvider>
      </Provider>
    </React.StrictMode>,
  )
}