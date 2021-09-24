import React from 'react'
import Routes from './navigation'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <Routes/>
        </SafeAreaView>
    )
}

export default App