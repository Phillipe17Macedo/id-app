import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'yellow',
    textAlign: 'center',
  },
  imagemLogin: {
    resizeMode: 'contain',
    height: 180,
    borderWidth: 2,
  },
});

export default styles