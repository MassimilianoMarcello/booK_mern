import PropTypes from 'prop-types';

import './Book.css';

const Book = ({ book }) => {
    return (
        <div className="book-card">
            <div className="image-container">
                <img src={book.image} alt={book.title} />
            </div>

            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.category}</p>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        category: PropTypes.string,
        image: PropTypes.string
    })
};

export default Book;
