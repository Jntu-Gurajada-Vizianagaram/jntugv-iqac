class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.chatbox_send--footer'),
            messageInput: document.querySelector('.chatbox__footer input'),
            messageContainer: document.querySelector('.chatbox__messages'),
        };

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatBox, sendButton, messageInput } = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox));
        sendButton.addEventListener('click', () => this.sendMessage(chatBox));
        messageInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.sendMessage(chatBox);
            }
        });
    }

    toggleState(chatBox) {
        this.state = !this.state;

        if (this.state) {
            chatBox.classList.add('chatbox--active');
        } else {
            chatBox.classList.remove('chatbox--active');
        }
    }

    sendMessage(chatBox) {
        const { messageInput } = this.args;
        const messageText = messageInput.value.trim();

        if (!messageText) {
            return;
        }

        const messageItem = `<div class="messages__item messages__item--visitor">${messageText}</div>`;
        this.messages.push(messageItem);
        this.updateChat(chatBox);

        // Clear input field after sending message
        messageInput.value = '';

        // Scroll to the bottom of the message container
        chatBox.querySelector('.chatbox__messages').scrollTop = chatBox.querySelector('.chatbox__messages').scrollHeight;
        
        // Send message to server
        fetch('/predict', {
            method: 'POST',
            body: JSON.stringify({ message: messageText }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            const botMessage = `<div class="messages__item messages__item--operator">${data.answer}</div>`;
            this.messages.push(botMessage);
            this.updateChat(chatBox);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    updateChat(chatBox) {
        const { messageContainer } = this.args;
        // Clear the message container
        messageContainer.innerHTML = '';

        // Add messages in reverse order (latest message at the bottom)
        for (let i = this.messages.length - 1; i >= 0; i--) {
            messageContainer.innerHTML += this.messages[i];
        }
    }
}

const chatbox = new Chatbox();
chatbox.display();
