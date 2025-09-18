import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {getStoredReadList} from '../../Utility/addtDB';
import Book from "../Book/Book";
const ListedBooks = () => {
const  [readList,setReadList] = useState([]);
const [sort,setSort] = useState([]);
const handleSort = sortType =>{
setSort (sortType);


if(sortType === 'No of Pages'){

const sortedReadList = [...readList].sort((a,b)=>a.totalPages - b.totalPages);
setReadList(sortedReadList);

}
if(sortType ==="Ratings"){

const sortedRatingList =[...readList].sort((a,b)=>a.rating -b.rating);
setReadList(sortedRatingList);

}


}



  const allBooks = useLoaderData();
useEffect (() => {

const storedReadList = getStoredReadList();
const storedReadListInt =storedReadList.map(id=>parseInt(id));

console.log(storedReadList,storedReadListInt,allBooks);


const readBookList = allBooks.filter(book =>storedReadListInt.includes(book.bookId) );
setReadList(readBookList);

},[]);



  return (
    <div>

<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">{
  sort ?`sort by : ${sort}`  : 'Sort By'
  }</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick = {()=>handleSort('Ratings')}><a>Ratings</a></li>
    <li onClick = {()=>handleSort('No of Pages')}><a>No of pages</a></li>
  </ul>
</div>


      <h3 className="text-3xl my-8"> Listed Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I read : {readList.length}</h2>

          {
readList.map(book => <Book key={book.bookId} books={book}></Book>)

          }
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
