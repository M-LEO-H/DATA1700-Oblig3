package web_pro.data1700;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

@Repository
public class PurchaseRepository {

    @Autowired
    private JdbcTemplate db;

    public void savePurchase(Purchase purchase){
        String sql = "insert into Purchases(movie, numberOfTickets, fName, lName, phoneNr, email) values (?,?,?,?,?,?)";
        db.update(sql, purchase.getMovie(), purchase.getNumberOfTickets(), purchase.getfName(),
                purchase.getlName(), purchase.getPhoneNr(), purchase.getEmail());
    }
    public List<Purchase> getAllPurchases(){
        List<Purchase> listPurchases;
        return listPurchases;
    }

    public void deleteAllPurchases(){

    }


}
