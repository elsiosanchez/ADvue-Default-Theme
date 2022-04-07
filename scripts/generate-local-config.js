const { sh } = require('tasksfile')
const config = require('../../../../config/default.json')
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

/**
 * Change view directory ADempiere
 */
// Change directory in the Browser
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/Browser/index.vue`)
// Change directory in the Form
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/Form/index.vue`)
// Change directory in the ImportExcel
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/ImportExcel/index.vue`)
// Change directory in the Process
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/Process/index.vue`)
// Change directory in the ProcessActivity
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/ProcessActivity/index.vue`)
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/ProcessActivity/processActivity.js`)
// Change directory in the Report
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/Report/index.vue`)
// Change directory in the ReportViewer
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/ReportViewer/index.vue`)
// Change directory in the Summary
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/Summary/index.vue`)
// Change directory in the Workflow
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/Workflow/index.vue`)
// Change directory in the Test
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/Test/index.vue`)
// Change directory in the window
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/Window/index.vue`)
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/Window/MultiTabWindow.vue`)
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/Window/windowLogicComponent.vue`)
sh(`sed -i "s|/components/|${config.theme}|g" src/views/ADempiere/Window/StandardWindow.vue`)
/**
 * Change view directory dashboard
 */
// Change directory in the Test
sh(`sed -i "s|/components/|${config.theme}|g" src/views/dashboard/admin/index.vue`)
