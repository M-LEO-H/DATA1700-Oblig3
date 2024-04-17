package web_pro.data1700;

public class Purchase {
        String movie;
        String numberOfTickets;
        String fName;
        String lName;
        String phoneNumber;
        String email;



    public Purchase(String movie, String numberOfTickets, String fName, String lName, String phoneNumber, String email) {
        this.movie = movie;
        this.numberOfTickets = numberOfTickets;
        this.fName = fName;
        this.lName = lName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    public Purchase(){}

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
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Purchase{" +
                "movie='" + movie + '\'' +
                ", numberOfTickets='" + numberOfTickets + '\'' +
                ", fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
