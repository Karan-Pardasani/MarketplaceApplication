package com.tutorial.MarketplaceApplication.repository;

// This class will handle setting up connection and loading all the collections

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;
@Component
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DBConnection {

    public ConnectionString connectionString;

    public MongoDatabase mongoDatabase;


    @Autowired
    private Environment env;

    public void createDatabaseConnection(@Value("${mongodb.uri}") String connectionString, @Value("${mongodb.database}") String database){
        this.connectionString = new ConnectionString(connectionString);
        CodecRegistry pojoCodecRegistry = fromProviders(PojoCodecProvider.builder().automatic(true).build());
        CodecRegistry codecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(), pojoCodecRegistry);
        MongoClientSettings clientSettings = MongoClientSettings.builder()
                .applyConnectionString(this.connectionString).codecRegistry(codecRegistry).build();
        try(MongoClient mongoClient = MongoClients.create(clientSettings)){
            this.mongoDatabase = mongoClient.getDatabase(database);
        }
    }

//    public DBConnection(String connectionString, String database){
//        this.createDatabaseConnection(connectionString, database);
//    }
//
//    public DBConnection(){
//        String connectionString = this.env.getProperty("mongodb.uri");
//        String database = this.env.getProperty("mongodb.database");
//        this.createDatabaseConnection(connectionString, database);
//    }
}

// use forName method to get the class with the className as string argument