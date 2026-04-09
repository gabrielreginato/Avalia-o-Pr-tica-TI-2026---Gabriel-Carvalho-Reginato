const conteinerLista = document.getElementById("lista-startups");

async function carregarStartups() {
  const resposta = await fetch("http://localhost:3000/api/startups");

  const startups = await resposta.json();
  conteinerLista.innerHTML = "";

  if (startups.length === 0) {
    conteinerLista.innerHTML = "<p>Nenhuma startup encontrada.</p>";
    return;
  }

  startups.forEach((startup) => {
    const card = document.createElement("div");
    card.className = "startup-card";

    card.innerHTML = `
      <h3>${startup.nome_fantasia}</h3>
      <p><strong>Setor:</strong> ${startup.setor}</p>
      <p><strong>CNPJ:</strong> ${startup.cnpj}</p>
    `;

    conteinerLista.appendChild(card);
  });
}

document
  .getElementById("formCadastro")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "lista.html";
  });

carregarStartups();
