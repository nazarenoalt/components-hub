import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"

const ModalPage = () => {
  const [isModalOpen, setIsModalopen] = useState(false);
  const handleClick = () => {
    setIsModalopen(!isModalOpen);
  }

  return (
    <div>
      <Button type="warn" onClick={handleClick}>Open modal</Button>
      {isModalOpen && (
        <Modal onClick={handleClick}>
          <h2 className="text-[40px] font-semibold pb-4 ">Oops!</h2>
          <div className="pb-4">Uhhm... somthng happened, Idk look what you did bro</div>
          <Button onClick={handleClick}>Understood</Button>
        </Modal>
        )}
    </div>
  )
}

export default ModalPage