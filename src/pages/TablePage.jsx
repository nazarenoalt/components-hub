import TableItem from "../components/TableItem"
import Table from "../components/Table";

const TablePage = () => {
  // In case it be needed to add more values, it'll keep as an array of objects
  const columns = [
    {name: "Name", width: 200},
    {name: "Role", width: 200},
    {name: "Email", width: 100},
    {name: "Age", width: 100},
  ]
  return (
    <div>
      <Table columns={columns} editable>
        <TableItem>
            <div>John Doe</div>
            <div>Software Engineer</div>
            <div>john.doe@gmail.com</div>
            <div>25</div>
        </TableItem>
        <TableItem>
          <div>Jeremias Plopi</div>
          <div>Software Engineer</div>
          <div>jere.plopi@gmail.com</div>
          <div>32</div>
          </TableItem>
        <TableItem>
          <div>Nazareno Aznar</div>
          <div>Software Engineer</div>
          <div>nazareno.aznar@gmail.com</div>
          <div>27</div>
        </TableItem>
        <TableItem>
          <div>Jose Juán</div>
          <div>Agile Manager</div>
          <div>jose.juan@gmail.com</div>
          <div>32</div>
        </TableItem>
      </Table>
    </div>
  );
};

export default TablePage;
