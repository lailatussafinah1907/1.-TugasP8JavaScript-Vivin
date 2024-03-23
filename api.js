document.addEventListener("DOMContentLoaded", function() {
    fetch('https://crudcrud.com/api/3205ef552e594bee9dbcd46607c59bb7/product')
        .then(response => response.json())
        .then(data => {
            const productTable = document.getElementById('productTable');

            data.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product._id}</td>
                    <td>${product.nama_produk}</td>
                    <td>${product.jumlah}</td>
                    <td>${product.harga}</td>
                `;
                
                productTable.querySelector('tbody').appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
