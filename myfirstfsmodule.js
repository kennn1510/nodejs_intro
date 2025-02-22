// Import modules
var http = require("http");
var fs = require("fs");

// Create http server using Node.js
http
  .createServer(function (req, res) {
    // Read file using file system module method readFile()
    fs.readFile("demofile1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

// Create file using appendFile()
fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
// Create file using open()
fs.open("mynewfile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});
// Create file using writeFile()
fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

// Update file using appendFile()
fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});
// Update file using writeFile()
fs.writeFile("mynewfile3.txt", "this is my text", function (err) {
  if (err) throw err;
  console.log("Replaced!");
});

// Delete file using unlink()
fs.unlink("mynewfile2.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});

// Rename file using rename()
fs.rename("mynewfile1.txt", "myrenamefile.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
