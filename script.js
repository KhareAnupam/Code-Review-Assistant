console.log(" script.js file has been loaded and is running!");

const fileInput = document.getElementById('fileInput');
const loader = document.getElementById('loader');
const reviewResult = document.getElementById('reviewResult');
const submitButton = document.getElementById('submitButton'); 

submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log(" Button click captured! Page reload has been prevented.");

    const file = fileInput.files[0];
    if (!file) {
        reviewResult.textContent = 'Please select a file to upload.';
        return;
    }


    console.log('Checkpoint 1: Form submitted, file selected.', file.name);

    loader.classList.remove('hidden');
    reviewResult.textContent = ''; 

    const formData = new FormData();
    formData.append('codefile', file);

    try {
        console.log('Checkpoint 2: Sending file to server...');
        
        const response = await fetch('http://localhost:3000/review', {
            method: 'POST',
            body: formData,
        });

        console.log('Checkpoint 3: Response received from server.', response);

        if (!response.ok) {
            throw new Error(`Server responded with status: ${response.status}`);
        }

        const data = await response.json();
        
        console.log('Checkpoint 4: SUCCESS! Review data received.', data);

        reviewResult.textContent = data.review;

    } catch (error) {
        console.error('Checkpoint 5: ERROR block triggered.', error);
        reviewResult.textContent = 'An error occurred. Please check the developer console for details.';
    } finally {
        console.log('Checkpoint 6: FINALLY block executed.');
        loader.classList.add('hidden');
    }
});