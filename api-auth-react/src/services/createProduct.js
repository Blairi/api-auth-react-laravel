
export const createProduct = async ({ token, name, price, quantity }) => {

  const formData = new FormData();
  formData.append('name', name);
  formData.append('price', price);
  formData.append('quantity', quantity);

  const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/products`,{
    headers:{
      Accept: "application/json",
      Authorization: `Bearer ${ token }`
    },
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  
  return data;

}
