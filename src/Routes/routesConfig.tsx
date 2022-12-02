import {
    Landing,
    Tchat,
    Quizz,
} from 'Pages';

export const ROUTES = {
    main: '/',
    Quizz: '/quiz',
    tchat: '/tchat',
};

export const routesConfig = [
    {
        path: ROUTES.main,
        element: <Landing />,
    },
    {
        path: ROUTES.tchat,
        element: <Tchat/>,
    },
    {
        path: ROUTES.Quizz,
        element: <Quizz/>,
    },
];
