import { NavigationContainer } from "@react-navigation/native"
import { useState } from "react"
import AuthNavigator from "./AuthNavigator"
import BottomTabNavigator from "./BottomTabNavigator"

const AppNavigation = () => {
    const [isAuthenticated , setIsAuthenticated]= useState(false)
    return (
        <NavigationContainer>
      {isAuthenticated ? (
        <BottomTabNavigator />
      ) : (
        <AuthNavigator setIsAuthenticated={setIsAuthenticated} />
      )}
    </NavigationContainer>
    )
}

export default AppNavigation