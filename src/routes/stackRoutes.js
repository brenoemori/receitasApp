import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/home';
import { Detail } from '../pages/detail';
import { Search } from '../pages/search';
import { useRoute } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export function StackRoutes(){

    const route = useRoute()

    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
                headerShown: false,

            }}
            />
            <Stack.Screen 
            name="Detail" 
            component={Detail} 
            options={{
                title: "Detalhes da receita"
            }}
            />
            <Stack.Screen 
            name="Search" 
            component={Search} 
            options={{
                title: "Veja o que encontramos"
            }}
            />
        </Stack.Navigator>
    )
}