
document.getElementById('redirectButton').addEventListener('click',async function() {
    let docm = document.querySelector("desk").classList.toggle("black")
    await playSoundAndWait();
    window.location.href = 'https://beetreeofficial.github.io/Website/index.html';
  });


// Create an Audio object and load the sound file
const sfx = new Audio('Microsoft Windows 95 Startup Sound [miZHa7ZC6Z0].mp3');

// Play the sound effect
function playSoundAndWait() {
    return new Promise((resolve, reject) => {
        // Set up event listeners for the 'ended' event
        const handleEnded = () => {
            sfx.removeEventListener('ended', handleEnded);
            resolve(); // Resolve the promise when the sound ends
        };

        sfx.addEventListener('ended', handleEnded);

        try {
            // Rewind to the start (in case it's already playing)
            sfx.currentTime = 0;
            // Play the sound
            sfx.play().catch(error => {
                sfx.removeEventListener('ended', handleEnded);
                reject(error);
            });
        } catch (error) {
            // Reject the promise if there is an error playing the sound
            sfx.removeEventListener('ended', handleEnded);
            reject(error);
        }
    });
}
