// Mendapatkan data dari API
function fetchData() {
    fetch('http://192.168.137.1:80/smokes')
      .then(response => response.json())
      .then(data => {
        // Data berhasil diterima dari API
        console.log(data);
        renderTable(data);
      })
      .catch(error => {
        // Kesalahan dalam fetching data dari API
        console.error(error);
        // Tampilkan pesan kesalahan atau lakukan penanganan kesalahan yang sesuai
      });
  }
  
  // Render data ke dalam tabel
  function renderTable(data) {
    var tableBody = document.querySelector('.report-table tbody');
  
    data.forEach(item => {
      var row = document.createElement('tr');
  
      var smokeLevelCell = document.createElement('td');
      smokeLevelCell.textContent = item.smokeLevel; // Memperbaiki properti yang diakses
      row.appendChild(smokeLevelCell);
  
      var statusCell = document.createElement('td');
      statusCell.textContent = item.status;
      row.appendChild(statusCell);
  
      var createdAtCell = document.createElement('td');
      createdAtCell.textContent = item.created_at;
      row.appendChild(createdAtCell);
  
      tableBody.appendChild(row);
    });
  }
  
  // Panggil fungsi fetchData untuk mengambil data saat halaman dimuat
  fetchData();
  