import Button from "./Button"

const ButtonList = () => {

  const handleClick = () => {
    console.log('jajaja LOL')
  }

  return (
    <div>
      <div className="flex gap-2">
        <Button type="primary" onClick={handleClick} className="bg-red-500">Click me</Button>
        <Button type="warn">Click me</Button>
        <Button type="alert">Click me</Button>
        <Button type="green">Click me</Button>
        <Button>Click me</Button>
      </div>
      <div className="flex gap-2 mt-4">
        <Button rounded type="primary">Click me</Button>
        <Button rounded type="warn">Click me</Button>
        <Button rounded type="alert">Click me</Button>
        <Button rounded type="green">Click me</Button>
        <Button rounded >Click me</Button>
      </div>
      <div className="flex gap-2 mt-4">
        <Button alternative type="primary">Click me</Button>
        <Button alternative type="warn">Click me</Button>
        <Button alternative type="alert">Click me</Button>
        <Button alternative type="green">Click me</Button>
        <Button alternative>Click me</Button>
      </div>
      <div className="flex gap-2 mt-4">
        <Button alternative rounded type="primary">Click me</Button>
        <Button alternative rounded type="warn">Click me</Button>
        <Button alternative rounded type="alert">Click me</Button>
        <Button alternative rounded type="green">Click me</Button>
        <Button alternative rounded >Click me</Button>
      </div>
    </div>
  )
}

export default ButtonList