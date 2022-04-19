import React from "react"

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg',
    color?: 'primary' | 'secondary',
    children: React.ReactNode,
    com?: E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

export const Text = <E extends React.ElementType = 'div'>({ size, color, children, com }: TextProps<E>) => {
    const Component = com || 'div';
    return <Component className={`class-with-${size}-${color}`}>{children}</Component>
}