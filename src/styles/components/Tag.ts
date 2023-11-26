import { StyleFunctionProps, SystemStyleObject } from "@chakra-ui/theme-tools"

const Tag = {
    baseStyle: {
        container: {
            borderRadius: "100px",
            padding: "5px 16px 5px 16px"
        }
    },
    defaultProps: {
        colorScheme: "white"
    },
    variants: {
        solid: (props: StyleFunctionProps): SystemStyleObject => {
            const { colorScheme: c } = props

            if (c === "primary") {
                // const bgGradient = "linear(to-r, primary.500, primary.800)"
                const bg = `${c}.600`
                const color = "white"

                return {
                    container: {
                        bg,
                        color
                    }
                }
            }

            const bg = c

            return {
                container: {
                    bg,
                    color: `darkBlue`
                }
            }
        },
        outline: (props: StyleFunctionProps): SystemStyleObject => {
            const { colorScheme: c } = props

            return {
                container: {
                    color: c,
                    shadow: `inset 0 0 0px 1px ${c}`
                }
            }
        }
    }
}

export default Tag
