// project imports
import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// tickets routing
const TicketsPage = Loadable(lazy(() => import('views/tickets')));
const CreateTicketPage = Loadable(lazy(() => import('views/tickets/create')));
const TicketDetailPage = Loadable(lazy(() => import('views/tickets/detail')));

// Repayment Control Routing
const RepaymentControlPage = Loadable(lazy(() => import('views/repaymentcontrol')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <Navigate to="/dashboard" replace />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/tickets',
            element: <TicketsPage />
        },
        {
            path: '/tickets/create-ticket',
            element: <CreateTicketPage />
        },
        {
            path: `/tickets/:ticketID`,
            element: <TicketDetailPage />
        },
        {
            path: `/repaymentcontrol`,
            element: <RepaymentControlPage />
        }
    ]
};

export default MainRoutes;
