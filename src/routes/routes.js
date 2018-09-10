import Index from '../components/Index'
import Favorites from '../components/Favorites'
import Breed from '../components/Breed'

const routes = [
  { path: '/favorites', component: Favorites },
  { path: '/:name', component: Breed },
  { path: '/', component: Index }
]

export default routes;