import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DeliveryTable from "./DeliveryTable";

const BASE_URL = "http://localhost:8090";

const DeliveryPage = () => {
  const [customer, setCustomer] = useState(null);
  const [deliveries, setDeliveries] = useState([]);
  const [customers, setCustomers] = useState([]);

  /* TODO:
    Добави error state с useState

    При създаване на доставка:
    - Ако не е избран customer:
      - запази error със съобщение:
        "Please select a customer before creating a delivery."
      - НЕ се изпраща HTTP request

    В UI:
    - покажи error съобщението под select-а, ако error не е празен
  */

  useEffect(() => {
    getDeliveries();
    getCustomers();
  }, []);

  const getDeliveries = async () => {
    const response = await fetch(`${BASE_URL}/api/deliveries`);
    const deliveryCollection = await response.json();
    setDeliveries(deliveryCollection);
    console.log(deliveryCollection);
  };

  const getCustomers = async () => {
    const response = await fetch(`${BASE_URL}/api/customers`);
    const customerCollection = await response.json();
    setCustomers(customerCollection);
    console.log(customerCollection);
  };

  const onCustomerSelected = (customerId) => {
    console.log(customerId);
    setCustomer(customerId);
  };

  const onDeliveryCreate = async (event) => {
    event.preventDefault();
    console.log("State Customer: " + customer);

    /* TODO: Добави валидация, ако не е избран клиент, да се запазва грешка със съобщение
      "Please select a customer before creating a delivery."
      и да НЕ се изпраща HTTP request
    */

    const DELIVERY_API_CREATE_URL = `${BASE_URL}/api/deliveries/customer/${customer}`;

    //1. Правя POST HTTP Request
    //2. Вземам HTTP Response-a и инициализирам нова променлива за него
    const response = await fetch(DELIVERY_API_CREATE_URL, {
      method: "POST",
    });

    console.log(response);

    //3. Инициализирам променлива и вземам HTTP Response Body-то
    const delivery = await response.json();

    console.log(delivery);
    getDeliveries();
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1>Delivery Page</h1>
      <Form onSubmit={onDeliveryCreate}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Customer</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={customer}
            onChange={(event) => onCustomerSelected(event.target.value)}
          >
            <option value="">Select customer...</option>
            {customers.map((customer) => {
              return (
                <option value={customer.id}>
                  {customer.firstName} {customer.lastName}
                </option>
              );
            })}
          </Form.Select>
          {/*TODO: Показвай грешката под select-а, ако има такава. */}
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Delivery
        </Button>
      </Form>

      <div style={{ marginTop: 50 }}>
        <DeliveryTable deliveries={deliveries} />
      </div>
    </div>
  );
};

export default DeliveryPage;
