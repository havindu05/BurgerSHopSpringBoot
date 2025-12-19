const API_BASE = '/customers';

async function loadCustomers() {
    try {
        const response = await fetch(`${API_BASE}/all`);
        const customers = await response.json();

        const tbody = document.getElementById('customerBody');
        tbody.innerHTML = '';

        customers.forEach(customer => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.phone || '-'}</td>
                <td>${customer.nic || '-'}</td>
                <td>${customer.address || '-'}</td>
                <td><button onclick="deleteCustomer('${customer.id}')">Delete</button></td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to load customers');
    }
}

async function saveCustomer() {
    const customer = {
        id: document.getElementById('id').value.trim(),
        name: document.getElementById('name').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        nic: document.getElementById('nic').value.trim(),
        address: document.getElementById('address').value.trim()
    };

    if (!customer.id || !customer.name) {
        alert('ID and Name are required!');
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customer)
        });

        if (response.ok) {
            alert('Customer saved successfully!');
            clearForm();
            loadCustomers();
        } else {
            alert('Error saving customer');
        }
    } catch (error) {
        alert('Something went wrong!');
    }
}

async function deleteCustomer(id) {
    if (!confirm(`Delete customer ${id}?`)) return;

    try {
        const response = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
        if (response.ok) {
            alert('Deleted successfully!');
            loadCustomers();
        }
    } catch (error) {
        alert('Error deleting');
    }
}

function clearForm() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('nic').value = '';
    document.getElementById('address').value = '';
}

window.onload = loadCustomers;