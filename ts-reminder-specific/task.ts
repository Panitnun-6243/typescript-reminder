export const task = () => {
  // course task (assignment)
  type ButtonProps = {
    color: string
    text: string | { toString: () => string }
  } & (
    | { variant?: 'contain'; opacity?: number }
    | { variant?: 'outline'; borderWidth?: number }
  )

  function buildButton(props?: ButtonProps) {
    console.log(props)
  }

  buildButton()
  buildButton({ variant: 'contain', color: '#4466ee', text: 'hello' })
  buildButton({ variant: 'contain', color: '#4466ee', opacity: 0.6, text: 20 })
  buildButton({ variant: 'outline', color: '#4466ee', text: 'hi' })
  buildButton({
    variant: 'outline',
    color: '#4466ee',
    borderWidth: 2,
    text: 'lorem',
  })
  const person = {
    firstName: 'Somchai',
    lastName: 'Somset',
    toString() {
      return `${this.firstName} ${this.lastName}`
    },
  }
  buildButton({ color: '#55ee11', text: person })
}
