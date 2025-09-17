import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredReadList } from '../../Utility/addtDB';

const BookDetails = () => {




    const {bookId} = useParams();
    const id = parseInt(bookId);
    console.log(bookId);
    const data = useLoaderData();
    // console.log(typeof bookId,typeof data[0].bookId,typeof id)
  const book = data.find(book=>book.bookId === id);

  const {bookId:currentBookId,image,title,bookName,category,author,review,tags,totalPages,publisher,yearOfPublishing,rating} = book;

  const handleMarkAsRead =(id) => {

  addToStoredReadList(id);
  }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
     <div className='mt-4 '> <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-6 ">
        {author}
      </p>
</div>
      <div className="border-t-2 mb-2"></div>
<h2>{category}</h2>
      <div className="border-t-2 mt-2 mb-6 "></div>

<p>{review}</p>
<div className="flex  gap-4 mt-6 mb-6">
<p>Tag</p>
    {
        tags.map((tag ,index)=> <button
          key={index} className="btn btn-xs bg-green-200 text-green-500">{tag}</button>)
     }
    </div>

    <div className="border-t-2 "></div>

    <div className="space-y-2 mt-6">
  <p className="flex">
    <span className="w-40 font-semibold">Number of Pages:</span> {totalPages}
  </p>
  <p className="flex">
    <span className="w-40 font-semibold">Publisher:</span> {publisher}
  </p>
  <p className="flex">
    <span className="w-40 font-semibold">Year Of Publishing:</span> {yearOfPublishing}
  </p>
  <p className="flex">
    <span className="w-40 font-semibold">Rating:</span> {rating}
  </p>
</div>
<div className='flex gap-4 mt-6'>
<button onClick={ () =>handleMarkAsRead(bookId)} className="btn btn-outline btn-primary">Mark as Read</button>
<button className="btn btn-primary">Add to Wish List</button>
</div>

    </div>
  </div>
</div>
       
    );
};

export default BookDetails;