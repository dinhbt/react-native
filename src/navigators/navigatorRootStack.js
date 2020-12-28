import ROUTER_PATHS from '@/configs/routerPaths';
import {
    HomePage,
    LoginPage,
    ScanCodePage
} from '@/features';


const rootStackConfig = {
    [ROUTER_PATHS.scanCodePage]: { 
        component: ScanCodePage 
    },
    [ROUTER_PATHS.loginPage]: { 
        component: LoginPage 
    },
    [ROUTER_PATHS.homePage]: { 
        component: HomePage 
    },
};


export default rootStackConfig;
