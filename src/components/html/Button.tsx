type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

// We just want children has type string, not React.ReactNode
export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}