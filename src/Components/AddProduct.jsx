import React , {useState} from 'react'

const AddProduct = () => {

   const [name,setName] = useState('');
   const [price,setPrice] = useState('');
   const [category,setCategory] = useState('');
   const [company,setCompany] = useState('');
   const [error , setError] = useState(false);

   const addUser = async()=> {

      if(!name || !price || !category || !company){
        setError(true);
        return false;
      }

      const userId = JSON.parse(localStorage.getItem('user'))._id
      let result = await fetch('https://product-cart-backend.vercel.app/addProduct',{
        method:'post',
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
            'Content-Type':'application/json',
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      result = await result.json();
      setName('');
      setPrice('');
      setCategory('');
      setCompany('');
      console.log(result);
   }

  return (
    <div className='addProduct'>
       <input type="text" placeholder='Enter product name'  value={name} className='product-input' onChange={(e)=>setName(e.target.value)}/>
       {error && !name && <span className='errMsg'>Enter valid name</span>}
       <input type="number" placeholder='Enter product price' value={price} className='product-input' onChange={(e)=>setPrice(e.target.value)}/>
       {error && !price && <span className='errMsg'>Enter valid price</span>}
       <input type="text" placeholder='Enter product category' value={category} className='product-input' onChange={(e)=>setCategory(e.target.value)}/>
       {error && !category && <span className='errMsg'>Enter valid category</span>}
       <input type="text" placeholder='Enter product company' value={company} className='product-input' onChange={(e)=>setCompany(e.target.value)}/>
       {error && !company && <span className='errMsg'>Enter valid company</span>}

       <button className='product-btn' onClick={addUser} disabled={!name || !price || !category || !company}>Add Product</button>
    </div>
  )
}

export default AddProduct;
