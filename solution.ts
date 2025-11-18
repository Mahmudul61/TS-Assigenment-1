//Provlem----> 1
type DataType = string | number | boolean ;

function formatValue (Value: DataType):DataType  {
        if(typeof Value === 'string'){
            return Value.toUpperCase()
        }
        else if (typeof Value === 'number') {
                const result = Value * 10;
                return result
        }
        else{
            return !Value
        }

}



// problem -----> 2

type ViewLength = string| any[]

function getLength(input : ViewLength):number{
    if (typeof input === 'string'|| Array.isArray(input)) {
        const result = input.length;
         return result
    }
    else{
        return 0
    }
    
}



//problem -----> 3

class Parson {
    name: string;
    age: number
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age ;
    }
    getDetails(){
        return `'Name: ${this.name},  Age: ${this.age}' `
    }
}



// problem ----> 4

type Item = {
        title:string,
    Rating: number

     }

function filterByRating(Array:Item[]):Item[]{
    const result = Array.filter( (oneItem) =>{
       return oneItem.Rating >= 4
    })
    return result
}


//problem ----> 5

type UsersData ={
    id:number,
    name:string,
    email:string,
    isActive:boolean
}

function filterActiveUsers(users:UsersData[]):UsersData[]{
  const result = users.filter((user) =>  user.isActive === true )
  return result
}

//problem ------> 6

interface Book{
    title:string,
    author:string,
    publishedYear:number,
    isAvailable:boolean
}

const printBookDetails = (book:Book) =>{
    const abailable = book.isAvailable? "yes" : 'no'
    console.log(` Title:${book.title}, Author: ${book.author} , Publishedyear: ${book.publishedYear},IsAvailable:${abailable } `);
    
}



//problem ----->7

type ArrayType =  string | number;

const getUniqueValues = (array1:ArrayType[] , array2:ArrayType[]):ArrayType[] =>{
        const UniqArray:ArrayType[] = []

    for (let i = 0; i < array1.length; i++) {
        let isDuplicate = false;
         for (let j = 0; j < UniqArray.length; j++) {
          if (UniqArray[j] === array1[i]) {
              isDuplicate = true;
             }
            }

          if (!isDuplicate) {
            UniqArray[UniqArray.length] = array1[i]!;
        }
    }
     for (let i = 0; i < array2.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < UniqArray.length; j++) {
            if (UniqArray[j] === array2[i]) {
                isDuplicate = true;
                }
            }
        if (!isDuplicate) {
            UniqArray[UniqArray.length] = array2[i]!;
        }
    }

    return UniqArray;
}



//provlem ----> 8

type Products ={
    name : string;
price :number;
quantity : number;
discount?:any
}

const calculateTotalPrice = (products: Products[]):number =>{
    if (products.length === 0) {
        return 0
    }
    
  const total = products.reduce((acc, product) => {
    const discount = product.discount || 0; 
    const productTotal = (product.price * product.quantity) * (1-discount/100);
    const result = acc + productTotal;
    return result
  }, 0);

  return total
}


