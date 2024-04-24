import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbCampoTexto, AbCampoTextoProps } from "../src";
import React from "react";


export default {
    title: 'Componentes/AbCampoTexto',
    component: AbCampoTexto,
    argTypes: {
        label: {
            control: 'text'
        }
    },
    parameters: {
        actions: { 
            argTypesRegex: '^on.*' 
        }
    }
} as ComponentMeta<typeof AbCampoTexto> 

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args} />

export const AbCampoTextoComponent = Template.bind({})

AbCampoTextoComponent.args = {
    label: 'Label de teste'
} as AbCampoTextoProps