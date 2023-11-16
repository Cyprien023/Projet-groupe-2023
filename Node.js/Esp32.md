```javascript
#include <HTTPClient.h>

const char* serverUrl = "http://localhost:3000/data";

void setup() {
  // Initialisez votre capteur ici

  // Initialisez la connexion Wi-Fi
  WiFi.begin("SSID", "mot_de_passe");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connexion au Wi-Fi...");
  }
  Serial.println("Connecté au Wi-Fi");

  // Envoie des données au serveur
  sendDataToServer();
}

void loop() {
  // Votre code loop ici
}

void sendDataToServer() {
  HTTPClient http;

  // Initialisez les données du capteur (à adapter selon votre capteur)
  String sensorData = "{'temperature': 25.5, 'humidity': 50}";

  http.begin(serverUrl);
  http.addHeader("Content-Type", "application/json");

  int httpResponseCode = http.POST(sensorData);

  if (httpResponseCode > 0) {
    Serial.print("Réponse du serveur: ");
    Serial.println(http.getString());
  } else {
    Serial.print("Erreur lors de la requête HTTP. Code d'erreur: ");
    Serial.println(httpResponseCode);
  }

  http.end();
}

```