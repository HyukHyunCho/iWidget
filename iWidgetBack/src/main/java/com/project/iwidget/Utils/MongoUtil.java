package com.project.iwidget.Utils;

import com.project.iwidget.Config.MongoConfig;
import org.bson.Document;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;

public class MongoUtil {
  
  public String findall(String collection_name) {
    MongoConfig mongoDB = new MongoConfig();
    MongoDatabase db = mongoDB.conn();
    MongoCollection<Document> collection = db.getCollection(collection_name);//"openWeatherCity"
        
    MongoCursor<Document> cursor = collection.find().iterator();
    System.out.println(cursor.next().toJson());
    return null;
  }
}
