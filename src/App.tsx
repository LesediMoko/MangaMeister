import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Trending from './components/Trending'

const queryClient = new QueryClient()
function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Trending />
    </QueryClientProvider>

  )
}

export default App
