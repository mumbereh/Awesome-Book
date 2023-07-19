const toggleSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.style.display = section.style.display === 'none' ? 'block' : 'none';
};

export default toggleSection;
