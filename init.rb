Redmine::Plugin.register :redmine_plantuml_macro do
  require 'plantuml_macro_hook'

  name 'Redmine PlantUML Macro plugin'
  author 'Ken Liao'
  description 'Add plantuml graphs to your wiki through an external server.'
  version '1.0.0'
  url 'https://github.com/cloudrainstar/redmine_plantuml_macro'
  author_url 'https://cloudrainstar.github.io'

  settings :default => { 'plantuml_url' => 'https://www.plantuml.com/plantuml/svg/', 'plantuml_method' => 'GET' },
           :partial => 'settings/redmine_plantuml_macro_settings'

  Redmine::WikiFormatting::Macros.register do
    desc "Add plantuml graphs to your wiki. Example:\n\n" +
         "{{plantuml\n" +
         "@startuml;\n" +
         "Bob -> Alice : hello;\n" +
         "@enduml;\n" +
         "}}"
    macro :plantuml do |obj, args, text|
      divid = "plantuml_" + SecureRandom.urlsafe_base64(8)
      out = ''.html_safe
      out << content_tag("plantuml-graph", text, id: divid, url: Setting.plugin_redmine_plantuml_macro['plantuml_url'], method: Setting.plugin_redmine_plantuml_macro['plantuml_method'])
      out
    end
  end
end
