/*
Este código exporta uma função chamada Button que recebe um único argumento props do tipo ButtonProps. 
Ela retorna um elemento de parágrafo que exibe a propriedade title do objeto props.
*/

interface ButtonProps {
  title: string
}

export function Button(props: ButtonProps) {
  return <p>{props.title}</p>
}
