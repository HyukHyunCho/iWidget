package com.project.iwidget.Config;

import java.util.Arrays;

import com.mongodb.MongoClientSettings;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;


import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;


@Configuration
public class MongoConfig {
    
    @Value("${spring.data.mongodb.host}")
    private String host;

    @Value("${spring.data.mongodb.port}")
    private int port;

    @Value("${spring.data.mongodb.database}")
    private String database;

    @Value("${spring.data.mongodb.username}")
    private String username;

    @Value("${spring.data.mongodb.password}")
    private String password;



    public MongoDatabase conn() {
        MongoCredential credential = MongoCredential.createCredential(username,
                                                                      database,
                                                                      password.toCharArray());
                                                    
        MongoClient mongoClient = MongoClients.create(MongoClientSettings.builder().applyToClusterSettings(
                                         builder -> builder.hosts(Arrays.asList(new ServerAddress(host, port)))
                                         ).credential(credential).build());
                                                        
        MongoDatabase mongo = mongoClient.getDatabase(database);

        return mongo;
       
    }
    
    // public JSONArray findall(String collection_name) {
    //     MongoCollection<Document> collection = database.getCollection(collection_name);//"openWeatherCity"
        
    //     MongoCursor<Document> cursor = collection.find().iterator();

    //     return cursorToList(cursor);
    // }

    // private JSONArray cursorToList(MongoCursor<Document> cursor){
    //     // List<Object> result = new ArrayList<>();
    //     JSONArray result = new JSONArray();
        
    //     try {
    //         while (cursor.hasNext()) {
    //             // result.add(cursor.next().toJson());
    //             JSONObject obj = new JSONObject(cursor.next().toJson());

    //             result.put(obj);
    //         }

    //     } finally {
    //             cursor.close();
    //     }        
    //     return result;
    // }
    
}