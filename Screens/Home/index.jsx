import { Text, View } from "react-native";
import { styles } from "./styles";
import CardButton from "../../components/Button";
import { useNavigation } from "@react-navigation/native";


function Home() {

    const navigation = useNavigation()

    handleNavigationSecondPage = () => {
        navigation.navigate('secondPage')
    } 

    //const handleSecondPage = () => navigation.navigate("secondpage", { ...values })

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>UNIPAR</Text>
            </View>
            <View style={styles.footer}>
                <CardButton eventHandle={handleNavigationSecondPage} title="INICIAR"></CardButton>
            </View>
        </View>
    )
}

export default Home;