package web_pro.data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TicketController {
    @Autowired
    private PurchaseRepository rep;

    @PostMapping("/savePurchase")
    public void savePurchase(Purchase purchase){
        rep.savePurchase(purchase);
    }

    @GetMapping("/getAll")
    public List<Purchase> getAll(){
        return rep.getAllPurchases();
    }

    @PostMapping("/deleteAll")
    public void deleteAll(){
        rep.deleteAllPurchases();
    }
}
