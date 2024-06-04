import { routes } from "./routes";
import { NotFoundPage } from "./pages/not-found";
import { PrivateLayout } from "./components/private-layout.component";

export function Router(){
    const path = window.location.pathname;

    const publicRoute = routes.public.find(route => route.path === path);
    const privateRoute = routes.private.find(route => route.path === path);

    if(path === '/login' || path === '/register'){
        if (localStorage.getItem('token')){
            navigateTo('/tasks')
            return
        }
    }
    
    if(publicRoute){
        publicRoute.page()
        return
    }//renderizar

    if (privateRoute){
       if(localStorage.getItem('token')){
        navigateTo('/login')
        return
    }
    const { $content, logic } = privateRoute.page()
    PrivateLayout($content, logic) 
    privateRoute.page()
    return
}
    navigateTo('/not-found')

    function navigateTo(path){
    window.history.pushState({}, "", window.location.origin + path);
    Router();
}
}