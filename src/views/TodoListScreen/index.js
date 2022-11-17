import {
    View,
    Text,
    Alert,
    ScrollView,
    TextInput,
    Button,
    FlatList
} from 'react-native'
import React, {useState} from 'react'
import { styles } from '../../styles'


const TodoListScreen = () => {

    const [todoListData, setTodoListData] = useState([])
    const [todoText, setTodoText] = useState('')

    const handleChangeText = (text) => {
        setTodoText(text)
    }

    const handleButtonPress = () => {
        if (todoText.trim().length > 0) {
            setTodoListData((prev) => prev.concat({text: todoText}))
            setTodoText('')
        }
    }

    const handleRenderListItem = ({item}) => {
        return <Text>{
            item.text
        }</Text>
    }
    return (
            <View style={
                styles.container
            }>
                <View>
                    <TextInput placeholder="Ingresa una Palabra" placeholderTextColor='#c4c4c4'
                        style={
                            styles.textInput
                        }
                        value={todoText}
                        onChangeText={handleChangeText}/>
                    <Button style={
                            styles.button
                        }
                        title='Enter'
                        onPress={handleButtonPress}/>
                </View>
                <View>
                    <FlatList data={todoListData}
                        renderItem={handleRenderListItem}
                        keyExtractor={
                            (item) => item.text
                        }/>
                </View>
            </View>
    )
}

export default TodoListScreen
