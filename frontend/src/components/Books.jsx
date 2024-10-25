import { useState, useEffect } from 'react';
import axios from 'axios';
import './Books.css';
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get('http://localhost:5004/api/books');
                console.log('API Response:', res.data); // Log della risposta

                if (res.status === 200) {
                    if (Array.isArray(res.data)) {
                        setBooks(res.data);
                    } else {
                        console.error('Data received is not an array:', res.data);
                    }
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        getBooks();
        setEmail(localStorage.getItem('email'));
    }, []);

    return (
        <>
            {email && <div className="email">Hello, {email}</div>}
            <div className="books">
                {books.map((book) => (
                    <Book key={book._id} book={book} />
                ))}
            </div>
        </>
    );
};

export default Books;

