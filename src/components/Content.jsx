import React from 'react'

const select1 = [0, 10, 20, 30, 40]
const select2 = [10, 20, 30, 40, 50, 100]


export default class Content extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            select1Value: select1[0],
            select2Value: select2[select2.length - 1]
          }
    }
    handleSelect1 = (event) => {
        this.setState({
          select1Value: Number(event.target.value)
        })
      }
    
      handleSelect2 = (event) => {
        this.setState({
          select2Value: Number(event.target.value)
        })
      }
    render(){
        const {select1Value, select2Value} = this.state
        const list = this.props.users
            .sort((x,y) => x.name < y.name ? -1 : 1)
            .filter(user => {
                return user.age > select1Value && user.age < select2Value
            })
            .map(user => <User key={user.id} user = {user}/>)
        return(
    
            <div className="App-content">
                <select id="App-content-select" value={select1Value} onChange={this.handleSelect1}>
                    {select1.map(value => <option key={value}>{value}</option>)}
                </select>
        
                <select id="App-content-select" value={select2Value} onChange={this.handleSelect2}>
                    {select2.map(value => <option key={value}>{value}</option>)}
                </select><br/>
                <span className="ul-name">Name</span>
                <span className="ul-age">Age</span>
                <ul>{list}</ul>
            </div>
            
        )
    }       
}

function User(props) {
    return <li><span>{props.user.name}</span><span>{props.user.age}</span></li>
}
