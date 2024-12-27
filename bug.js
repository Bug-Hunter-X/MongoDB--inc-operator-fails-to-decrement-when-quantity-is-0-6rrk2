```javascript
//Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{quantity:-1}});
//The above code will work perfectly fine for positive increment but will fail to decrement if the quantity is 0
```