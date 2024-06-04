import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LazySuspenseWrapper from './modules/common/components/LazySuspenseWrapper';


const MangaDetails = React.lazy(() => import('./modules/manga-details/components/MangaDetails'));
const Chapter = React.lazy(() => import('./modules/chapter/components/Chapter'));
const Home = React.lazy(() => import('./modules/home/components/Home'));
const ViewAll = React.lazy(() => import('./modules/view-all/ViewAll'));
const Discover = React.lazy(() => import('./modules/discover/components/Discover'));
const LoadErrorPage = React.lazy(() => import('./modules/error-page/LoadErrorPage'));
const ErrorPage = React.lazy(() => import('./modules/error-page/ErrorPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LazySuspenseWrapper><Home /></LazySuspenseWrapper>,

  },
  {
    path: "view-manga/:selectedSlug",
    element: <LazySuspenseWrapper><MangaDetails /></LazySuspenseWrapper>,
  },
  {
    path: "view-manga/:selectedSlug/:chapterHID",
    element: <LazySuspenseWrapper><Chapter /></LazySuspenseWrapper>,
  },
  {
    path: "view-all/:category",
    element: <LazySuspenseWrapper><ViewAll /></LazySuspenseWrapper>,
  },
  {
    path: "discover",
    element: <LazySuspenseWrapper><Discover /></LazySuspenseWrapper>,
  },
  {
    path: "discover/status/:status",
    element: <LazySuspenseWrapper><Discover /></LazySuspenseWrapper>,
  },
  {
    path: "load-error",
    element: <LazySuspenseWrapper><LoadErrorPage /></LazySuspenseWrapper>,
  },
  {
    path: "*",
    element: <LazySuspenseWrapper><ErrorPage /></LazySuspenseWrapper>,
    
  }
]);

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
