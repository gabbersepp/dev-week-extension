const spawn = require('child_process').spawn;
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const cwd = __dirname;
const extensionRootDir = path.join(cwd, "..", "..");
const devweekBasePath = path.join(extensionRootDir, "..", "dev-week-app");
const extensionBuildDir = path.join(extensionRootDir, "build");

// build dev-week-app
const devweekappBuild = spawn("npm.cmd", ["run", "build"], { cwd: devweekBasePath, shell: true });
devweekappBuild.on("close", code => {
    if (code !== 0) {
        console.error(`dev-week-app Build fails with code: ${code}`);
        process.exitCode = 1;
    } else {
        console.info(`dev-week-app Build ends with code: ${code}`);
        ensureOutDir();
        fetchApp();
        fetchExtension();
    }
});

function ensureOutDir() {
    if(!fs.existsSync(path.join(extensionBuildDir, "out/dev-week-app"))) {
        fs.mkdirSync(path.join(extensionBuildDir, "out/dev-week-app"), { recursive: true });
    }
}

function fetchApp() {
    const sourceDir = path.join(devweekBasePath, "dist", "js", "*.js");
    const targetDir = path.join(extensionBuildDir, "out/dev-week-app", "app.js");

    glob(sourceDir, {}, function (er, files) {
        fs.copyFileSync(files[0], targetDir);
    });
}

function fetchExtension() {
    const sourceDir = path.join(extensionRootDir, "src", "**/*.*");
    const targetDir = path.join(extensionBuildDir, "out/dev-week-app");

    if(!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    glob(sourceDir, {}, (err, files) => {
        files.forEach(file => {
            const dir = path.dirname(file);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            fs.copyFileSync(file, path.join(targetDir, path.basename(file)));
        });
    });
}