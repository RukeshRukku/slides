import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import LeftSide from '../LeftSide'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class Home extends Component {
  state = {
    list: initialSlidesList,
    edit1: false,
    edit2: false,
    active: initialSlidesList[0],
  }

  changeActive = id => {
    const {list} = this.state
    const filter = list.filter(each => each.id === id)
    this.setState({
      active: filter[0],
    })
  }

  add = () => {
    const {list, active} = this.state
    const {id} = active
    const idWant = uuidv4()
    const newItem = {id: idWant, heading: 'Heading', description: 'Description'}
    const indexList = list.map(each => each.id)
    const index = indexList.indexOf(id) + 1
    list.splice(index, 0, newItem)
    const newIndexList = list.map(each => each.id)
    const activeIndex = newIndexList.indexOf(newItem.id)
    this.setState({list, active: list[activeIndex]})
  }

  changeEdit1 = event => {
    const {list, active} = this.state
    const {id, description} = active
    const filteredList = list.map(each => {
      if (each.id === id) {
        return {...each, heading: event.target.value}
      }
      return each
    })
    this.setState({
      list: filteredList,
      active: {id, heading: event.target.value, description},
    })
  }

  changeEdit1Bool = () => {
    this.setState({edit1: false})
  }

  changeEdit2 = event => {
    const {list, active} = this.state
    const {id, heading} = active
    const filteredList = list.map(each => {
      if (each.id === id) {
        return {...each, description: event.target.value}
      }
      return each
    })
    this.setState({
      list: filteredList,
      active: {id, description: event.target.value, heading},
    })
  }

  changeEdit2Bool = () => {
    this.setState({edit2: false})
  }

  clickHead = () => {
    this.setState({edit1: true})
  }

  clickPara = () => {
    this.setState({edit2: true})
  }

  render() {
    const {list, edit1, edit2, active} = this.state
    const {heading, id, description} = active
    const input1Flex = edit1 ? '' : 'flex'
    const input2Flex = edit2 ? '' : 'flex'
    const contentHeadFlex = edit1 ? 'flex' : ''
    const contentParaFlex = edit2 ? 'flex' : ''
    return (
      <div className="total">
        <Header />
        <div className="bottom">
          <button type="button" className="plus-con" onClick={this.add}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus"
            />
            <p className="para">New</p>
          </button>
          <div className="bottom-bot">
            <ol>
              {list.map(each => (
                <LeftSide
                  key={each.id}
                  details={each}
                  count={list}
                  click={this.changeActive}
                  check={each.id === id}
                />
              ))}
            </ol>
            <div className="right">
              <div className="card">
                <input
                  type="text"
                  className={`input1 ${input1Flex}`}
                  value={heading}
                  onBlur={this.changeEdit1Bool}
                  onChange={this.changeEdit1}
                />
                <h1
                  className={`slideHead ${contentHeadFlex}`}
                  onClick={this.clickHead}
                >
                  {heading}
                </h1>
                <input
                  type="text"
                  className={`input2 ${input2Flex}`}
                  value={description}
                  onBlur={this.changeEdit2Bool}
                  onChange={this.changeEdit2}
                />
                <p
                  className={`slidePara ${contentParaFlex}`}
                  onClick={this.clickPara}
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
