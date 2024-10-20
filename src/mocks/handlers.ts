import { http, HttpResponse } from "msw";

const initialData = [
  {
    type: "bankdraft",
    title: "Bank Draft",
    image: "https://picsum.photos/300?random=1",
    position: 0,
  },
  {
    type: "bill-of-lading",
    title: "Bill of Lading",
    image: "https://picsum.photos/300?random=2",
    position: 1,
  },
  {
    type: "invoice",
    title: "Invoice",
    image: "https://picsum.photos/300?random=3",
    position: 2,
  },
  {
    type: "bank-draft-2",
    title: "Bank Draft 2",
    image: "https://picsum.photos/300?random=4",
    position: 3,
  },
  {
    type: "bill-of-lading-2",
    title: "Bill of Lading 2",
    image: "https://picsum.photos/300?random=5",
    position: 4,
  },
];

// Store initial data in localStorage if not already present
const localStorageKey = "posts";
if (!localStorage.getItem(localStorageKey)) {
  localStorage.setItem(localStorageKey, JSON.stringify(initialData));
}

// Function to get data from localStorage
const getDataFromLocalStorage = () => {
  const data = localStorage.getItem(localStorageKey);
  return data ? JSON.parse(data) : [];
};

// Function to save data to localStorage
const saveDataToLocalStorage = (data: any) => {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
};

// handle GET request to /posts
export const handlers = [
  http.get("posts", () => {
    const data = getDataFromLocalStorage();
    return HttpResponse.json(data);
  }),

  // handle POST request to /posts to add new data
  http.post("posts", async ({ request }) => {
    const newData = await request.json();
    const currentData = getDataFromLocalStorage();
    currentData.push(newData);
    saveDataToLocalStorage(currentData);
    return HttpResponse.json(newData, { status: 201 });
  }),
];
