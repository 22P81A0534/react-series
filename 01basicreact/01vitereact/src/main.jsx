import React from 'react'
import ReactDOM from 'react-dom/client'


function MyApp(){
    return(
        <div>
            <h1>Custom App | chiru</h1>
        </div>
    )
}

/*const ReactElement= {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}*/

const anotherElement= (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser="chiruu react"

const reactElement=React.createElement(
    'a',
    {href:"https://google.com",target:'_blank'},
    'Click me to visit google',
    anotherElement

)

ReactDOM.createRoot(document.getElementById('root')).
render(

    reactElement


)
