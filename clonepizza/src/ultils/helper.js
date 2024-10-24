export function formatCurrency(value) {
    return new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
}