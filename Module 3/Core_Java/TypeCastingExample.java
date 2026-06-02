public class TypeCastingExample {
    public static void main(String[] args) {

        // Double to Int (Narrowing Casting)
        double doubleValue = 45.78;
        int intValue = (int) doubleValue;

        // Int to Double (Widening Casting)
        int number = 25;
        double convertedDouble = (double) number;

        System.out.println("Original Double Value: " + doubleValue);
        System.out.println("Double casted to Int: " + intValue);

        System.out.println("Original Int Value: " + number);
        System.out.println("Int casted to Double: " + convertedDouble);
    }
}
