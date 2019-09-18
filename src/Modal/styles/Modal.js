import { StyleSheet } from 'react-native';

const styleSheet = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '90%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 5
    },
    header: {
        alignItems: 'center',
        marginBottom: 10
    },
    content: {
        alignItems: 'center',
        marginBottom: 20
    },
    footer: {
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        width: 60,
        height: 60,
        marginBottom: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#595959'
    },
    text: {
        fontSize: 22,
        color: '#545454'
    },
    button: {
        backgroundColor: '#3085d6',
        padding: 10,
        borderRadius: 5,
        minWidth: 90,
        alignItems: 'center',
        marginRight: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
    }
});

export default styleSheet;