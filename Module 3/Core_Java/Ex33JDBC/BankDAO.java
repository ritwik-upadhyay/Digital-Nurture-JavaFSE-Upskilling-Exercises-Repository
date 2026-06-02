import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class BankDAO {

    private static final String URL =
            "jdbc:mysql://localhost:3306/studentdb";

    private static final String USER = "root";
    private static final String PASSWORD = "YOUR_PASSWORD";

    public void transferMoney(
            int fromAccount,
            int toAccount,
            double amount) {

        Connection con = null;

        try {

            con = DriverManager.getConnection(
                    URL,
                    USER,
                    PASSWORD
            );

            // Start Transaction
            con.setAutoCommit(false);

            String debitQuery =
                    "UPDATE accounts " +
                    "SET balance = balance - ? " +
                    "WHERE account_id = ?";

            PreparedStatement debitStmt =
                    con.prepareStatement(debitQuery);

            debitStmt.setDouble(1, amount);
            debitStmt.setInt(2, fromAccount);

            debitStmt.executeUpdate();

            String creditQuery =
                    "UPDATE accounts " +
                    "SET balance = balance + ? " +
                    "WHERE account_id = ?";

            PreparedStatement creditStmt =
                    con.prepareStatement(creditQuery);

            creditStmt.setDouble(1, amount);
            creditStmt.setInt(2, toAccount);

            creditStmt.executeUpdate();

            // Save changes permanently
            con.commit();

            System.out.println(
                    "Transaction Successful."
            );

        } catch (Exception e) {

            try {

                if (con != null) {
                    con.rollback();
                }

                System.out.println(
                        "Transaction Failed. Rollback Executed."
                );

            } catch (Exception ex) {
                ex.printStackTrace();
            }

        } finally {

            try {

                if (con != null) {
                    con.close();
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}