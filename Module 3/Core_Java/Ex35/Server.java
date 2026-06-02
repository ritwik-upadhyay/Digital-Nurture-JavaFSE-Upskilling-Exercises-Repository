import java.io.*;
import java.net.*;

public class Server {

    public static void main(String[] args) {

        try {

            ServerSocket serverSocket =
                    new ServerSocket(5000);

            System.out.println(
                    "Server is waiting for connection..."
            );

            Socket socket =
                    serverSocket.accept();

            System.out.println(
                    "Client Connected!"
            );

            BufferedReader in =
                    new BufferedReader(
                            new InputStreamReader(
                                    socket.getInputStream()
                            )
                    );

            PrintWriter out =
                    new PrintWriter(
                            socket.getOutputStream(),
                            true
                    );

            BufferedReader keyboard =
                    new BufferedReader(
                            new InputStreamReader(
                                    System.in
                            )
                    );

            String message;

            while (true) {

                message = in.readLine();

                System.out.println(
                        "Client: " + message
                );

                System.out.print(
                        "Server: "
                );

                String reply =
                        keyboard.readLine();

                out.println(reply);

                if (reply.equalsIgnoreCase("exit")) {
                    break;
                }
            }

            socket.close();
            serverSocket.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}