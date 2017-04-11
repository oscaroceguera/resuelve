const GREEN = '#00d1b2'

const FLEX_ALIGN_CENTER = {
  display: 'flex',
  alignItems: 'center'
}

export const HEADER_CONTAINER = {
  ...FLEX_ALIGN_CENTER,
  justifyContent: 'space-between',
  padding: '1em'
}

export const TITLE = {
  fontSize: '1.2em'
}

export const BTN = {
  ...FLEX_ALIGN_CENTER,
  color: GREEN,
  border: `1px solid ${GREEN}`,
  borderRadius: '4px',
  padding: '.5em'
}
