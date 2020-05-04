import React from 'react';
import { Text, ScrollView } from 'react-native';
import Item from './Item.js';

export default class Category extends React.Component {
	deleteItem = (item) => {
		this.props.deleteItem(item);
	}

	render() {
		return (
			<ScrollView style={
				{
					marginTop: 10,
	                height: 300,
	                backgroundColor: 'purple',
	                borderWidth: 2,
	                borderRadius: 10,
	                padding: 10,
				}
			}
				scrollEnabled={true}
			>
				{this.props.items.map((item,key) => {
					if (key == 0)
						return (<Text style={{fontSize: 25}}> {item} </Text>)
					else
						return (<Item text={item} delete={this.deleteItem}/>)
				})}

			</ScrollView>
		);
	}
}
