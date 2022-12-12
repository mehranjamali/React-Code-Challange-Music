import { EPages } from './pages';

export type RouteContextType = {
    page: EPages
    changePage: ((page: EPages, title: string) => void)
    selectedMusicTitle: string
}