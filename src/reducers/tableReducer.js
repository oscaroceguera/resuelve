import { fromJS } from 'immutable'

// Actions
const OPEN_MODAL = 'src/table/OPEN_MODAL'
const CLOSE_MODAL = 'src/table/CLOSE_MODAL'
const LISTEN_FIELDS = 'src/table/LISTEN_FIELDS'
const RESET_VALUES = 'src/table/RESET_VALUES'
const SAVE_CONCEPTO = 'src/table/SAVE_CONCEPTO'
const CLEAN_CONCEPTO = 'src/table/CLEAN_CONCEPTO'
const DELETE_CONCEPTO = 'src/table/DELETE_CONCEPTO'
const SET_CONCEPTO_TO_UPDATE = 'src/table/SET_CONCEPTO_TO_UPDATE'
const UPDATE_CONCEPTO = 'src/table/UPDATE_CONCEPTO'

// Actions creators
export function openModalAction () {
  return {
    type: OPEN_MODAL
  }
}

export function closeModalAction () {
  return {
    type: CLOSE_MODAL
  }
}

function cleanConcepto () {
  return {
    type: CLEAN_CONCEPTO
  }
}

export function listenFields (field, value) {
  return {
    type: LISTEN_FIELDS,
    field,
    value
  }
}

function addConcepto(concepto) {
  return {
    type: SAVE_CONCEPTO,
    concepto
  }
}

export function conceptoFanout () {
  return function (dispatch, getState) {
    const currentConcepto =  getState().tableReducer.toJS().currentConcepto
    dispatch(addConcepto(currentConcepto))
    dispatch(closeModalAction())
    dispatch(cleanConcepto())
  }
}

export function updateConcepto (concepto, index) {
  return {
    type: UPDATE_CONCEPTO,
    concepto,
    index
  }
}

export function updateConceptoFanout () {
  return function (dispatch, getState) {
    const {currentConcepto, updateCurrentIndex} =  getState().tableReducer.toJS()
    dispatch(updateConcepto(currentConcepto, updateCurrentIndex))
    dispatch(closeModalAction())
    dispatch(cleanConcepto())
  }
}

export function deleteConcepto (index) {
  return {
    type: DELETE_CONCEPTO,
    index
  }
}

export function setConceptoToUpdate(index) {
  return {
    type: SET_CONCEPTO_TO_UPDATE,
    index
  }
}

export function resetValues () {
  return {
    type: RESET_VALUES
  }
}

// Reducer
const initialState = fromJS({
  updateCurrentIndex: '',
  isUpdate: false,
  modalOpen: false,
  currentConcepto: {
    descripcion: '',
    cantidad: '',
    unidades: '',
    precioUnit: ''
  },
  conceptos: []
})

function tableReducer (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return state.set('modalOpen', true)
    case CLOSE_MODAL:
      return state.set('modalOpen', false)
    case LISTEN_FIELDS:
      return state.setIn(['currentConcepto', action.field], action.value)
    case RESET_VALUES:
      return state.merge(initialState)
    case SAVE_CONCEPTO:
      return state.merge({
        conceptos: state.get('conceptos').unshift(action.concepto)
      })
    case DELETE_CONCEPTO:
      return state.deleteIn(['conceptos', action.index])
    case SET_CONCEPTO_TO_UPDATE:
      return state.merge({
        updateCurrentIndex: action.index,
        isUpdate: true,
        modalOpen: true,
        currentConcepto: state.getIn(['conceptos', action.index])
      })
    case UPDATE_CONCEPTO:
      return state.merge({
        isUpdate: false,
        conceptos: state.get('conceptos').update(action.index, val => action.concepto)
      })
    case CLEAN_CONCEPTO:
      return state.merge({
        currentConcepto: {
          descripcion: '',
          cantidad: '',
          unidades: '',
          precioUnit: ''
        },
      })
    default:
      return state
  }
}

export default tableReducer
