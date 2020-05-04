import React from 'react';
import { TouchableOpacity, Text, TextInput } from 'react-native';
import ItemAdder from '../components/ItemAdder.js';

export default class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemtext: "",
            cattext: "",
        }
    }

    updateItemText = (newText) => {
        this.setState({
            itemtext: newText,
        });
    }

    updateCatText = (newText) => {
        this.setState({
            cattext: newText,
        });
    }

    submitItem = () => {
        this.props.submit(this.state.itemtext, this.state.cattext);
        this.input1.clear();
        this.input2.clear();
    }

    render() {
        return (
            <React.Fragment>
                <TextInput
                    ref={(input1) => {this.input1 = input1}}
                    onChangeText={this.updateItemText}

                    style={
                        {
                            width: '100%',
                            height: 40,
                            backgroundColor: 'white',
                            borderWidth: 2,
                            borderRadius: 10,
                            padding: 10,
                        }
                    }
                />

                <TextInput
                    ref={(input2) => {this.input2 = input2}}
                    onChangeText={this.updateCatText}

                    style={
                        {
                            width: '100%',
                            height: 40,
                            backgroundColor: 'white',
                            borderWidth: 2,
                            borderRadius: 10,
                            padding: 10,
                        }
                    }
                />

                <TouchableOpacity
                    onPress={this.submitItem}
                    style={{
                        width: '90%',
                        height: 40,
                        backgroundColor: 'green',
                        margin: 10,
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                >
                    <Text style={{
                        fontSize: 24,
                    }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </React.Fragment>
        );
    }
}
