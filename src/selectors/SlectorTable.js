import { createSelector } from 'reselect'
import { every} from 'lodash/collection'

const getItems = (state) => state.tableReducer.toJS()

const currentConceptoFields = createSelector(
  getItems,
  ({currentConcepto}) => currentConcepto
)

export const showSubmit = createSelector(
  currentConceptoFields,
  (items) => every(items)
)
