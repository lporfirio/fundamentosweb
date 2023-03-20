import React from "react"

export function childrenWhitProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props, ...child.props })

    })
}