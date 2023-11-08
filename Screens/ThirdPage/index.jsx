import { Text, View } from "react-native";
import { styles } from "./styles";
import CardButton from "../../components/Button";
import CardButtonRed from "../../components/ButtonRed";
import TextNames from "../../components/Text";
import { useNavigation, useRoute } from "@react-navigation/native";
import InputBox from "../../components/Input";
import { useState } from "react";


function ThirdPage() {

    const navigation = useNavigation()
    const route = useRoute()

    const param = route.params
    const {nome, sobrenome} = route.params
    const [cpf, setCPF] = useState('')
    const [rg, setRG] = useState('')

    handleNavigationFourthPage = () => {
        navigation.navigate('fourthPage', {nome, sobrenome, cpf, rg})
    } 

    handleNavigationgoBack = () => {
        navigation.goBack()
    }


    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TextNames title="Informe seu CPF"/>
                <InputBox eventHandle={setCPF}/>
                <TextNames title="Informe seu RG"/>
                <InputBox eventHandle={setRG}/>            
            </View>
            <View style={styles.footer}>
                <CardButtonRed eventHandle={handleNavigationgoBack} title="Voltar"></CardButtonRed>
                <CardButton eventHandle={handleNavigationFourthPage} title="Próximo"></CardButton>
            </View>
        </View>
    )
}

export default ThirdPage;