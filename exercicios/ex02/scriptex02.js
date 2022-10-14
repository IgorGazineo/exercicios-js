salarioIn = Number(prompt('Digite o seu salário atual:'))
reajuste1 = Number(prompt('Digite a porcentagem do reajuste do seu salário'))
reajuste = reajuste1*salarioIn/100
salarioFim = salarioIn + reajuste
alert(`Seu salário de ${salarioIn} reais com o reajuste de ${reajuste1}% aumentou para ${salarioFim} reais `)