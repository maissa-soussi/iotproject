import paho.mqtt.client as mqtt
from random import randrange, uniform
import time

#hivemq broker connection
mqttBroker = "broker.hivemq.com"
client = mqtt.Client("Temperature_Outside")
client.connect(mqttBroker)

#publishing temperature
while True:
    randNumber = uniform(0.0, 50.0)
    # topic: "TEMPERATURE"
    client.publish("TEMPERATURE", randNumber)
    print("Temperature outside : " + str(randNumber))
    time.sleep(0.1)
