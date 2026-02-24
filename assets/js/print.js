// Load and display info
async function loadInfos() {
  try {
    const response = await fetch('assets/data/infos.json');
    const data = await response.json();
    
    document.querySelector('.name').textContent = data.firstName + ' ' + data.lastName;
    document.querySelector('.job-title').textContent = data.position;
    document.querySelector('.location').textContent = '📍 ' + data.city;
    document.querySelector('.education').textContent = '🎓 ' + data.degree;
    
    if (data.description) {
      document.querySelector('.description').textContent = data.description;
    }
    
    if (data.photo) {
      document.querySelector('.profile-photo').src = data.photo;
    }
  } catch (error) {
    console.error('Error loading infos:', error);
  }
}

// Load competences
async function loadCompetences() {
  try {
    const response = await fetch('assets/data/competences.json');
    const competences = await response.json();
    const container = document.querySelector('.competences-grid');
    
    // Function to convert level to dots out of 5
    const getDots = (level) => {
      let dots = '';
      for (let i = 1; i <= 5; i++) {
        const filledClass = i <= level ? ' filled' : '';
        dots += `<span class="level-dot${filledClass}"></span>`;
      }
      return dots;
    };

    const html = competences.map(comp => `
      <div class="competence-item">
        <div class="competence-name">${comp.name}</div>
        <div class="competence-level">${getDots(comp.level)}</div>
      </div>
    `).join('');
    
    container.innerHTML = html;
  } catch (error) {
    console.error('Error loading competences:', error);
  }
}

// Load experiences
async function loadExperiences() {
  try {
    const response = await fetch('assets/data/experiences.json');
    const experiences = await response.json();
    const container = document.querySelector('.experiences-list');
    
    // Prendre seulement les 4 dernières expériences
    const recentExperiences = experiences.slice(0, 4);
    
    const html = recentExperiences.map(exp => `
      <div class="item">
        <div class="item-header">
          <div>
            <div class="item-title">${exp.title}</div>
            <div class="item-subtitle">${exp.company}</div>
          </div>
          <div class="item-year">${exp.year}</div>
        </div>
        <div class="item-description">${exp.description}</div>
      </div>
    `).join('');
    
    container.innerHTML = html;
  } catch (error) {
    console.error('Error loading experiences:', error);
  }
}

// Load diplomes
async function loadDiplomes() {
  try {
    const response = await fetch('assets/data/diplomes.json');
    const diplomes = await response.json();
    const container = document.querySelector('.diplomes-list');
    
    const html = diplomes.map(d => `
      <div class="item">
        <div class="item-header">
          <div>
            <div class="item-title">${d.title}</div>
            <div class="item-subtitle">${d.school}</div>
          </div>
          <div class="item-year">${d.year}</div>
        </div>
      </div>
    `).join('');
    
    container.innerHTML = html;
  } catch (error) {
    console.error('Error loading diplomes:', error);
  }
}

// Load passions
async function loadPassions() {
  try {
    const response = await fetch('assets/data/passions.json');
    const passions = await response.json();
    const container = document.querySelector('.passions-grid');
    
    const html = passions.map((passion, index) => {
      const separator = index < passions.length - 1 ? '<span class="passion-separator">⬤</span>' : '';
      return `
        <div class="passion-item">
          <span class="passion-icon">${passion.icon}</span>
          <span class="passion-name">${passion.name}</span>
        </div>${separator}
      `;
    }).join('');
    
    container.innerHTML = html;
  } catch (error) {
    console.error('Error loading passions:', error);
  }
}

// Load contact
async function loadContact() {
  try {
    const response = await fetch('assets/data/contact.json');
    const contacts = await response.json();
    const container = document.querySelector('.contact-grid');
    
    // Prendre seulement les 3 premiers contacts
    const mainContacts = contacts.slice(0, 3);
    
    const html = mainContacts.map(contact => {
      const icon = contact.icon.startsWith('http') 
        ? `<img src="${contact.icon}" alt="${contact.label}" style="width: 12px; height: 12px; vertical-align: middle;">` 
        : contact.icon;
      
      const value = contact.url 
        ? `<a href="${contact.url}" style="color: #333; text-decoration: none;">${contact.value}</a>`
        : contact.value;
      
      return `
        <div class="contact-item">
          <span class="contact-icon">${icon}</span>
          <strong class="contact-label">${contact.label}:</strong>
          <span class="contact-value">${value}</span>
        </div>
      `;
    }).join('');
    
    container.innerHTML = html;
  } catch (error) {
    console.error('Error loading contact:', error);
  }
}

// Load all data
document.addEventListener('DOMContentLoaded', async () => {
  await loadInfos();
  await loadCompetences();
  await loadExperiences();
  await loadDiplomes();
  await loadPassions();
  await loadContact();
  
  // Auto-print after a short delay to ensure content is loaded
  setTimeout(() => {
    globalThis.print();
  }, 500);
});
