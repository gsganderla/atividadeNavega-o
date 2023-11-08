import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    content: {
        flex: 0.9,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    footer: {
        flex: 0.1,
        width: '100%',
        alignItems: 'center',
    }
  });