const fs = require('fs');

// List all the filenames before renaming

getCurrentFilenames();

// Rename the file

fs.rename('config/default.json', 'config/local.json', (error) => {
if (error) {
	// Show the error
	console.log(error);
}
else {
	// List all the filenames after renaming
	console.log("\nFile Renamed\n");
	// List all the filenames after renaming
	getCurrentFilenames();
}
});

fs.rename('themes/default/default.json', 'config/default.json', (error) => {
  if (error) {
    // Show the error
    console.log(error);
  }
  else {
    // List all the filenames after renaming
    console.log("\nFile Renamed\n");
    // List all the filenames after renaming
    getCurrentFilenames();
  }
});

// Function to get current filenames
// in directory
function getCurrentFilenames() {
  console.log("Current filenames:");
  fs.readdirSync(__dirname).forEach(file => {
	  console.log(file);
  });
}
