import { Button, Table } from "react-bootstrap";

const DeliveryTable = ({ deliveries }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Created At</th>
          <th>Customer's Name</th>
          <th>Courier's Name</th>
          <th>Warehouse's City</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {deliveries.map((delivery) => {
          return (
            <tr>
              <td>{delivery.createdAt}</td>
              <td>
                {delivery.customer.firstName} {delivery.customer.lastName}
              </td>
              <td>
                {delivery.courier.firstName} {delivery.courier.lastName}
              </td>
              <td>{delivery.warehouse.city}</td>
              <td>{delivery.deliveryStatus}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default DeliveryTable;
