import { Input, Text, View} from "react-native";
import { styles } from "./styles";

function TextNames(props){

    return(
            <View style={styles.section}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
    )
}

export default TextNames;