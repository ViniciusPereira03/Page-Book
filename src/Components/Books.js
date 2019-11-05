import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/book.css';


export default function Books () {
    const [ thumbnails, setThumbnails ] = useState([]);

    async function showBooks() {
        const { data } = await axios.get("https://www.googleapis.com/books/v1/volumes?q=HARRY%20POTTER");

        setThumbnails(data.items.slice(0, 3).map(thumb => thumb.volumeInfo.imageLinks.thumbnail))
    }

    useEffect(() => {
        showBooks();
    }, [])


    return (
        <div className="books">
            {thumbnails && thumbnails.map(thumb => (
                <div key={thumb} className="thumbnail">
                    <img src={thumb} alt="Harry Potter Capa" />
                </div>
            )) }
        </div>
    );
}
