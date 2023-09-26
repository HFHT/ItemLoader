import ReactDOM from 'react-dom/client'
import { AuthContextProvider } from './context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageLayout } from './components'
import { AddItems, AddSku, Main } from './Pages'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AuthContextProvider msal={{}} schema={{}} selects={{}}>
            <PageLayout >
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/additem' element={<AddItems />} />
                    <Route path='/addsku' element={<AddSku />} />
                </Routes>
            </PageLayout>
        </AuthContextProvider>
    </BrowserRouter>
)