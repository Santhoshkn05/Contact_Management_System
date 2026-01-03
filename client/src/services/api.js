const BASE_URL = "/api/contacts";

/**
 * Fetch all contacts
 */
export const getContacts = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }

  return res.json();
};

/**
 * Add a new contact
 */
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
};

/**
 * Delete a contact by ID
 */
export const deleteContact = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete contact");
  }
};
