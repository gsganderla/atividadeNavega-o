import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 0.9,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        gap: 5
    },
    footer: {
        flex: 0.1,
        width: '100%',
        alignItems: 'center',
        flexDirection: "row",
        gap: 5,
        padding: 20
    }
  });