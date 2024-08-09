import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../telas/Welcome'
import Signin from '../telas/Signin'
import Telababa from '../telas/Telababa';
import Telacliente from '../telas/Telacliente';
import Cadastrotrabalho from '../telas/Telababa/Cadastrotrabalho';
import Cadastrocliente from '../telas/Telacliente/Cadastrocliente';


const Stack = createNativeStackNavigator ();

export default function Linkagem(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />

        <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
            />

        <Stack.Screen
            name="Telababa"
            component={Telababa}
            options={{ headerShown: false }}
            />

        <Stack.Screen
            name='Telacliente'
            component={Telacliente}
            options={{ headerShown: false }}
        />    

        <Stack.Screen
            name='Cadastrotrabalho'
            component={Cadastrotrabalho}
            options={{ headerShown: false}}
        />

        <Stack.Screen
            name='Cadastrocliente'
            component={Cadastrocliente}
            options={{ headerShown: false}}
        />    
        </Stack.Navigator>
    )
}