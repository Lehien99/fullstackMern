import HeaderOnly from 'components/template/layouts/headerOnly'
import config from 'config'
import Following from 'pages/Following'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import Upload from 'pages/Upload'
import Search from 'pages/search'

interface IRouter {
    path: string ,
    component: React.ComponentType<any> ,
    layout?:  React.ComponentType<any> | null
}
const publicRoutes: IRouter[] = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout:HeaderOnly },
    { path: config.routes.search, component: Search, layout:null }
]

// const privateRoutes: IRouter[] = []

export { publicRoutes }
