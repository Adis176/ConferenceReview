import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import Signup2 from './Signup/Signup2';

import Rough from './Rough/Rough';
import Rough2 from './Rough/Rough2';
import Rough3 from './Rough/Rough3';
import { EmbeddedSandbox } from './Rough/RoughApollo';
const routeConfig = {
    public: [
        {
            path: "/login",
            component: Signin
        },
        {
            path: "/signin",
            component: Signin
        },
        {
            path: "/signup",
            component: Signup
        },
        {
            path: "/signup2",
            component: Signup2
        },
        {
            path: "/explorer",
            component: EmbeddedSandbox
        },
        {
            path: "/rough",
            component: Rough
        },
        {
            path: "/rough2",
            component: Rough2
        },
        {
            path: "/rough3",
            component: Rough3
        },
        {
            path: "/",
            component: Home
        }
    ],
    protected: [
        {
            path: "/dashboard/*",
            component: Dashboard,
            children: [
                {
                    path: "", // Index route
                    component: Dashboard
                },
            ]
        },
        // {
        //     path: "/admin/*",
        //     component: AdminLayout,
        //     children: [
        //         {
        //             path: "",
        //             component: Dashboard
        //         }
        //     ]
        // }
    ]
};

export default routeConfig;