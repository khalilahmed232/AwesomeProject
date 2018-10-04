import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appTitleText: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#489892',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addLogButtonContainer:{
        flex: 5
    },
    mainButton: {
        justifyContent: 'center',
        backgroundColor: '#EAE194',
        height: 60,
        width: '60%',
        margin: 10,
        borderRadius: 25,
        borderColor: '#707070',
        borderWidth: 1
    },
    mainButtonText: {
        textAlign: 'center',
        fontSize: 25,
    },
    addLogButton: {
        backgroundColor: '#F4B662',
    },
    addLogButtonText:{
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    screenTitle:{
        flex: 1,
        alignItems: 'center'
    },
    screenTitleText: {
        backgroundColor: '#EAE194',
        height: 80,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%',
        padding: 20,
        color: '#707070',
        borderColor: '#000000',
        borderWidth: 1
    },
    addLogScreenTitleText: {
        backgroundColor: '#8DBEB4',
        color: '#FFFFFF',
    },
    submitButton: {
        backgroundColor: '#489892',
    },
    submitButtonText: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    textInputFeildRed: {
        backgroundColor: '#E6605E',
        width: '60%',
        height: 60,
        fontSize: 20,
        padding: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF',
        borderRadius: 25,
    }
});
export default styles;
