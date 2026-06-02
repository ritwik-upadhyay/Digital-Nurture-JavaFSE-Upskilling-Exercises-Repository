// com.utils/module-info.java
module com.utils {
    exports com.utils;
}

// com.utils/Utility.java
package com.utils;

public class Utility {
    public static void greet() {
        System.out.println("Hello from Utility Module!");
    }
}

// com.greetings/module-info.java
module com.greetings {
    requires com.utils;
}

// com.greetings/Main.java
package com.greetings;

import com.utils.Utility;

public class Main15 {

    public static void main(String[] args) {
        Utility.greet();
    }
}