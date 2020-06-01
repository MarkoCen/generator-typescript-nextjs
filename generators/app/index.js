const Generator = require('yeoman-generator');
const slugify = require('slugify');
const path = require('path');
const glob = require('glob');

class TypeScriptNextJSGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // add option to skip install
    this.option('skip-install');

    this.slugify = slugify;
  }

  async dirname() {
    if (this.options.dirname) {
      return true;
    }

    const response = await this.prompt([
      {
        type: 'input',
        name: 'dirname',
        message: 'Enter directory name',
      },
    ]);

    this.options.dirname = response.dirname;
  }

  async defineApp() {
    this.app = {};

    const answers = await this.prompt([
      { type: 'input', name: 'appName', message: 'Your project name', default: this.appname },
      { type: 'input', name: 'appVersion', message: 'Version', default: '0.1.0' },
      { type: 'input', name: 'appDesc', message: 'Description', default: '' },
      { type: 'input', name: 'appAuthor', message: 'Author', default: '' },
      { type: 'input', name: 'appLicense', message: 'License', default: 'UNLICENSED' },
      { type: 'confirm', name: 'appPrivate', message: 'Is private?', default: true },
      { type: 'input', name: 'appCDNPrefix', message: 'CDN Prefix', default: '' },
    ]);

    this.app.name = answers.appName;
    this.app.version = answers.appVersion;
    this.app.desc = answers.appDesc;
    this.app.author = answers.appAuthor;
    this.app.license = answers.appLicense;
    this.app.private = answers.appPrivate;
    this.app.cdnPrefix = answers.appCDNPrefix;
  }

  writing() {
    if (this.options.dirname) {
      this.destinationRoot(this.options.dirname);
      this.appname = this.options.dirname;
    }

    // shared environments files
    this.sourceRoot(path.join(__dirname, 'templates', 'shared'));
    glob.sync('**', { cwd: this.sourceRoot() }).forEach((file) => {
      this.fs.copyTpl(this.templatePath(file), this.destinationPath(file.replace(/^_/, '')), this);
    });

    // copy app files
    this.sourceRoot(path.join(__dirname, 'templates', `nextts`));
    this.fs.copyTpl(this.templatePath('.'), this.destinationPath('.'), this);
  }

  install() {
    if (!this.options['skip-install'])
      this.installDependencies({
        yarn: false,
        npm: true,
        bower: false,
      });
  }
}

module.exports = TypeScriptNextJSGenerator;
