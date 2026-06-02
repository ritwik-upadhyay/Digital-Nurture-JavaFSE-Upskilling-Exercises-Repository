import java.util.List;
import java.util.stream.Collectors;

// Record Definition
record Person(String name, int age) {}

public class Main12 {
    public static void main(String[] args) {

        // Creating Record Objects
        Person p1 = new Person("Ritwik", 21);
        Person p2 = new Person("Megha", 19);
        Person p3 = new Person("Taylor", 35);
        Person p4 = new Person("Ariana", 32);

        // Printing Records
        System.out.println("Person Records:");
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);
        System.out.println(p4);

        // Creating List of Records
        List<Person> people = List.of(p1, p2, p3, p4);

        // Filter people whose age is greater than or equal to 21
        List<Person> adults = people.stream()
                                    .filter(person -> person.age() >= 21)
                                    .collect(Collectors.toList());

        System.out.println("\nPeople aged 21 or above:");
        adults.forEach(System.out::println);
    }
}