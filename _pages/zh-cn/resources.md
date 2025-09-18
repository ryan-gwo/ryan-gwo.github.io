---
page_id: resources
layout: page
title: 资源
permalink: /resources/
description: 分享的材料和资源合集。
nav: true
nav_order: 9
display_categories: [astronomy-olympiad-papers, olympiad-study-materials]
horizontal: false
---

<!-- pages/resources.md -->
<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized resources -->
    {% for category in page.display_categories %}
      <a id="{{ site.data[site.active_lang].strings.resource_categories[category] }}" href=".#{{ site.data[site.active_lang].strings.resource_categories[category] }}">
        <h2 class="category">{{ site.data[site.active_lang].strings.resource_categories[category] }}</h2>
      </a>
      {% assign categorized_resources = site.resources | where: "category", category %}
      {% assign sorted_resources = categorized_resources | sort: "importance" %}
      <!-- Generate cards for each resource -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {% for resource in sorted_resources %}
              {% include projects_horizontal.liquid %}
            {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-3">
          {% for resource in sorted_resources %}
            {% include projects.liquid %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}
  {% else %}
    <!-- Display resources without categories -->
    {% assign sorted_resources = site.resources | sort: "importance" %}
    <!-- Generate cards for each resource -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for resource in sorted_resources %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for resource in sorted_resources %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>