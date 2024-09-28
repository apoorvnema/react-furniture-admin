import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import appProviderTheme from '../assets/appprovidertheme';
import { createTheme } from '@mui/material/styles';
import OrdersCard from '../components/OrdersCard';
import ItemsCard from '../components/ItemsCard';
import { Button, Fab, Typography } from '@mui/material';

const theme = createTheme(appProviderTheme);

function Orders({ pathname, navigate }) {
    let newPath = pathname;
    if (pathname === '/') {
        newPath = '/dashboard';
    }

    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {newPath.startsWith('/dashboard') ? (
                <>
                    <ItemsCard pathname={pathname} />
                </>) : null}
            {newPath.startsWith('/orders') ? (
                <OrdersCard navigate={navigate} />
            ) : null}
        </Box>
    );
}

Orders.propTypes = {
    navigate: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
};

function Home() {
    const [pathname, setPathname] = React.useState('/dashboard');
    const navigate = React.useCallback((path) => setPathname(String(path)), []);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate,
        };
    }, [pathname, navigate]);

    return (
        <AppProvider
            navigation={[
                {
                    segment: 'dashboard',
                    title: 'Dashboard',
                    icon: <DashboardIcon />,
                },
                {
                    segment: 'orders',
                    title: 'Orders',
                    icon: <ShoppingCartIcon />,
                    pattern: 'orders{/:orderId}*',
                },
            ]}
            router={router}
            theme={theme}
            branding={{
                logo: <img src="logo.svg" alt="React Furniture logo" />,
                title: 'React Furniture',
            }}
        >
            <DashboardLayout>
                <Orders pathname={pathname} navigate={navigate} />
            </DashboardLayout>
        </AppProvider>
    );
}

export default Home;
