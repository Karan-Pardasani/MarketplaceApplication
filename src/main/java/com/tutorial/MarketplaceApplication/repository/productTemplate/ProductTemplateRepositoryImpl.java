package com.tutorial.MarketplaceApplication.repository.productTemplate;

//import com.mongodb.client.MongoCollection;
//import com.mongodb.client.MongoDatabase;
import com.mongodb.client.result.InsertOneResult;
import com.tutorial.MarketplaceApplication.dto.product.ProductTemplateDTO;
import com.tutorial.MarketplaceApplication.entities.product.ProductTemplate;
//import com.tutorial.MarketplaceApplication.repository.DBConnection;
import org.bson.BsonDocument;
import org.bson.BsonInt64;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Repository;

import javax.print.Doc;
import java.time.Instant;
import java.util.Arrays;
import java.util.Date;
import java.util.Map;

@Repository
public class ProductTemplateRepositoryImpl{
//    public DBConnection dbConnection;

    private Environment env;

    @Autowired
    public ProductTemplateRepositoryImpl(Environment env){
        this.env = env;
    }

    public ProductTemplateDTO get(int id){
        return null;
    }

    public boolean update(Map<String, Object> updateHash) {
        return false;
    }

    public ProductTemplateDTO remove(int id) {
        return null;
    }

    public ObjectId create(ProductTemplate productTemplate) {
//        DBConnection dbConnection = new DBConnection(this.env);
//        MongoDatabase database = dbConnection.getMongoDatabase();
//        Bson command = new BsonDocument("ping", new BsonInt64(1));
//        Document commandResult = database.runCommand(command);
//        System.out.println("Pinged your deployment again!!. You successfully connected to MongoDB!");
//        MongoCollection<Document> collection = database.getCollection("people");
////        InsertOneResult result = collection.insertOne(productTemplate);
////        InsertOneResult result = collection.insertOne(new Document()
////                .append("_id", new ObjectId())
////                .append("name", new Document().append("first", "Alan").append("last", "Turing"))
////                .append("birth", Date.from(Instant.parse("1912-05-23T00:00:00.000+00:00")))
////                .append("death", Date.from(Instant.parse("1954-05-07T00:00:00.000+00:00")))
////                .append("contribs", Arrays.asList("Turing machine", "Turing test", "Turingery"))
////                .append("views", 1250000));
////        return result.getInsertedId().asObjectId().getValue();
        return new ObjectId("22");
    }
}
