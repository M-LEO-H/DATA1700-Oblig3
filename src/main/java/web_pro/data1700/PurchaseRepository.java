package web_pro.data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class PurchaseRepository {

    @Autowired
    private JdbcTemplate db;

    public void savePurchase(Purchase purchase){
        String sql = "insert into Purchases(movie, numberOfTickets, fName, lName, phoneNumber, email) values (?,?,?,?,?,?)";
        db.update(sql, purchase.getMovie(), purchase.getNumberOfTickets(), purchase.getfName(),
                purchase.getlName(), purchase.getPhoneNumber(), purchase.getEmail());
    }
    public void changePurchase(Purchase purchase){
        String sql = "UPDATE Purchases set movie=?, numberOfTickets=?,fName=?, lName=?, phoneNumber=?, email=? where id=?";
        db.update(sql, purchase.getMovie(), purchase.getNumberOfTickets(), purchase.getfName(), purchase.getlName(), purchase.getPhoneNumber(), purchase.getEmail(), purchase.getId());
    }

    public Purchase getOnePurchase(int id){
        String sql = "select * from Purchases where id=?";
        return db.queryForObject(sql, new BeanPropertyRowMapper<>(Purchase.class), id);
    }
    public List<Purchase> getAllPurchases(){
        String sql = "select * from Purchases order by lower(lName)";
        return db.query(sql, new BeanPropertyRowMapper<>(Purchase.class));
    }
    public void deleteOnePurchase(int id){
        String sql = "delete from Purchases where id = " + id;
        db.update(sql);
    }

    public void deleteAllPurchases(){
        String sql = "delete from Purchases";
        db.update(sql);
    }
}
