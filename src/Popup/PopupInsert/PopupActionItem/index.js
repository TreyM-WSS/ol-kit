import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Item, Action } from './styled'

/**
 * @component
 * @category Popup
 * @example ./example.md
 */
class PopupActionItem extends Component {
  render () {
    const { children, title, disabled, feature, onClick, style } = this.props

    return (
      <Action role='button' onClick={disabled ? () => {} : () => onClick(feature)}>
        {title ? <Item disabled={disabled} style={style}>{title}</Item> : children}
      </Action>
    )
  }
}

PopupActionItem.propTypes = {
  /** The title of the action item (if a custom child component is not specified) */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,

  /** The content of the action item (takes precendence over `title`) */
  children: PropTypes.node,

  /** Determines if the action item should be disabled */
  disabled: PropTypes.bool,

  /** Callback fired on click and passed the layer and feature currently displayed in the popup */
  onClick: PropTypes.func,

  /** Styles applied to <Item> */
  style: PropTypes.object
}

PopupActionItem.defaultProps = {
  disabled: false,
  style: {}
}

export default PopupActionItem
