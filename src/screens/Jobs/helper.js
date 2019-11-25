import _ from 'lodash'

// create initial state
export const initialState = {
  input: {
    position: '',
    rate: '',
    description: ''
  },
  data: [],
  err: '',
  loading: false,
  nextToken: ''
}

// create reducer to update state
export const reducer = (state, { type, data, error, loading, obj, nextToken = '' }) => {
  switch (type) {
    case 'CLEAR_INPUT':
      return { ...initialState, data: state.data }
    case 'SET_INPUT':
      return { ...state, input: obj }
    case 'CREATE':
      return { ...state, input: obj }
    case 'CREATEUPDATE':
      return { ...state, data: _.uniqBy([obj, ...state.data], 'id') }
    case 'DELETE':
      return { ...state, data: [...state.data].filter(x => x.id !== obj.id) }
    case 'READ':
      // flatlist is wrong with fetchMore, so this solution
      return { ...state, data: _.uniqBy([...state.data, ...data], 'id'), loading: false, nextToken }
    case 'LOADING':
      return { ...state, loading }
    case 'ERROR':
      return { error, loading: false }
    default:
      return state
  }
}
