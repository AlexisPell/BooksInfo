import {
  GET_BOOKS, 
  SET_LOADING,
  FILTER_DESCR,
  FILTER_GENRE,
  CLEAR_DESCR,
  CLEAR_GENRE,
  CLEAR_FILTER
} from './../actions/types'

const initialState = {
  books: null,
  loading: false,
  filteredByGenre: null,
  filteredByDescr: null,
  filtered: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      }
    case FILTER_GENRE:
      return {
        ...state,
        filtered: state.books.filter(book => book.genre === action.payload)
      }
    case FILTER_DESCR:
      return {
        ...state,
        filtered: state.books.filter(book => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return book.author.match(regex) || book.title.match(regex)
        })
      }
    case CLEAR_GENRE:
      return {
        ...state,
        filteredByGenre: null
      }
    case CLEAR_DESCR:
      return {
        ...state,
        filteredByDescr: null
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered : null
      }
    default:
      return state
  }
}