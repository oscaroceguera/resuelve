import React from 'react'

const styles = {
  border: '1px solid #9E9E9E',
  width: '1000px',
  margin: '1em auto',
  paddingBottom: '1em'
}

const Wrapper = ({children}) => (
  <div style={styles}>
    {children}
  </div>
)

Wrapper.propTypes = {
  children: React.PropTypes.array.isRequired
}

export default Wrapper
