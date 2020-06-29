import React from 'react'
import './App.sass'
import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/Navbar'
import SortPanel from './components/SortPanel'
import BooksList from './components/BooksList'

function App() {
  return (
		<Provider store={store}>
			<div className='bg'>
				<div className='App container'>
					<Navbar />
					<SortPanel />
					<div className='layout'>
            <BooksList />
          </div>
				</div>
			</div>
		</Provider>
	)
}

export default App