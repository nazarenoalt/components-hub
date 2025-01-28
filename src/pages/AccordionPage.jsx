import Accordion from "../components/Accordion"
const AccordionPage = () => {
		const firstAccordion = [
			{
				title: "first accordion",
				content: "let's try with this first example",
				id: 1
			},
			{
				title: "A second try",
				content: "let's try with this first example",
				id: 2
			},
			{
				title: "More example questions to be replied",
				content: "let's try with this first example",
				id: 3
			}
		];
		const secondAccordion = [
			{
				title: "Man por qué sos tan capo?",
				content: "let's try with this first example",
				id: 4
			},
			{
				title: "No se ya me quedé sin ideas",
				content: "let's try with this first example",
				id: 5
			},

		]

  return (
		<div>
			<Accordion items={firstAccordion} />
			<Accordion items={secondAccordion} />
		</div>
  )
}

export default AccordionPage