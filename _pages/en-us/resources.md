---
page_id: resources
layout: page
title: Resources
permalink: /resources/
description: Downloadable files and resources.
nav: true
nav_order: 7
---

<!-- pages/resources.md -->
<div class="resources">
  <h2>Downloadable Resources</h2>
  
  <div class="row">
    <div class="col-md-12">
      <p>Here you can find various downloadable files and resources related to my work and research. Click on category headers to expand or collapse the relevant content.</p>
    </div>
  </div>

  <!-- Competition Materials -->
  <div class="accordion mt-4" id="resourcesAccordion">
    
    <!-- Competition Materials Main Category -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="competitionsHeading">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#competitionsCollapse" aria-expanded="true" aria-controls="competitionsCollapse">
          <i class="fas fa-trophy me-2"></i> Competition Materials
        </button>
      </h2>
      <div id="competitionsCollapse" class="accordion-collapse collapse show" aria-labelledby="competitionsHeading" data-bs-parent="#resourcesAccordion">
        <div class="accordion-body">
          
          <!-- IOAA Subcategory -->
          <div class="accordion" id="ioaaAccordion">
            <div class="accordion-item">
              <h3 class="accordion-header" id="ioaaHeading">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ioaaCollapse" aria-expanded="false" aria-controls="ioaaCollapse">
                  <i class="fas fa-globe me-2"></i> International Astronomy Olympiad (IOAA)
                </button>
              </h3>
              <div id="ioaaCollapse" class="accordion-collapse collapse" aria-labelledby="ioaaHeading" data-bs-parent="#ioaaAccordion">
                <div class="accordion-body">
                  
                  <!-- 2024 -->
                  <h5><i class="fas fa-calendar-alt me-2"></i>2024</h5>
                  <ul class="list-unstyled">
                    <li><a href="/assets/pdf/en-us/IOAA_2024_Theory.pdf" target="_blank"><i class="fas fa-file-pdf text-danger me-2"></i> Theory Problems</a></li>
                    <li><a href="/assets/pdf/en-us/IOAA_2024_Data_Analysis.pdf" target="_blank"><i class="fas fa-file-pdf text-warning me-2"></i> Data Analysis Problems</a></li>
                    <li><a href="/assets/pdf/en-us/IOAA_2024_Observation.pdf" target="_blank"><i class="fas fa-file-pdf text-info me-2"></i> Observation Problems</a></li>
                    <li><a href="/assets/pdf/en-us/IOAA_2024_Planetarium.pdf" target="_blank"><i class="fas fa-file-pdf text-success me-2"></i> Planetarium Problems</a></li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
          
          <!-- CNAO Subcategory -->
          <div class="accordion mt-3" id="cnaoAccordion">
            <div class="accordion-item">
              <h3 class="accordion-header" id="cnaoHeading">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cnaoCollapse" aria-expanded="false" aria-controls="cnaoCollapse">
                  <i class="fas fa-star me-2"></i> China National Astronomy Olympiad (CNAO)
                </button>
              </h3>
              <div id="cnaoCollapse" class="accordion-collapse collapse" aria-labelledby="cnaoHeading" data-bs-parent="#cnaoAccordion">
                <div class="accordion-body">
                  <p class="text-muted">CNAO materials are primarily in Chinese. Please refer to the Chinese versions of this site for detailed content.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <!-- Study Notes -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="notesHeading">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#notesCollapse" aria-expanded="false" aria-controls="notesCollapse">
          <i class="fas fa-book me-2"></i> Study Notes
        </button>
      </h2>
      <div id="notesCollapse" class="accordion-collapse collapse" aria-labelledby="notesHeading" data-bs-parent="#resourcesAccordion">
        <div class="accordion-body">
          <p class="text-muted">Study notes will be uploaded progressively...</p>
          <!-- Add study notes here -->
        </div>
      </div>
    </div>

    <!-- Academic Papers -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="papersHeading">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#papersCollapse" aria-expanded="false" aria-controls="papersCollapse">
          <i class="fas fa-file-alt me-2"></i> Academic Papers
        </button>
      </h2>
      <div id="papersCollapse" class="accordion-collapse collapse" aria-labelledby="papersHeading" data-bs-parent="#resourcesAccordion">
        <div class="accordion-body">
          <p class="text-muted">Academic papers will be uploaded progressively...</p>
          <!-- Add academic papers here -->
        </div>
      </div>
    </div>

    <!-- Code Projects -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="codeHeading">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#codeCollapse" aria-expanded="false" aria-controls="codeCollapse">
          <i class="fas fa-code me-2"></i> Code Projects
        </button>
      </h2>
      <div id="codeCollapse" class="accordion-collapse collapse" aria-labelledby="codeHeading" data-bs-parent="#resourcesAccordion">
        <div class="accordion-body">
          <p class="text-muted">Code projects will be uploaded progressively...</p>
          <!-- Add code projects here -->
        </div>
      </div>
    </div>

    <!-- Presentation Documents -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="presentationsHeading">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#presentationsCollapse" aria-expanded="false" aria-controls="presentationsCollapse">
          <i class="fas fa-presentation-screen me-2"></i> Presentation Documents
        </button>
      </h2>
      <div id="presentationsCollapse" class="accordion-collapse collapse" aria-labelledby="presentationsHeading" data-bs-parent="#resourcesAccordion">
        <div class="accordion-body">
          <p class="text-muted">Presentation documents will be uploaded progressively...</p>
          <!-- Add presentation documents here -->
        </div>
      </div>
    </div>

  </div>
</div>

<style>
.accordion-button {
  font-weight: 500;
}
.accordion-button:not(.collapsed) {
  background-color: var(--global-bg-color);
  color: var(--global-text-color);
}
.list-unstyled a {
  text-decoration: none;
  padding: 0.25rem 0;
  display: inline-block;
}
.list-unstyled a:hover {
  text-decoration: underline;
}
</style>