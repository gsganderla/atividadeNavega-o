import { Text, View } from "react-native";
import { styles } from "./styles";
import CardButton from "../../components/Button";
import CardButtonRed from "../../components/ButtonRed";
import TextNames from "../../components/Text";
import { useNavigation, useRoute } from "@react-navigation/native";
import InputBox from "../../components/Input";
import { useState } from "react";


function FourthPage() {

    const route = useRoute()
    const navigation = useNavigation()
    const param = route.params    
    const {nome, sobrenome, cpf, rg} = route.params

    handleNavigationHome = () => {
        navigation.navigate('home')
    } 

    handleNavigationGoBack = () => {
        navigation.goBack()
    }


    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TextNames title="Olá, "/>
                <Text>{nome}  {sobrenome}</Text>
                <TextNames title="portador do documento"/> 
                <TextNames title="CPF: "></TextNames>
                <Text>{cpf}</Text>
                <TextNames title="RG: "></TextNames>
                <Text>{rg}</Text>
            </View>
            <View style={styles.footer}>
                <CardButtonRed eventHandle={handleNavigationGoBack} title="Voltar"></CardButtonRed>
                <CardButton eventHandle={handleNavigationHome} title="Finalizar"></CardButton>
            </View>
        </View>
    )
}

export default FourthPage;