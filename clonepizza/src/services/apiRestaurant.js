const API_URL = 'https://react-fast-pizza-api.onrender.com/api';


export async function getMenuRes() {
    const res = await fetch(`${API_URL}/menu`);
    if (!res.ok) throw new Error('Failed to get menu');
    const { data } = await res.json();
    return data
}

export async function createOrder(newOrder) {
    try {
        const res = await fetch(`${API_URL}/order`,
            {
                method: 'POST',
                body: JSON.stringify(newOrder),
                headers: { 'Content-Type': 'application/json' }
            });
        if (!res.ok) throw Error();
        const { data } = await res.json();
        console.log(data)
        return data;
    } catch {
        throw Error('Failed to create order');
    }
}