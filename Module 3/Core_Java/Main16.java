import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

public class Main16 {

    public void greet() {
        System.out.println("Hello from Reflection!");
    }

    public void display(String name) {
        System.out.println("Welcome " + name);
    }

    public static void main(String[] args) {

        try {

            // Load class dynamically
            Class<?> cls = Class.forName("Main");

            // Create object dynamically
            Object obj = cls.getDeclaredConstructor().newInstance();

            // Print all methods
            Method[] methods = cls.getDeclaredMethods();

            System.out.println("Methods in Main Class:");

            for (Method method : methods) {

                System.out.println("\nMethod Name: "
                        + method.getName());

                Parameter[] params =
                        method.getParameters();

                for (Parameter p : params) {

                    System.out.println(
                            "Parameter Type: "
                            + p.getType().getSimpleName()
                    );
                }
            }

            // Invoke greet()
            Method greetMethod =
                    cls.getDeclaredMethod("greet");

            greetMethod.invoke(obj);

            // Invoke display(String)
            Method displayMethod =
                    cls.getDeclaredMethod(
                            "display",
                            String.class
                    );

            displayMethod.invoke(
                    obj,
                    "Ritwik"
            );

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}