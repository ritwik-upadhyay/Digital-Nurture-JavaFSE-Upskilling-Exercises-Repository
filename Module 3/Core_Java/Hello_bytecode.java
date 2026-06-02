public class Hello_bytecode {

    public void greet() {
        System.out.println("Hello World");
    }

    public static void main(String[] args) {

        Hello_bytecode h = new Hello_bytecode();

        h.greet();
    }
}