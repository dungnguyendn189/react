const API_URL = 'https://react-fast-pizza-api.onrender.com/api';


export async function getMenuRes() {
    const res = await fetch(`${API_URL}/menu`);
    if (!res.ok) throw new Error('Failed to get menu');
    const { data } = await res.json();
    return data
}