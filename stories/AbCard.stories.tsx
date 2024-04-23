import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbCard } from '../src/componentes/AbCard'


export default {
    title: 'Componentes/AbCard',
    component: AbCard
} as ComponentMeta<typeof AbCard>

const Template: ComponentStory<typeof AbCard> = () => <AbCard children='teste'/>

export const Desktop = Template.bind({})