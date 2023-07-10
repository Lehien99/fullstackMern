import { routes } from './routes'

interface IConfig {
    routes: typeof routes
}
const config: IConfig = {
    routes
}
export default config
