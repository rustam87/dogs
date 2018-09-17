import Index from '../components/pages/Index'
import Favorites from '../components/pages/Favorites'
import Breed from '../components/pages/Breed'

const routes = [
  { path: '/favorites', component: Favorites },
  { path: '/:name', component: Breed },
  { path: '/', component: Index }
]

export default routes
