function Header(props) {
    console.log(props)
    return <div> <h1>{`hello world ${props.age}`}</h1></div>

}

export default Header;