import { Text, TextInput, View} from "react-native";
import { styles } from "./styles";

function InputBox(props){

    return(
        <View style={styles.section}>
            <TextInput onChangeText={props.eventHandle} style={styles.cardInput}>
            </TextInput>
        </View>
            
    )
}

export default InputBox;