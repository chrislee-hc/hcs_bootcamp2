import React from 'react';
import { Text, ScrollView } from 'react-native';
import Submit from '../components/Submit.js';
import Category from '../components/Category.js'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
        }
    }

    addItem = (item, cat) => {
        var contains = false;
        for (var i = 0; i < this.state.todo.length; i++ && !contains) {
            if (this.state.todo[i][0] == cat) {
                this.state.todo[i] = [...this.state.todo[i], item]
                this.setState({todo: this.state.todo})
                contains = true;
            }
        }
        if (!contains) {
            this.setState({
                todo: [...this.state.todo, [cat, item]],
            });
        }
    }

    deleteItem = (item) => {
        var items = this.state.todo;
        var ix = items.indexOf(item);
        if (ix >= 0) {
            items.splice(ix,1);
            this.setState({
                todo: items,
            })
        }
    }

    render() {
        return (
            <ScrollView
                keyboardShouldPersistTaps='handled'
                style={
                    {
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'crimson',
                        padding: 40,
                    }
                }
                scrollEnabled={true}
            >
                <Submit submit={this.addItem}/>

                <Text style={{
                    fontSize: 30,
                    paddingTop: 20,
                }}>
                    To Do:
                </Text>

                {this.state.todo.map((item, key) => {
                    return (<Category items={item}/>)
                })}


            </ScrollView>
        );
    }
}
