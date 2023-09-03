import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
// import { AuthContextProvider } from './context/AuthContextProvider.tsx'
import App from './App'
import { AuthContextProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthContextProvider msal={{}} schema={{}} selects={{}}>
        <App />
    </AuthContextProvider>

)
