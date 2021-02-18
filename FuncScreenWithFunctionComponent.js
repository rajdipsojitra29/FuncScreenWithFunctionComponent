// import * as React from 'react';
import React from 'react';
import { Button, View, Text, ScrollView, StyleSheet } from 'react-native';
import { FunctionComponentFirst } from './FunctionComponentFirst'


export function FuncScreenWithFunctionComponent({ navigation, route }) {
    return (
      <ScrollView>
        <View style={Styles.viewMain}>
          <Text>FuncScreen With FunctionComponent</Text>
          <Text>{route.params.dataNames[0]}</Text>
          <Text>{route.params.dataNames[1]}</Text>
          
          <Button 
          title="Go back" 
            // onPress={() => 
            // navigation.goBack()
            // } 
            onPress={onPressGoBack}
          />

          <FunctionComponentFirst props={['Hari', '2/05/2020', '10:10 AM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Sahajand', '7/10/1870', '5:00 PM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Shreeji', '17/02/2000', '7:30 AM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Hari', '2/05/2020', '10:10 AM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Shreeji', '17/02/2000', '7:30 AM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Sahajand', '7/10/1870', '5:00 PM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Hari', '2/05/2020', '10:10 AM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Shreeji', '17/02/2000', '7:30 AM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Sahajand', '7/10/1870', '5:00 PM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Shreeji', '17/02/2000', '7:30 AM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Hari', '2/05/2020', '10:10 AM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Shreeji', '17/02/2000', '7:30 AM']}></FunctionComponentFirst>
          <FunctionComponentFirst props={['Sahajand', '7/10/1870', '5:00 PM']}></FunctionComponentFirst>
          
        </View>
      </ScrollView>
    );

    function onPressGoBack() {
      navigation.goBack()
    }
}










const Styles = StyleSheet.create({
  viewMain: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});