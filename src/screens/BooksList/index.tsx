import React from 'react'
import { FlatList } from 'react-native'
import { BookTitleCell } from '../../components/BookTitleCell'
import { useBooksList } from './useBooksList'
import { v4 } from 'uuid'
import styled from 'styled-components'

export const BooksListScreen = ({route}: {route: any}) => {
    const authorNameParam: string = route.params['authorName']
    const { titles } = useBooksList(authorNameParam)

    const renderItem = ({item, index}: {item: any, index: number}) => {
        return (
            <BookTitleCell 
                key={v4()} 
                title={item}
            />
        )
    }
    return (
        <>
            <StyledFlatlist 
                renderItem={renderItem}
                data={titles}
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