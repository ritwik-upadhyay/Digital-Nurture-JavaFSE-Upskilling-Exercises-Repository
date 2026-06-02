import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main10 {
    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Ritwik");
        names.add("Taylor");
        names.add("Ariana");
        names.add("Megha");
        names.add("Olivia");

        Collections.sort(names, (s1, s2) -> s1.compareTo(s2));

        System.out.println("Sorted List:");

        for (String name : names) {
            System.out.println(name);
        }
    }
}