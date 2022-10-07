
export const updateProduct = async ({ token, id, name, price, quantity }) => {

  const payload = {
    name,
    price,
    quantity,
  }

  const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/products/${id}`,{
    headers:{
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ token }`
    },
    method: 'PUT',
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  
  return data;

}
