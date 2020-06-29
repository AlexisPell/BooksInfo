import React, { useState } from 'react'

import { connect } from 'react-redux'
import { genreFilter, genreClear, descrFilter, descrClear, clearFilter } from './../actions/appActions'

const SortPanel = ({  genreFilter, descrFilter, genreClear, descrClear, clearFilter }) => {
  const [search, setSearch] = useState('')

  // Sort By Search
  const onChange = e => {
    setSearch(e.target.value)
    if (e.target.value === '') {
      descrClear()
      clearFilter()
    } else {
      descrFilter(search)
    }
  }

  // Sort By Genre
  const onClick = e => {
    genreFilter(e.target.value)
    if (e.target.value === 'clear') {
      genreClear()
      clearFilter()
    } else {
      genreFilter(e.target.value)
    }
  }

  return (
    <div className="sortPanel">
      <div>
        <select onClick={onClick} className="drop-list" id="" >
          <option defaultValue value="clear">Выберите жанр</option>
          <option name="scientific" value="scientific" >Научная литература</option>
          <option name="fiction" value="fiction" >Художественная литература</option>
          <option name="detective" value="detective" >Детективы</option>
        </select>
      </div>
      <div>
        <input 
          className="input input_desc" 
          type="text" 
          placeholder="Поиск по автору или книге" 
          name="search" 
          value={search}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default connect(null, { genreFilter, descrFilter, genreClear, descrClear, clearFilter })(SortPanel)