
![[modulo b print.png]]
as variaveis quardam dados 

![[modulo b print 2.png]]
![[modulo b print 3.png]]

o comando typeof e ultilizado para saber o tipo de uma variavel,
para fazer isso você escreve:

typeof (nome da variavel)

![[print 4 modulo b.png]]

![[print 5 modulo b.png]]

![[reais.png]]
esse comando transforma os números diretamente em reais.


![[ttt.png]]

 +=mais   *asterisco=vezes
 -=menos    / =divisão
 %=divisão resto  **=elevado 
Uma forma de fazer somas e 
var n = 3
n=n + 4
n = n-5
e mais facíl fazer
n +=4
n-=5
isso só funciona se a variavel for a mesma

Tipos de operadores:
Aritiméticos:
+: soma 2+2:4
-: subtração 5-2 :3 
*: multiplicação 5*2 :10
/ : divisão 5/2 = 2.5 
% : resto de divisão 5%2 :1 (5/2)
** : elevado ao quadrado 5** 2 :5

Ordem de Precedência: 
() 
** 
*/ % 
+
-- 

Atribuição: 
Simples: 
Exemplo: 
Var a = 5+3 : 8 
Var b = a% 5 : 3 
Var c = 5* b ** 2 : 45 
Var d = 10 – a / 2 : 6 
Var e = 6 * 2 / d : 2 
Var f = b % e + 4 /
var e : 3 

Auto atribuição: 
Var n = 3 
n = n+4
n = n-5 
n = n*4 
n = n/2 
n = n**2 
n = n%5 

Simplificando: 
n+= 4 n-= 5 
n*= 4 
n/= 2 
n**= 2 
n%=5 

Incremento:
Var x =5 
X=x+1 
x++(simplificado) 
X=x-1 x-- (simplificado)

oredem de precendencia

![[Pasted image 20250314093430.png]]

exemplo:
![[exemplo-1.png]]

arvore DOM 
![[arvore DOM.png]]
Em java script você pode marcar uma teg e personalizala, os metodos usados são:![[marcas.png]]


Minha nota.


vaga a1 = carro1


= sempre que tiver sinal de igual, você vai ler como "recebe"

  
pense na memória do computador como um terreno de estacionamento

um espaço gigante onde posso colocar não carros, sim, dados.

variáveis são muito parecidas com as vagas de carros. as enfaixadas

var = vaga, variavel.
  

(No JS moderno, além de utilizar a palavra var, também podemos usar a palavra let.)

vamos criar identificadores pra eles

var n1

var n2

var n3

"vai criar 3 espaços no meu grande terreno, que é o espaço da minha memória"


eu posso também, colocar valores

  
var n1 =5

var n2=8.5

var n3=15

  

automaticamente esses valores vão ser colocados dentro das variáveis

isso se chama de atribuição

  

e assim como as vagas de caminhões, também temos var com ''vaga maior''

usando string ao invés de number, por isso s no começo

  

var s1 = "JavaScript'

var s2 = 'Curso em vídeo'

var s3 = ``Guanabara``

  

===================================================================

  

o nome de cada variavel, chamamos de identificadores

  

regras:

  

°Podem começar com letra, $ ou _

  

°Não podem começar com números

ex: não pode começar com 1s, e sim s1, senão dá erro

  

°E possivel usar letras ou números

  

°É possivel usar acentos e símbolos

  

°Não podem conter espaços

substitui pelo sinal de _

  

°Não podem ser palavras reservadas

ex: function, alert

palavras que já são utilizadas pelo JS como comandos

  

===================================================================

  

Dicas pra criar variavel

  

° Maiúsculas e minúsculas fazem diferença

se eu crio uma variavel a minusculo, vou terq ue usar a minusculo

se eu criar minusculo e depois usar maiusculo vai dá erro

var a = 10

var A = 20

  

°Tente escolher nomes coerentes para variáveis

quero guardar nome de uma pessoa: nome da variavel "nome"

quero guardar um salário: "salário" ou "sal"

quero gurdar idade: "idade"

telefone: "tel" "telefone"

  

°Evite se tornar um 'progrmador alfabeto' ou um 'programador contador'

o programador alfabeto é que todas as variaveis dele é a,b,c,d,e,f

e o contador é aqueles que usam n1,n2,n3,n4,n5

foge disso!

  

  

================================================================================

  

  

variaveis são pra guardar dados.

  

3 tipos de dados que guardamos:

  

5 18 -15.9 3.14 8.0

number

  

true false

booleans

  

"google" "javascript" "maria" "21 26975925"

string

  

  

=====================================================================================================================

  

Uma "cola" de um outro estudante que anotou também:

  

Minhas Anotações:

Comandos em JS:

  

<script> window.alert (‘este comando emite uma mensagem!')

window.confirm (‘este comando faz uma pergunta de confirmação')

window.prompt (‘este comando faz um pergunta de resposta!')

</script>

__________________________________________________________________________________________________________________________________________________________________

  

Variáveis:

  

Como Criar variáveis, Ex: var nome ou let nome

  

para uma variável receber um valor usamos var nome = Gustavo (desta forma criamos uma variável e ao mesmo tempo demos uma valor a ela)

  

nome = Gustavo (desta forma apenas demos um valor para a variável )

  

Regras das variáveis:

Podem começar com: Letra, $ ou _

Não podem começar com números

É possível usar letras ou números

É possível usar acentos e símbolos

Não pode conter espaços

Não pode usar palavras que são comandos

  

Dicas para nomes das variáveis:

Maiúsculas e Minúsculas fazem a diferença!

Tente escolher nomes coerentes a função da variável. Ex: Variável que vai armazenar a idade, coloca o nome dela de “idade”

Evite se tornar um “Programador Alfabeto” ou um “Programador Numérico”. Ex: Não usar os nomes das variáveis como “a”, “b”, “c”, etc; ou “a1”, “a2”, “a3”, etc.

  

Tipos de Dados das Variáveis: (Tipos Primitivos, lembrando que existem muitas outras!)

  

Numbers;

Strings;

Boolean;

  

Numbers: 1; -2; 4.5; 6.555 -> Basicamente números

Strings: Maria, Google, Joao, pedreiro, (seu CPF) -> Basicamente cadeia de caracteres

Boolean: True; False ->