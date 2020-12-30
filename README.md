# Redmine PlantUML Macro Plugin

This plugin is modified from https://github.com/cloudrainstar/redmine_mermaid_macro, which is a fork of https://github.com/eXolnet/redmine_mermaid_macro, which is another fork of https://github.com/taikii/redmine_mermaid_macro.

This plugin adds a `plantuml` graph macro to wiki formated fields.
This plugin can be setup with GET or POST requests. POST requests require an external server set up that accepts PlantUML POST requests, as the online plantuml does not accept POST requests.

About PlantUML: https://plantuml.com/

## Example

```
{{plantuml
@startuml
Bob -> Alice : hello
@enduml
}}
```

![Example](doc/images/example.png)

## Installation

1. Clone or copy files into the Redmine plugins directory
   ```
   git clone https://github.com/cloudrainstar/redmine_plantuml_macro.git plugins/redmine_plantuml_macro
   ```
2. Restart Redmine

## Configration

You can configure the external `plantuml` server URL on `Administration -> Plugins` page.
Default value is PlantUML Online Server, but this will only work for GET requests.
https://www.plantuml.com/plantuml/svg/

## License

[MIT](LICENSE)
