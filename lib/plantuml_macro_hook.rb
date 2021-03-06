class PlantUMLMacroHookListener < Redmine::Hook::ViewListener
  include ActionView::Helpers::TagHelper
  include ActionView::Helpers::JavaScriptHelper

  def view_layouts_base_body_bottom(context={})
    html = ""
    html << javascript_include_tag("https://cdn.rawgit.com/jmnote/plantuml-encoder/d133f316/dist/plantuml-encoder.min.js")
    html << javascript_include_tag(:plantuml, :plugin => 'redmine_plantuml_macro')
    return html
  end

end
