import React from 'react'
import { Alert, FlatList } from 'react-native'
import styled from 'styled-components'
import { AuthorCell } from '../../components/AuthorCell'
import { useAuthorsList } from './useAuthorsList'
import { Article } from '../../types'
import { v4 } from 'uuid'

export const AuthorsListScreen = ({navigation} : {navigation: any}) => {
    const { authors, isEvenNumber } = useAuthorsList()

    const renderItem = ({item, index}: {item: any, index: number}) => {
        const booksNumber = authors[item].length
        return (
            <AuthorCell 
                key={v4()} 
                authorName={item} 
                booksNumber={booksNumber} 
                isEven={isEvenNumber(booksNumber)} 
                onPress={() => navigation.navigate('BooksList', {authorName: item})}
            />
        )
    }
    return (
        <>
            <StyledFlatlist 
                renderItem={renderItem}
                data={Object.keys(authors)}
                ListHeaderComponent={() => {
                    return <AuthorCell isHeader/>
                }}
                stickyHeaderIndices={[0]}
                bounces={false}
            />
        </>
    )
}

const StyledFlatlist = styled(FlatList)`
    margin-top: 12px;
    padding-left: 5px;
    padding-right: 5px;
`