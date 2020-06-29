import React, {useState} from 'react'

const Book = ({ book }) => {
  const { genre, title, author, description, year, image } = book

  const [descr, setDescr] = useState(false)

  const onToggle = () => {
    if (descr === false) {
      setDescr(true)
    } else {
      setDescr(false)
    }
  } 

  return (
		<div className='book_wrap'>
			<div className='book'>
				<img src={image} alt='book' className='book_img' />
				<div className='book_elems'>
					<div className='book_elem'>
						<strong>Название:</strong> {title}
					</div>
					<div className='book_elem'>
						<strong>Автор:</strong> {author}
					</div>
					<div className='book_elem'>
						<strong>Год издания:</strong> {year}
					</div>
					<div className='book_elem'>
						<strong>Жанр:</strong> {genre}
					</div>
				</div>
				<div>
					{descr === true ? (
						<div className='book_descr'>
							<div>{description}</div>
							<button className='btn btn_toggle' onClick={onToggle}>
								Свернуть...
							</button>
						</div>
					) : (
						<button className='btn btn_toggle' onClick={onToggle}>
							<strong>Развернуть описание...</strong>
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Book
