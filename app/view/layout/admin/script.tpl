{% macro import(value) %}
  <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.slim.min.js"></script>
  {% if value === "login" %}
    <script src="/public/js/admin/login.js"></script>
  {% endif %}
{% endmacro %}
