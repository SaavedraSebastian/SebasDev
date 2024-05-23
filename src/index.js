import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './script.js';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Main from './main';
import Aside from './aside';
import Single from './single';
import Basic from './layout/basic';
import Message from './message';
import Service from './service';
import Liga from './liga';





const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className="col-md-8">
                        <Main></Main>
                    </div>
                    <div className="col-md-4">
                        <Aside></Aside>
                    </div>
                    <div className='col-md-8'>
                        <Message></Message>
                    </div>
                    <div className='col-md-4'>
                        <Liga></Liga>
                    </div>
                    <div className='col-md-12'>
                        <Service></Service>
                    </div>
                </>
            },
            {
                path: "detalle/:slug",
                element: <Single />,
            },
        ],
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);