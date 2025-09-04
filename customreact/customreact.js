
// function customRender(reactElement,container){
//     const el=document.createElement(reactElement.type)
//     el.innerHTML=reactElement.Children
//     el.setAttribute('href',reactElement.props.href)
//     el.setAttribute('target',reactElement.props.target)
//     container.appendChild(el)
// }
function customRender(reactElement,container){
    const el=document.createElement(reactElement.type)
    el.innerHTML=reactElement.Children
    for (const prop in reactElement.props) {
    if(prop==='children') continue;
    el.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(el)
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    Children:'click to visit google'
}

const mainContainer=document.getElementById('root')
customRender(reactElement,mainContainer)