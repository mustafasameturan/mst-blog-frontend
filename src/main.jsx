import ReactDOM from 'react-dom/client'
import 'boxicons';
import '~/assets/css/style.css'
import routes from './routes'
import store from './stores'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import FirebaseProvider from "~/providers/firebase-provider/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <FirebaseProvider>
            <RouterProvider router={routes} />
        </FirebaseProvider>
    </Provider>
)
