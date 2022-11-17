import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    // backgroundColor: "#fffbfb",
    // background_image: url('../Images/Fondo_Games.jpg'),
    // backgroundColor: "#df9e9e",
    paddingTop: 20,
  },
  containerBox:{
    
  },
  contentLogin: {
    paddingTop: 160,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
  },
  viewTitleLogin: {
    alignSelf: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#383737ea",
  },
  viewFormLogin: {
    paddingTop: 20,
    height: 100,
  },
  titleForm: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    // backgroundColor: '#f5f5f5',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#e6e1e1",
  },
  titleFormLogin: {
    paddingStart: 20,
    marginBottom: 5,
    color: "#717171",
  },
  textInput: {
    fontSize: 12,
    paddingStart: 10,
    fontStyle: "italic",
  },
  iconInput: {
    paddingStart: 20,
  },
  buttonForgotPassword: {
    textAlign: "right",
    color: "#bababa",
    fontStyle: "italic",
    paddingTop: 10,
    paddingBottom: 40,
  },
  button: {
    backgroundColor: "#353535",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  textOtherLogin: {
    textAlign: "center",
    color: "#bababa",
    fontStyle: "italic",
    paddingTop: 10,
    paddingBottom: 40,
  },
  textFooter: {
    flex: 10,
    alignItems: "center",
    color: "#151414",
    paddingTop: 10,
    paddingBottom: 40,
  },

  // footer2: {
  //     backgroundColor: '#fff'
  // },

  mainviewStyle: {
    flex: 1,
    flexDirection: "column",
  },
  footer: {
    // position: 'absolute',
    // flex:0.1,
    // left: 0,
    // right: 0,
    bottom: -10,
    backgroundColor: "black",
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    justifyContent: "space-around",
    // alignContent: 'space-around'
  },
  bottomButtons: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  footerText: {
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 18,
  },
  textStyle: {
    alignSelf: "center",
    color: "orange",
  },
  scrollViewStyle: {
    borderWidth: 2,
    borderColor: "blue",
  },

  headerContainer: {
    backgroundColor: "#353535",
    marginTop: 30,
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 20,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black",
},

item: {
  // flex: 1,
  // flexDirection: "column",
  backgroundColor: '#1d1e1f',
  alignItems: "center",
  padding: 20,
  marginVertical: 8,
  borderRadius: 15,
},
image: {
  width: 320,
  height: 200,
  borderRadius: 15,
},
textCardName: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
},

textCard: {
  color: "white",
},

});
