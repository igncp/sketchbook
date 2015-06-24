require 'compass/import-once/activate'

css_dir = "assets/css"
sass_dir = "assets/scss"
output_style = :compressed

require "fileutils"

# Add min suffix to the file

on_stylesheet_saved do |file|
  if File.exists?(file)
    filename = File.basename(file, File.extname(file))
    File.rename(file, css_dir + "/" + filename + ".min" + File.extname(file))
  end
end