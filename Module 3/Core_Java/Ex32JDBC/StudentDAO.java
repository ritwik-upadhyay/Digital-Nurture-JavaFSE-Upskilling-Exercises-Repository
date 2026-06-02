import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class StudentDAO {

    private static final String URL =
            "jdbc:mysql://localhost:3306/studentdb";

    private static final String USER = "root";
    private static final String PASSWORD = "YOUR_PASSWORD";

    // Insert Student
    public void insertStudent(int id, String name, int age) {

        String sql =
                "INSERT INTO students(id,name,age) VALUES(?,?,?)";

        try (
                Connection con =
                        DriverManager.getConnection(
                                URL, USER, PASSWORD);

                PreparedStatement ps =
                        con.prepareStatement(sql)
        ) {

            ps.setInt(1, id);
            ps.setString(2, name);
            ps.setInt(3, age);

            int rows = ps.executeUpdate();

            System.out.println(
                    rows + " record inserted."
            );

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Update Student
    public void updateStudent(int id,
                              String newName,
                              int newAge) {

        String sql =
                "UPDATE students SET name=?, age=? WHERE id=?";

        try (
                Connection con =
                        DriverManager.getConnection(
                                URL, USER, PASSWORD);

                PreparedStatement ps =
                        con.prepareStatement(sql)
        ) {

            ps.setString(1, newName);
            ps.setInt(2, newAge);
            ps.setInt(3, id);

            int rows = ps.executeUpdate();

            System.out.println(
                    rows + " record updated."
            );

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

public class Main14 {

    public static void main(String[] args) {

        StudentDAO dao = new StudentDAO();

        dao.insertStudent(
                101,
                "Ritwik",
                21
        );

        dao.updateStudent(
                101,
                "Ritwik Upadhyay",
                22
        );
    }
}