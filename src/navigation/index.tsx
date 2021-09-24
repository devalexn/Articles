import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthorsListScreen } from '../screens/AuthorsList'
import { BooksListScreen } from '../screens/BooksList'

const Root = createStackNavigator()
const Routes = () => (
    <NavigationContainer>
        <Root.Navigator>
            <Root.Screen name="AuthorsList" component={AuthorsListScreen} />
            <Root.Screen name="BooksList" component={BooksListScreen} />
        </Root.Navigator>
    </NavigationContainer>
)

export default Routes