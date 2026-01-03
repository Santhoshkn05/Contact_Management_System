const BASE_URL =
  import.meta.env.PROD
    ? "/api/contacts"
    : "http://localhost:5000/api/contacts";

export const getContacts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addContact = async (data) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteContact = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
