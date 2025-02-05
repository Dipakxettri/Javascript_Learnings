#include <SoftwareSerial.h>

SoftwareSerial BT(10, 11);  // Bluetooth Module RX | TX

#define ENA 9   // Motor A speed control
#define ENB 3   // Motor B speed control
#define IN1 6
#define IN2 7
#define IN3 8
#define IN4 5

void setup() {
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);
    pinMode(IN3, OUTPUT);
    pinMode(IN4, OUTPUT);
    pinMode(ENA, OUTPUT);
    pinMode(ENB, OUTPUT);

    BT.begin(9600);
    Serial.begin(9600);
}

void loop() {
    if (BT.available()) {
        char command = BT.read();
        Serial.println(command);

        switch (command) {
            case 'F':  // Forward
                moveForward();
                break;
            case 'B':  // Backward
                moveBackward();
                break;
            case 'L':  // Left
                turnLeft();
                break;
            case 'R':  // Right
                turnRight();
                break;
            case 'S':  // Stop
                stopMotors();
                break;
        } qqqqqqqqqq
    }
}

void moveForward() {
    analogWrite(ENA, 150);
    analogWrite(ENB, 150);
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
}

void moveBackward() {
    analogWrite(ENA, 150);
    analogWrite(ENB, 150);
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
}

void turnLeft() {
    analogWrite(ENA, 150);
    analogWrite(ENB, 150);
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
}

void turnRight() {
    analogWrite(ENA, 150);
    analogWrite(ENB, 150);
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
}

void stopMotors() {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
}











