import React, { Component } from 'react';
import { Columns, Column, Menu, Hero, Section } from '../somnus'


// hello
export default class Introduction extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Section className="is-fullwidth">
                <Hero size={'medium'} color={'dark'} title={'Hello! My TStudio'} subtitle={'Give you a wonderful way to manage your time'}>
                </Hero>
            </Section>
            // <Columns>
            //     <Column span={4}>
            //         <Menu>
            //             <Menu.List title="General">
            //                 <Menu.Item>Hello</Menu.Item>
            //             </Menu.List>
            //         </Menu>
            //     </Column>
            //     <Column span={4}>1</Column>
            //     <Column span={4}>1</Column>
            // </Columns>
        )
    }


}