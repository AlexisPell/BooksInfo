import React, { useEffect } from 'react'

import Book from './Book'
import Loader from './loader/Loader'

import { connect } from 'react-redux'
import { getBooks, setLoading } from './../actions/appActions'

const BooksList = ({ app, getBooks, setLoading }) => {
  const { books, loading, filtered } = app
  
  useEffect(() => {
    setLoading()
    getBooks()
    //eslint-disable-next-line
  }, [])

  if (loading || books === null) {
    return <Loader />
  }


  // // Filter by description
  // const a = (
  //   filteredByGenre === null
  //     ? (books.map(book => <Book book={book} key={book.id} />))
  //     : (filteredByGenre.map(book => <Book book={book} key={book.id} />))
  // )

  // // Filter by ganre
  // const b = (
  //   filteredByDescr === null
  //     ? (books.map(book => <Book book={book} key={book.id} />))
  //     : (filteredByDescr.map(book => <Book book={book} key={book.id} />))
  // )


  return (
    <div className="books-list">
      {filtered === null
        ? (books.map(book => <Book book={book} key={book.id} />))
        : (filtered.map(book => <Book book={book} key={book.id} />))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  app: state.app
})

export default connect(mapStateToProps, { getBooks, setLoading })(BooksList)
