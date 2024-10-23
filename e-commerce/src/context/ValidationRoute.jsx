import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const ValidatorProvider = createContext()

export function ValidationRoute({children}){
    const [emailValidation, setEmailValidation] = useState(false)

    const toggleEmailValidator =()=>{
        setEmailValidation(true)
    }

    return(<ValidatorProvider.Provider value ={{emailValidation, toggleEmailValidator}}>
        {children}
    </ValidatorProvider.Provider>)

}

ValidationRoute.propTypes = {
    children : PropTypes.node.isRequired
}