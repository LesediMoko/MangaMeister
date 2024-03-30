import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MangaDetails from './modules/manga-details/components/MangaDetails';
import Chapter from './modules/chapter/components/Chapter';
import ErrorPage from './modules/error-page/ErrorPage';
import Home from './modules/home/components/Home';
import ViewAll from './modules/view-all/ViewAll';
import Discover from './modules/discover/components/Discover';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "view-manga/:selectedSlug",
    element: <MangaDetails />
  },
  {
    path: "view-manga/:selectedSlug/:chapterHID",
    element: <Chapter />
  },
  {
    path: "view-all/:category",
    element: <ViewAll />
  },
  {
    path: "discover",
    element: <Discover />
  },
  {
    path: "discover/status/:status",
    element: <Discover />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
