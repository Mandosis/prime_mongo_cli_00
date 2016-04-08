// Find documents that have awards.
db.bios.find({"awards": { $exists: true}}).pretty();

// Find documents that don't have awards.
db.bios.find({"awards": {$exists: false}}).pretty();

// Find documents that have contribs for OOP or UNIX.
db.bios.find({ "contribs": { $in:  [ "OOP", "UNIX" ]}}).pretty()

// Find documents with "Turing Award" awards.
db.bios.find({awards : { $elemMatch: {award : "Turing Award"} } } ).pretty();

// Find documents with IDs between 3 and 7.
db.bios.find({"_id": { $gt: 3, $lt: 7}}).pretty()

// Find documents with awards that were awarded before the year 2000.
db.bios.find({"awards": {$elemMatch: {"year": {$lt: 2000}}}}).pretty();

// Find documents with birth dates, but no death dates.
db.bios.find({ "birth": {$exists: true}, "death": {$exists: false}}).pretty();
