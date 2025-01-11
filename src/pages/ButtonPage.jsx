import Button from "../components/Button"

const ButtonList = () => {

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        <Button type="primary" className="bg-red-500">Click me</Button>
        <Button type="warn">Click me</Button>
        <Button type="alert">Click me</Button>
        <Button type="green">Click me</Button>
        <Button>Click me</Button>
      </div>
      <div className="flex gap-2 mt-4  flex-wrap">
        <Button rounded type="primary">Click me</Button>
        <Button rounded type="warn">Click me</Button>
        <Button rounded type="alert">Click me</Button>
        <Button rounded type="green">Click me</Button>
        <Button rounded >Click me</Button>
      </div>
      <div className="flex gap-2 mt-4  flex-wrap">
        <Button alternative type="primary">Click me</Button>
        <Button alternative type="warn">Click me</Button>
        <Button alternative type="alert">Click me</Button>
        <Button alternative type="green">Click me</Button>
        <Button alternative>Click me</Button>
      </div>
      <div className="flex gap-2 mt-4  flex-wrap">
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