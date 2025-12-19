const API_BASE = '/items';

async function loadItems() {
    try {
        const response = await fetch(`${API_BASE}/all`);
        const items = await response.json();

        const tbody = document.getElementById('itemBody');
        tbody.innerHTML = '';

        items.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.category || '-'}</td>
                <td>Rs. ${item.unitPrice.toFixed(2)}</td>
                <td>${item.qtyOnHand}</td>
                <td><button onclick="deleteItem('${item.code}')">Delete</button></td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to load items');
    }
}

async function saveItem() {
    const item = {
        code: document.getElementById('code').value.trim(),
        name: document.getElementById('name').value.trim(),
        category: document.getElementById('category').value.trim(),
        unitPrice: parseFloat(document.getElementById('unitPrice').value) || 0,
        qtyOnHand: parseInt(document.getElementById('qtyOnHand').value) || 0
    };

    const errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = '';

    if (!item.code || !item.name) {
        errorDiv.innerHTML = 'Code and Name are required!';
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });

        if (response.ok) {
            alert('Item saved successfully!');
            clearForm();
            loadItems();
        } else {
            const errorData = await response.json();
            let messages = '';
            for (const [field, msg] of Object.entries(errorData)) {
                messages += `${field.charAt(0).toUpperCase() + field.slice(1)}: ${msg}<br>`;
            }
            errorDiv.innerHTML = messages || 'Error saving item';
        }
    } catch (error) {
        errorDiv.innerHTML = 'Network error! Check if backend is running.';
    }
}

async function deleteItem(code) {
    if (!confirm(`Delete item ${code}?`)) return;

    try {
        const response = await fetch(`${API_BASE}/${code}`, { method: 'DELETE' });
        if (response.ok) {
            alert('Item deleted successfully!');
            loadItems();
        } else {
            alert('Item not found');
        }
    } catch (error) {
        alert('Error deleting item');
    }
}

function clearForm() {
    document.getElementById('code').value = '';
    document.getElementById('name').value = '';
    document.getElementById('category').value = '';
    document.getElementById('unitPrice').value = '';
    document.getElementById('qtyOnHand').value = '';
    document.getElementById('errorMessages').innerHTML = '';
}

window.onload = loadItems;