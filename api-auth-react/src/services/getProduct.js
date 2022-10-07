
export const getProduct = async ({ token, id }) => {

  const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/products/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  });
  
  const { status } = response;
  const data = await response.json();
  
  return { data, status };

}
