import {
  SET_LOADING,
  GET_BOOKS,
  FILTER_GENRE,
  FILTER_DESCR,
  CLEAR_GENRE,
  CLEAR_DESCR,
  CLEAR_FILTER
} from './types'

// Set loading
export const setLoading = () => {
  return { type: SET_LOADING }
}

// Get books list
export const getBooks = () => async dispatch => {

  const res = await fetch('/books')
  const data = await res.json()

  dispatch({
    type: GET_BOOKS,
    payload: data
  })
}

// filter by genre
export const genreFilter = genre => async dispatch => {
  dispatch({ type: FILTER_GENRE, payload: genre })
}

// filter by descr
export const descrFilter = text => dispatch => {
  dispatch({ type: FILTER_DESCR, payload: text })
}

// Clear genre search
export const genreClear = () => dispatch => {
  dispatch({ type: CLEAR_GENRE })
}

// Clear descr search
export const descrClear = () => dispatch => {
  dispatch({ type: CLEAR_DESCR })
}

export const clearFilter = () => dispatch => {
  dispatch({ type: CLEAR_FILTER })
}