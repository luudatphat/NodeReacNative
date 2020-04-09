import React, {Componet, Component} from "react";
import { TextInput, View, Text,Button, TouchableOpacity, Alert } from "react-native";
window.navigator.userAgent = 'react-native';
import io from 'socket.io-client';

export default class App extends Component{
    state = {
        name: 'Dat phat',
        text: 'Nhập nhiệu'
    }

    constructor(props){
        super(props);
        // this.socket = io("http://192.168.100.5:5300", {jsonp:false});
        this.socket = io('http://192.168.100.11:5300', {jsonp:true});

        this.socket.on('update', () => this.setState({name: 'Nate'}))
    }

    clickme(){
        this.socket.emit("client-send" , this.state.text);
    }

    render(){
        return(
            <View>
                <Text>{this.state.name}</Text>
                 <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) =>this.setState({text})}
                    value={this.state.text}
                    />
                <TouchableOpacity>
                    <Text>Chane color</Text>
                </TouchableOpacity>
                <Button
                    title="Press me"
                    // onPress={() => Alert.alert('Simple Button pressed')}
                    onPress={() => {this.clickme()}}
                    />
            </View>
        );
    }
}

