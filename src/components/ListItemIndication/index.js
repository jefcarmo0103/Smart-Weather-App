import React from 'react'
import {View} from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';


export default({data}) => {
    return <>
        <Card>
            <Card.Content>
                <Title>{data.station}</Title>
                <Paragraph>{data.info}</Paragraph>
            </Card.Content>
        </Card>
    </>
}