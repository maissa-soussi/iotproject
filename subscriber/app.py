from flask import Blueprint , jsonify , request,Flask
from flask_cors import CORS,cross_origin
import paho.mqtt.client as mqtt
import paho.mqtt.subscribe as subscribe

#driver = GraphDatabase.driver( "bolt://localhost:7687",auth=basic_auth("neo4j", "123456"))
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/subscriber',methods=['GET'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def getTemp():
    topics = ['TEMPERATURE']
    msg = subscribe.simple(topics, hostname="broker.hivemq.com", retained=False, msg_count=1)
    temp = float(msg.payload)
    return jsonify([{'temperature': round(temp,2)}])


@app.route('/temperatures',methods=['GET'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def getTemps():
    topics = ['TEMPERATURE']
    msg = subscribe.simple(topics, hostname="broker.hivemq.com", retained=False, msg_count=10)
    json = []
    for a in msg:
        temp = float(a.payload)
        dict = {'temperature': temp}
        json.append(dict)
    return jsonify(json)