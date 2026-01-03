const BASE_URL = "https://contact-management-i8w8.onrender.com/api/contacts";

export const getContacts = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }
  return res.json();
};

export const addContact = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to add contact");
  }

  return res.json();
};

export const deleteContact = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete contact");
  }
};
