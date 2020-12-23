class PlantUMLMacroHookListener < Redmine::Hook::ViewListener
  include ActionView::Helpers::TagHelper
  include ActionView::Helpers::JavaScriptHelper

  def view_layouts_base_body_bottom(context={})
    html = ""
    html << javascript_tag('class PlantUMLGraph extends HTMLElement{constructor(){super();const t=document.createElement("div");var e=new XMLHttpRequest;e.open("POST","'+Setting.plugin_redmine_plantuml_macro['plantuml_url']+'",!0),e.onload=function(n){4===e.readyState&&(200===e.status?t.innerHTML=e.responseText:t.innerHTML=e.statusText)},e.send(this.textContent),this.attachShadow({mode:"open"}).appendChild(t)}}customElements.define("plantuml-graph",PlantUMLGraph);')
    return html
  end

end
