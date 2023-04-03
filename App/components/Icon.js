import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
function Icon({ 
    name, size = 40, backgroundColor = "#000", iconColor = "#fff",borderRadius=size / 2,style,...otherProps
}) {
    return (


      <View  style={[{
            width: size,
            height: size,
            borderRadius:borderRadius ,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
           
      
        }, style]}> 
            <MaterialCommunityIcons name={name} color={iconColor} size={size * .5} {...otherProps} />
        </View>
    );
}

export default Icon;