import React from "react"
import User  from './Content'


const select1 = [0, 10, 20, 30, 40]
const select2 = [10, 20, 30, 40, 50, 100]


export default class Select extends React.Component {

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

  render() {
    const {users} = this.props
    const {select1Value, select2Value} = this.state

    const filteredUsers = users.filter(user => {
      return user.age > select1Value && user.age < select2Value
    })

    return <div>

      <select value={select1Value} onChange={this.handleSelect1}>
        <option value='all'>all</option>
        {select1.map(value => <option key={value}>{value}</option>)}
      </select>

      <select value={select2Value} onChange={this.handleSelect2}>
        {select2.map(value => <option key={value}>{value}</option>)}
      </select>


      <ul>{filteredUsers.map(user => (
        <User user={user} key={user.id} />
      ))}</ul>
    </div>
  }
}