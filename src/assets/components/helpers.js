
// fetch data from local storage

export const fetchData = (key) => {
  if(localStorage.getItem(key) == null) return [];
  return JSON.parse(localStorage.getItem(key));
};


// create file
export const createFile = ({
    name , path  , URL
  }) => {
    const newItem = {
      name : name ,
      path : path ,
      URL : URL  
    }
    const existingFiles = fetchData("files") ?? [] ;
    return localStorage.setItem("files" , JSON.stringify([...existingFiles , newItem]));
  }