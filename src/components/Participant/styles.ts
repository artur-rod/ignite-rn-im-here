import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1E25',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },

  text: {
    color: '#FDFCFE',
    flex: 1,
    marginLeft: 16,
    fontSize: 16
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24
  },

  button: {
    width: 56,
    height: 56,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center'
  }
})