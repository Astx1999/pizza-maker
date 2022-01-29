import React, {Suspense, lazy} from 'react';
import {Router} from '@reach/router';
import Site from "./layouts/site";
import reducers from './state/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Bag from "./pages/bag/bag";

const Menu = lazy(() => import ( './pages/menu/menu'));
const Home = lazy(() => import ( './pages/home/home'));
const Make = lazy(() => import ( './pages/make/make'));
const AboutUs = lazy(() => import ( './pages/about_us/about_us'));

function App() {

    const store = createStore(
        reducers,
        composeWithDevTools(),
    )

    return (
        <div>
            <Provider store={store}>
                <Suspense fallback={'loading...'}>
                    <Router>
                        <Site path="/">
                            <Home path={'/'}/>
                            <Menu path={'/menu'}/>
                            <Make path={'/make'}/>
                            <AboutUs path={'/about-us'}/>
                            <Bag path={'/shopping-bag'}/>
                        </Site>
                    </Router>
                </Suspense>
            </Provider>

        </div>
    );
}

export default App;
