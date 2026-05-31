package pu.fmi.webprogramming.contoller.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pu.fmi.webprogramming.exception.DeliveryCustomException;
import pu.fmi.webprogramming.model.CreateDeliveryDTO;
import pu.fmi.webprogramming.model.Customer;
import pu.fmi.webprogramming.model.Delivery;
import pu.fmi.webprogramming.model.DeliveryFilter;
import pu.fmi.webprogramming.model.enums.DeliveryStatusEnum;
import pu.fmi.webprogramming.repository.CustomerJpaRepository;
import pu.fmi.webprogramming.service.customer.CustomerServiceInterface;
import pu.fmi.webprogramming.service.delivery.DeliveryServiceInterface;

import java.util.List;

@RestController
@RequestMapping("/api/deliveries")
@CrossOrigin("http://localhost:5173/")
public class DeliveryApi {

  private final DeliveryServiceInterface deliveryServiceInterface;
  private final CustomerServiceInterface customerServiceInterface;

  public DeliveryApi(
      DeliveryServiceInterface deliveryServiceInterface,
      CustomerServiceInterface customerServiceInterface) {
    this.deliveryServiceInterface = deliveryServiceInterface;
    this.customerServiceInterface = customerServiceInterface;
  }

  @PutMapping("/{id}/courier")
  public ResponseEntity<Delivery> assignCourier(
      @PathVariable Long id, @RequestParam Long courierId) {
    Delivery updatedDelivery = deliveryServiceInterface.assignCourier(id, courierId);
    return ResponseEntity.ok(updatedDelivery);
  }

  @PutMapping("/{id}") // PUT /api/deliveries/{id}?status=
  public boolean updateDeliveryStatus(
      @PathVariable Long id, @RequestParam DeliveryStatusEnum status) {
    return deliveryServiceInterface.updateDeliveryStatus(id, status);
  }

  @PostMapping("/customer") // POST "/api/deliveries/customer"
  public Delivery createDelivery(@RequestBody CreateDeliveryDTO createDeliveryDTO) {

    Long id = createDeliveryDTO.getCustomerId();
    Customer customerFound = customerServiceInterface.getById(id);

    if (customerFound == null) {
      throw new DeliveryCustomException("Customer with id: " + id + " not found");
    }

    return deliveryServiceInterface.createDelivery(customerFound);
  }

  @PostMapping("/customer/{id}") // POST "/api/deliveries/customer/id"
  public Delivery createDelivery(@PathVariable Long id) {
    Customer customerFound = customerServiceInterface.getById(id);

    if (customerFound == null) {
      throw new DeliveryCustomException("Customer with id: " + id + " not found");
    }

    return deliveryServiceInterface.createDelivery(customerFound);
  }

  @GetMapping // GET "/api/deliveries?page=?&size=?&sortBy=?&direction=?customerId=?&status?"
  public List<Delivery> getDeliveriesBy(DeliveryFilter deliveryFilter) {
    return deliveryServiceInterface.getDeliveriesBy(deliveryFilter);
  }

  @GetMapping("/{deliveryId}") // GET "/api/deliveries/{deliveryId}"
  public ResponseEntity<?> getDeliveryById(@PathVariable Long deliveryId) {
    Delivery deliveryFound =
        deliveryServiceInterface.getAllDeliveries().stream()
            .filter(delivery -> delivery.getId().equals(deliveryId))
            .findFirst()
            .orElse(null);

    if (deliveryFound == null) {
      throw new DeliveryCustomException("Delivery with id: " + deliveryId + " not found");
    }

    return ResponseEntity.status(HttpStatus.OK).body(deliveryFound);
  }
}
