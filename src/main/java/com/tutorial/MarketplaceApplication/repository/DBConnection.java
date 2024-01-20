package com.tutorial.MarketplaceApplication.repository;

// This class will handle setting up connection and loading all the collections

import com.mongodb.ConnectionString;
import static com.mongodb.client.model.Filters.eq;
import com.mongodb.MongoClientSettings;
import com.mongodb.MongoException;
//import com.mongodb.client.MongoClient;
//import com.mongodb.client.MongoClients;
//import com.mongodb.client.MongoCollection;
//import com.mongodb.client.MongoDatabase;
//import com.mongodb.connection.ConnectionPoolSettings;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.BsonDocument;
import org.bson.BsonInt64;
import org.bson.Document;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.bson.conversions.Bson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

//@Getter
//@Setter
//@AllArgsConstructor
//public class DBConnection {
//
//    public ConnectionString connectionString;
//
//    public MongoDatabase mongoDatabase;
//
//    public MongoClient mongoClient;
//
//
//    public void closeConnection(){
//        this.mongoClient.close();
//    }
//
//    public void createDatabaseConnection(@Value("${mongodb.uri}") String connectionString, @Value("${mongodb.database}") String database){
//        this.connectionString = new ConnectionString(connectionString);
//        CodecRegistry pojoCodecRegistry = fromProviders(PojoCodecProvider.builder().automatic(true).build());
//        CodecRegistry codecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(), pojoCodecRegistry);
//        Integer maxIdleTime = 10000;
//        MongoClientSettings clientSettings = MongoClientSettings.builder()
//                .applyConnectionString(this.connectionString)
//                .codecRegistry(codecRegistry)
//                .build();
//        try(MongoClient mongoClient = MongoClients.create(clientSettings)){
//            this.mongoClient = mongoClient;
//            this.mongoDatabase = mongoClient.getDatabase(database);
//            Bson command = new BsonDocument("ping", new BsonInt64(1));
//            Document commandResult = this.mongoDatabase.runCommand(command);
//            System.out.println("Pinged your deployment. You successfully connected to MongoDB!");
//        } catch(MongoException me){
//            System.err.println(me);
//        }
//    }
//
////    public DBConnection(String connectionString, String database){
////        this.createDatabaseConnection(connectionString, database);
////    }
////
//    public DBConnection(Environment env){
//        String connectionString = env.getProperty("mongodb.uri");
//        String database = env.getProperty("mongodb.database");
//        this.createDatabaseConnection(connectionString, database);
//    }
//}
//
//// use forName method to get the class with the className as string argument