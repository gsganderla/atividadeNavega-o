import { Text, View } from "react-native";
import { styles } from "./styles";
import CardButton from "../../components/Button";
import TextNames from "../../components/Text";
import { useNavigation } from "@react-navigation/native";
import InputBox from "../../components/Input";
import { useState } from "react";


function SecondPage() {

    const [nome, setFirstName] = useState('')
    const [sobrenome, setLastName] = useState('')
    const navigation = useNavigation()

    handleNavigationThirdPage = () => {
        navigation.navigate('thirdPage', {nome, sobrenome})
    } 


    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TextNames title="Informe seu nome"/>
                <InputBox value={nome} eventHandle={setFirstName}/>
                <TextNames title="Informe seu sobrenome"/>
                <InputBox value={sobrenome} eventHandle={setLastName}/>            
            </View>
            <View style={styles.footer}>
                <CardButton eventHandle={handleNavigationThirdPage} title="Próximo"></CardButton>
            </View>
        </View>
    )
}

export default SecondPage;