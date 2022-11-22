import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 15,
    color: "#fff",
    marginStart: 20,
  },

  titulo: {
    fontSize: 20,
  },
  viewFormLogin: {
    paddingTop: 20,
    height: 100,
  },
  titleForm: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
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

  mainviewStyle: {
    flex: 1,
    flexDirection: "column",
  },
  footer: {
    bottom: -10,
    backgroundColor: "black",
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    justifyContent: "space-around",
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
    justifyContent: "space-between",
    paddingRight: 20,
    flexDirection: "row",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
},

item: {
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
detailsContainer: {
  flex: 1,
  height: 350,
  marginBottom: 30,
},
websiteDetails:{
  backgroundColor: "#ffffff9f",
  marginTop: -90,
  position: "absolute",
  borderRadius: 5,
  marginStart: 3,
  padding: 5
},

descriptionGame: {
  paddingStart : 20,
  paddingEnd: 20,
},

description: {
  textAlign: 'justify'
},

titleDescription:{
  fontWeight: 'bold',
  textTransform: 'uppercase',
  backgroundColor: '#353535',
  height: 30,
  color: 'white',
  textAlign: 'center',
},
numberRating: {
  color: 'red',
  fontStyle: 'italic',
  textAlign: 'center',
},  
platformsDetails: {
  // alignItems: 'space-around',
  alignItems: 'center',
},

});
