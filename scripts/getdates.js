// 1. Copyright year in the first footer paragraph
const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();

// 2. Date the document was last modified, in the second paragraph
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;