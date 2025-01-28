import { useState } from "react"

const Accordion = ({ items }) => {
	const [openedItems, setOpenedItems] = useState([]);

	const toggleItem = (id) => {
		console.log('jajaj')
		if(openedItems.includes(id)) {
			setOpenedItems(openedItems.filter(item => item !== id));
		} else {
			setOpenedItems([...openedItems, id])
		}
		console.log(openedItems)
	}

  return (
	<div className="">
		{items.map((item, index) => (
			<div key={index}>
				<h2 className="bg-blue-400 px-2 py-2 text-white cursor-pointer" onClick={() => toggleItem(item.id)}>{item.title}</h2>
				<p className={`bg-blue-200 px-2 transition-all h-0 overflow-hidden ${openedItems.includes(item.id) && "h-8"}`}>{item.content}</p>
			</div>
		))}
	</div>
  )
}

export default Accordion