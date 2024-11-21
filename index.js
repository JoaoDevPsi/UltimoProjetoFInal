let usuarioLogado = null;
let produtos = [];

const usuarios = {};

function showRegistration() {
  document.getElementById('login-area').style.display = 'none';
  document.getElementById('registration-area').style.display = 'block';
}


function register() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;

  if (username && password) {
      usuarios[username] = password;
      alert('Usuário cadastrado!');
      document.getElementById('registration-area').style.display = 'none';
      document.getElementById('login-area').style.display = 'block';
  } else {
    alert('Preencha todos os campos!');
  }
}


function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (usuarios[username] === password) {
    usuarioLogado = username;
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('product-area').style.display = 'block';
    loadProducts();
  } else {
    alert('Login inválido!');
  }
}

function logout() {
    usuarioLogado = null;
    document.getElementById('product-area').style.display = 'none';
    document.getElementById('login-area').style.display = 'block';
}


function addProduct() {
  const productName = document.getElementById('product-name').value;
  const productPrice = parseFloat(document.getElementById('product-price').value);

  if (productName && !isNaN(productPrice)) {
    produtos.push({ name: productName, price: productPrice });
    updateProductList();
  } else {
    alert('Preencha todos os campos corretamente!');
  }
}

function updateProductList() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  produtos.forEach(produto => {
    const li = document.createElement('li');
    li.textContent = `${produto.name} - R$ ${produto.price.toFixed(2)}`;
    productList.appendChild(li);
  });
}

function loadProducts() {
    updateProductList();
}