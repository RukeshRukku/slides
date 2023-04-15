import './index.css'

const LeftSide = props => {
  const {details, count, click, check} = props
  const {heading, description, id} = details
  const numList = count.map(each => each.id)
  const num = numList.indexOf(id) + 1
  const edit = () => {
    click(id)
  }
  const className = check ? 'color' : ''
  const test = `slideTab${num}`
  return (
    <li className={className} testid={test} onClick={edit}>
      <p className="num">{num}</p>
      <div className="back">
        <h1 className="he">{heading}</h1>
        <p className="pa">{description}</p>
      </div>
    </li>
  )
}

export default LeftSide
