import { toast } from 'react-toastify';

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    return JSON.parse(storedListStr);
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();

  if (storedList.includes(id)) {
    console.log(id, "already exists in the read list");
  } else {
    storedList.push(id);
    localStorage.setItem("read-list", JSON.stringify(storedList));
    console.log(id, "added to read list ✅");

toast('this book is added to your read list')

  }
};

export { addToStoredReadList, getStoredReadList };
