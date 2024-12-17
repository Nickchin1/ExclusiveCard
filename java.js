// Função para mostrar o pop-out com conteúdo específico
function showPopout(tipo) {
    const popoutText = document.getElementById('popout-text');
    let textContent = '';

    if (tipo === 'cartao') {
        textContent = 'O cartão consignado possui uma das menores taxas de juros do mercado, ficando atrás apenas do empréstimo consignado. Isso ocorre porque as parcelas são descontadas diretamente da folha de pagamento ou aposentadoria, o que reduz o risco de inadimplência. Enquanto o crédito rotativo pode cobrar taxas de até 400% ao ano, o cartão consignado apresenta juros que variam entre 1,5% e 3% ao mês, dependendo da instituição. Essa segurança para o credor torna o produto mais acessível, beneficiando o tomador com juros mais baixos.';
    } else if (tipo === 'juros') {
        textContent = 'O cartão consignado é uma modalidade de crédito em que as parcelas são descontadas diretamente da folha de pagamento ou aposentadoria.Ele oferece uma das menores taxas de juros do mercado,ficando atrás apenas do empréstimo consignado, o que o torna uma opção vantajosa.';
    } else if (tipo === 'parcerias') {
        textContent = 'O cartão consignado oferece vantagens em lojas parceiras, com descontos exclusivos em produtos e serviços. Aproveite promoções especiais em supermercados, gás de cozinha, iFood, Uber e muito mais. Assim, você economiza nas suas compras do dia a dia e facilita o pagamento com parcelas fixas!';
    }

    // Atualiza o conteúdo do pop-out
    popoutText.textContent = textContent;

    // Exibe o pop-out
    document.getElementById('popout').classList.add('active');
}

// Função para fechar o pop-out
function closePopout() {
    document.getElementById('popout').classList.remove('active');
}
