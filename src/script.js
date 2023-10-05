function handleFileUpload(event) {
    const files = event.target.files;
    const formData = new FormData();

    for (const file of files) {
        // Check if the file extension is .sdat or .esl
        const allowedExtensions = ['sdat', 'esl', 'xml'];
        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (allowedExtensions.includes(fileExtension)) {
            formData.append('files', file);
        } else {
            console.warn(`File ${file.name} is not a valid XML file (sdat or esl). Skipping...`);
            alert(`File ${file.name} is not a valid XML file (sdat or esl). It will be skipped.`);
        }
    }
  
    if (formData.getAll('files').length > 0) {
        fetch('http://localhost:3001/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
        })
        .catch(error => console.error('Error uploading files:', error));
    } else {
        console.warn('No valid XML files selected for upload.');
        alert('No valid XML files selected for upload.');
    }
}

const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', handleFileUpload);
