var valorP = Number(prompt('Digite o valor do seu produto:'))
var desconto = Number(prompt('Digite (apenas com números) o desconto do produto em porcentagem:'))
    descontoFinal = desconto * valorP/100
    valorFinal = valorP - descontoFinal
alert(`O produto de valor: ${valorP} reais com ${desconto}% de deconto, sai por ${valorFinal} reais.  `)
