

function customRender(reactElement , container){
    const domElement = document.creteElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target)
}
const reactElement = {
    type : 'a' ,
    props:{
        href:"",
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement , mainContainer)


