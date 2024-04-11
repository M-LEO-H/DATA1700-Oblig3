package web_pro.data1700;

public class Purchase {
    String movie;
    String numberOfTickets;
    String fName;
    String lName;
    String phoneNr;
    String email;

    public Purchase(String movie, String numberOfTickets, String fName, String lName, String phoneNr, String email) {
        this.movie = movie;
        this.numberOfTickets = numberOfTickets;
        this.fName = fName;
        this.lName = lName;
        this.phoneNr = phoneNr;
        this.email = email;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public String getNumberOfTickets() {
        return numberOfTickets;
    }

    public void setNumberOfTickets(String numberOfTickets) {
        this.numberOfTickets = numberOfTickets;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getPhoneNr() {
        return phoneNr;
    }

    public void setPhoneNr(String phoneNr) {
        this.phoneNr = phoneNr;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
