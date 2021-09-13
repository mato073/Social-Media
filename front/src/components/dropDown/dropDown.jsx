import React from 'react'
import './DropDown.css'
import { CSSTransition } from 'react-transition-group'

const DropDown = ({ open, setOpen, children }) => {

  const ref = React.useRef();

  React.useEffect(() => {
    const clickOutside = e => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.addEventListener("mousedown", clickOutside);
    }

  }, [open])

  const DropDowmItem = (props) => {
    return (
      <a href="" className="dropDowItemContainer">
        <span className="dropDownItemLeftIcon">{props.icon}</span>
        {props.children}
        <span className="dropDownItemRightIcon">{props.icon}</span>
      </a>
    )
  }

  return (
    open === true ?
      <div className="dropDownContainer" ref={ref}>
        {children}
      </div>
      :
      null
  )
}

export default DropDown
