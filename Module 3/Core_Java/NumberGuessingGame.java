import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {
    public static void main(String[] args) {

        Random random = new Random();
        Scanner sc = new Scanner(System.in);

        int secretNumber = random.nextInt(100) + 1; // 1 to 100
        int guess;

        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("I have selected a number between 1 and 100.");

        do {
            System.out.print("Enter your guess: ");
            guess = sc.nextInt();

            if (guess > secretNumber) {
                System.out.println("Too High! Try Again.");
            } else if (guess < secretNumber) {
                System.out.println("Too Low! Try Again.");
            } else {
                System.out.println("Congratulations! You guessed the correct number.");
            }

        } while (guess != secretNumber);

        sc.close();
    }
}