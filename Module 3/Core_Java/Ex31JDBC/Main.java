import java.sql.*;

public class Main {

    public static void main(String[] args) {

        try {

            // Connect to database
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/studentdb",
                    "root",
                    "password"
            );

            // Create statement
            Statement stmt = con.createStatement();

            // Execute query
            ResultSet rs = stmt.executeQuery(
                    "SELECT * FROM students"
            );

            // Display data
            while (rs.next()) {

                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");

                System.out.println(
                        "ID: " + id +
                        ", Name: " + name +
                        ", Age: " + age
                );
            }

            // Close resources
            rs.close();
            stmt.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}