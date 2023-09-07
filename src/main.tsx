import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AuthContextProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthContextProvider msal={{}} schema={{}} selects={{}}>
        <App />
    </AuthContextProvider>

)
