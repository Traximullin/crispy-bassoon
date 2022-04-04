import React from 'react'

const Form: React.FC = ({
        children,
        ...props
    }) => {

     return(
        <form {...props} className="form">
            {children}
        </form>
    )
}

export default Form
