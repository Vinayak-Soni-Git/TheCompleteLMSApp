import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabsNavigator} from './TabsNavigator';
import DrawerNavigatorContent from './DrawerNavigatorContent';
import {ApplicationRoutes} from '../constants/Routes';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator(){
    return(
        <Drawer.Navigator drawerContent={()=><DrawerNavigatorContent />} headerShown={true}>
            <Drawer.Screen name={ApplicationRoutes.TabsNavigator} component={TabsNavigator}/>
        </Drawer.Navigator>
    );
}
