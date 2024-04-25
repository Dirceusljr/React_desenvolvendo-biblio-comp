import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbInputQuantidade, AbInputQuantidadeProps } from '../src'

export default {
    title: 'Componentes/AbInputQuantidade',
    component: AbInputQuantidade
} as ComponentMeta<typeof AbInputQuantidade>

const Template: ComponentStory<typeof AbInputQuantidade> = (args) => <AbInputQuantidade {...args} />

export const AbInputQuantidadeComponent = Template.bind({})
AbInputQuantidadeComponent.args = {
    label: 'Uma label interessante'
} as AbInputQuantidadeProps