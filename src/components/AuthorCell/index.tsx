import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components'

interface IAuthorCell {
    isHeader?: boolean
    onPress?: () => void
    authorName?: string
    booksNumber?: number
    isEven?: boolean
}

export const AuthorCell = ({isHeader, onPress, authorName, booksNumber, isEven}: IAuthorCell) => {

    return (
        <CellRowContainer isHeader={isHeader} disabled={isHeader === true} onPress={onPress} activeOpacity={0.4}>
            <AuthorNameCell><CellText isHeader={isHeader}>{isHeader ? 'Author name' : authorName}</CellText></AuthorNameCell>
            <BooksNumberCell><CellText isHeader={isHeader}>{isHeader ? 'Number of books' : booksNumber}</CellText></BooksNumberCell>
            <IsBookNumberEvenCell><CellText isHeader={isHeader}>{isHeader ? 'Even' : isEven === true && '*'}</CellText></IsBookNumberEvenCell>
        </CellRowContainer>
    )
}

const CellRowContainer = styled(TouchableOpacity)`
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: black;
    ${({isHeader}:{isHeader?: boolean}) => {
        if(isHeader){
            return css`
                background-color: #ccdaf5;
                border-top-width: 1px;
                border-top-color: black;
            `
        }
    }};
`
const AuthorNameCell = styled(View)`
    width: 50%;
    border-left-width: 1px;
    border-left-color: black;
    align-items: center;
    justify-content: center;
`
const BooksNumberCell = styled(View)`
    width: 30%;
    border-left-width: 1px;
    border-left-color: black;
    align-items: center;
    justify-content: center;
`
const IsBookNumberEvenCell = styled(View)`
    width: 20%;
    border-left-width: 1px;
    border-left-color: black;
    border-right-width: 1px;
    border-right-color: black;
    align-items: center;
    justify-content: center;
`
const CellText = styled(Text)`
    padding-top: 12px;
    padding-bottom: 12px;
    ${({isHeader}:{isHeader?: boolean}) => {
        if(isHeader){
            return css`
                font-size: 20px;
                font-weight: 500;
            `;
        }
        return css`
            font-size: 18px;
            font-weight: 400;
        `;
    }};
`