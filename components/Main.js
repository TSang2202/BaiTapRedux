import { Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import {connect} from 'react-redux'


 class Main extends Component{

    render(){
        return(
           <View>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',  backgroundColor: '#764780', width: 30, margin: 20 }}>
                    <Text style={{fontSize: 20,alignSelf: 'center'}}>+</Text>
                </TouchableOpacity>

                <FlatList
                    data={this.props.myData}
                    renderItem={({item}) =>

                        <View style = {{backgroundColor: '#cccccc', flexDirection: 'column', 
                        padding: 20,
                        margin: 20,
                        alignItems: 'center', 
                        justifyContent: 'center',
                        borderRadius: 20
                        }}>

                            <Text style ={{fontSize:20}}>{item.title}</Text>

                        
                            <Text style = {{alignSelf: "flex-start",
                                marginLeft:20
                                }}>{item.time}</Text>

                            <Button
                                style={{alignSelf: 'flex-end'}}
                                title={item.done ? 'Done' : "Not done"}
                            />

                            

                            
                        </View>

                        
                    }
                    keyExtractor={item => item.id}
                
                />

                
           </View>
        )
    }
}

function mapStateToProps(state)
{
    return{
        myTest: state.test,
        myData: state.arrData
    }
}

export default connect(mapStateToProps)(Main)



