import Home from '../pages/home/Home'
import Category from '../pages/category/Category'
import Goods from '../pages/goods/Goods'
import ShopCart from '../pages/shopCart/ShopCart'
import Profile from '../pages/profile/Profile'

const routes=[
  { path: '/home', component: Home ,meta:{showFooter: true}},
  { path: '/category', component: Category ,meta:{showFooter: true}},
  { path: '/goods', component: Goods ,meta:{showFooter: true}},
  { path: '/shopCart', component: ShopCart ,meta:{showFooter: true}},
  { path: '/profile', component: Profile ,meta:{showFooter: false}},
  { path:'/',redirect:'/home'}
]
export default routes
