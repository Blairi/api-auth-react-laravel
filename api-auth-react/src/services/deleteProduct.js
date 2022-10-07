
export const deleteProduct = async ({ token, id }) => {


  const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/products/${id}`,{
    headers:{
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ token }`
    },
    method: 'DELETE',
  });

  const data = await response.json();
  
  return data;

}
