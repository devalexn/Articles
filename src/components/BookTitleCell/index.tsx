import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import styled, { css } from 'styled-components'

const { width } = Dimensions.get('window')

interface IBookTitleCell {
    title?: string
}

export const BookTitleCell = ({title}: IBookTitleCell) => {

    return (
        <CellRowContainer>
            <CellText>{`• ${title}`}</CellText>
            <SeparatorView/>
        </CellRowContainer>
    )
}

const CellRowContainer = styled(View)`
    align-items: center;
    justify-content: center;
`
const CellText = styled(Text)`
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 18px;
    font-weight: 400;
    align-self: flex-start;
`
const SeparatorView = styled(View)`
    height: 1px;
    width: ${width -32};
    background-color: gray;
    position: absolute;
    bottom: 0px;
`