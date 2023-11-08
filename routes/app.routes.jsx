import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../Screens/Home";
import SecondPage from "../Screens/SecondPage";
import ThirdPage from "../Screens/ThirdPage";
import FourthPage from "../Screens/FourthPage";

function AppRoutes(){

    const {Screen, Navigator} = createNativeStackNavigator();

    return(

        <Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
              <Screen name="secondPage" component={SecondPage}/>
              <Screen name="home" component={Home}/>
              <Screen name="thirdPage" component={ThirdPage}/>
              <Screen name="fourthPage" component={FourthPage}/>
        </Navigator>

    )

}

export default AppRoutes