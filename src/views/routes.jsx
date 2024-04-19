import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdNotifications,
  MdOutlineImportExport,
} from 'react-icons/md';

// Admin Imports
// import MainDashboard from './pages/admin/default';
// import NFTMarketplace from './pages/admin/nft-marketplace';
// import Profile from './pages/admin/profile';
// import DataTables from './pages/admin/data-tables';
// import RTL from './pages/rtl/rtl-default';

// Auth Imports
// import SignInCentered from './pages/auth/sign-in';

const customRoutes = [
  {
    name: 'Manage Imports',
    layout: '/customs',
    path: '/imports',
    icon: (
      <Icon
        as={MdOutlineImportExport}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    secondary: true,
  },
  {
    name: 'Manage Exports',
    layout: '/customs',
    path: '/exports',
    icon: (
      <Icon
        as={MdOutlineImportExport}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    secondary: true,
  },
  {
    name: 'Profile',
    layout: '/customs',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Sign In',
    layout: '/api',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Sign Up',
    layout: '/api',
    path: '/sign-up',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Details',
    layout: '/api',
    path: '/Details',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
]

const importRoutes = [
  {
    name: 'My Orders',
    layout: '/importer',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/orders',
  },

  {
    name: 'Profile',
    layout: '/importer',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Notifications',
    layout: '/importer',
    path: '/notifications',
    icon: (
      <Icon as={MdNotifications} width="20px" height="20px" color="inherit" />
    ),
  },

  {
    name: 'Track Shipment',
    layout: '/importer',
    path: '/shipment-tracking',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    secondary: true,
  },
  {
    name: 'Sign In',
    layout: '/api',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Sign Up',
    layout: '/api',
    path: '/sign-up',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Details',
    layout: '/api',
    path: '/Details',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
]

const exportRoutes = [
  {
    name: 'My Orders',
    layout: '/exporter',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/orders',
  },

  {
    name: 'Profile',
    layout: '/exporter',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Notifications',
    layout: '/exporter',
    path: '/notifications',
    icon: (
      <Icon as={MdNotifications} width="20px" height="20px" color="inherit" />
    ),
  },

  {
    name: 'Track Shipment',
    layout: '/exporter',
    path: '/shipment-tracking',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    secondary: true,
  },
  {
    name: 'Sign In',
    layout: '/api',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Sign Up',
    layout: '/api',
    path: '/sign-up',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Details',
    layout: '/api',
    path: '/Details',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
]


export {customRoutes, importRoutes, exportRoutes};