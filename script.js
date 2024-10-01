document.addEventListener("DOMContentLoaded", () => {
    const notificationText = document.getElementById("notificationText");
    const notificationTime = document.getElementById("notificationTime");
    const messagesContainer = document.getElementById("messagesContainer");
    const contactName = document.getElementById("contactName");
    const profilePhoto = document.getElementById("profilePhoto");
    const profileImage = document.getElementById("profileImage");
    const contactDisplayName = document.getElementById("contactDisplayName");
    const statusText = document.getElementById("statusText");
    
    const addSentMessageButton = document.getElementById("addSentMessage");
    const addReceivedMessageButton = document.getElementById("addReceivedMessage");
    const typingMessageInput = document.getElementById("typingMessage");
    const sendMessageButton = document.getElementById("sendMessage");

    // Set default notification
    updateNotification();

    // Function to add sent message
    addSentMessageButton.addEventListener("click", () => {
        const sentMessage = document.getElementById("sentMessage").value;
        if (sentMessage) {
            const messageDiv = document.createElement("div");
            messageDiv.textContent = sentMessage;
            messageDiv.classList.add("sent-message");
            messagesContainer.appendChild(messageDiv);
            document.getElementById("sentMessage").value = "";
            updatePreview();
        }
    });

    // Function to add received message
    addReceivedMessageButton.addEventListener("click", () => {
        const receivedMessage = document.getElementById("receivedMessage").value;
        if (receivedMessage) {
            const messageDiv = document.createElement("div");
            messageDiv.textContent = receivedMessage;
            messageDiv.classList.add("received-message");
            messagesContainer.appendChild(messageDiv);
            document.getElementById("receivedMessage").value = "";
            updatePreview();
        }
    });

    // Function to send typing message
    sendMessageButton.addEventListener("click", () => {
        const typingMessage = typingMessageInput.value;
        if (typingMessage) {
            const messageDiv = document.createElement("div");
            messageDiv.textContent = typingMessage;
            messageDiv.classList.add("sent-message");
            messagesContainer.appendChild(messageDiv);
            typingMessageInput.value = "";
            updatePreview();
        }
    });

    // Function to update notification
    function updateNotification() {
        notificationText.textContent = "New message from " + contactName.value;
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        notificationTime.textContent = currentTime;
    }

    // Function to update preview
    function updatePreview() {
        // Update contact info
        contactDisplayName.textContent = contactName.value;
        profileImage.src = profilePhoto.value;

        // Update messages
        messagesContainer.innerHTML = '';
        const messages = document.querySelectorAll(".sent-message, .received-message");
        messages.forEach(msg => {
            messagesContainer.appendChild(msg.cloneNode(true));
        });
        updateNotification();
    }
});
