var generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  writing: function() {
    this.fs.copy(this.sourceRoot(), this.destinationRoot())
    this.fs.copy(this.templatePath('.*'), this.destinationRoot())
  }
})
