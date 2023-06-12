
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
    const existingFiles = fetchData("files") ;
    return localStorage.setItem("files" , JSON.stringify([...existingFiles , newItem]));
  }

// remove duplicates
  export function removeDuplicates(data, key) {
    return [
         ...new Map(
              data.map( x => [key(x), x])
        ).values( )
    ]
}

// search query for search bar
export const filterFiles = (files, query) => {
  if (!query) {
      return files;
  }

  return files.filter((file) => {
      const fileName = file.name.toLowerCase();
      return fileName.includes(query);
  });
}; 


// unique objects

export function findUniqueObjects(array) {
  console.log("function triggered")
  const uniqueKeys = new Set();
  const uniqueObjects = [];

  for (const obj of array) {
    const key = JSON.stringify(obj); // Convert the object to a string representation
    if (!uniqueKeys.has(key)) {
      uniqueKeys.add(key);
      uniqueObjects.push(obj);
    }
  }

  return uniqueObjects;
}