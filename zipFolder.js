import fs from "fs";
import path from "path";
import archiver from "archiver";
import inquirer from "inquirer";
import { fileURLToPath } from "url";

// Define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the 'methods' folder
const methodsPath = path.join(__dirname, "methods");

// Get all folders in the 'methods' directory
const getFolders = () => {
  return fs
    .readdirSync(methodsPath)
    .filter((file) => fs.statSync(path.join(methodsPath, file)).isDirectory());
};

// Prompt user to select a folder
const promptForFolder = async () => {
  const folders = getFolders();
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "folder",
      message: "Which folder would you like to zip?",
      choices: folders,
    },
  ]);
  return answer.folder;
};

// Zip the selected folder
const zipFolder = async (folderName) => {
  const folderPath = path.join(methodsPath, folderName);
  const output = fs.createWriteStream(
    path.join(__dirname, "zip-files", `${folderName}.zip`)
  );

  const archive = archiver("zip", {
    zlib: { level: 9 }, // Best compression
  });

  archive.on("error", (err) => {
    throw err;
  });

  archive.pipe(output);
  archive.directory(folderPath, false);
  archive.finalize();
};

// Main function
const main = async () => {
  try {
    const selectedFolder = await promptForFolder();
    console.log(`Zipping folder: ${selectedFolder}`);
    await zipFolder(selectedFolder);
    console.log(
      `${selectedFolder}.zip has been created in the zip-files folder.`
    );
  } catch (error) {
    console.error("Error:", error);
  }
};

main();

