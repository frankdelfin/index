 const toggleBtn = document.getElementById('dark-toggle');

    toggleBtn.addEventListener('click', function() {

    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        toggleBtn.textContent = '☀️ Light Mode';
    } else {
        toggleBtn.textContent = '🌙 Dark Mode'; 
    }
});

    const skills = document.querySelectorAll('#skills ul li');
    const skillDetail = document.getElementById('skill-detail');

    skills.forEach(function(skill) {
        skill.addEventListener('click', function() {

            skills.forEach(s => s.classList.remove('active-skill'));
            skill.classList.add('active-skill');
            skillDetail.textContent = skill.dataset.level;
        });
    });