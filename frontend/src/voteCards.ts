
function createCard(user: string, buttons = false) {
    const container = document.createElement('div') as HTMLDivElement;
    container.innerHTML = `
    <h2>${user}<h2>
    `;
    if (buttons) {
        const numbers = [1, 3, 5, 8];
        for (var number of numbers) {
            const button = document.createElement('button') as HTMLButtonElement;
            button.innerHTML = number.toString();
            button.addEventListener('click', (e) => {
                e.preventDefault();
                vote(number);
            })
            button.classList.add('voteButton');
            container.appendChild(button);
        }
    }

    return container;
}



export function createVoteCards(users: string[], empty = false, showAll = false) {
    console.log("Creating votecards");
    
    const oldContainer = document.querySelector('.allVoteCardsContainer') as HTMLDivElement;
    if (oldContainer) {
        console.log("Removing old container");
        
        oldContainer.remove();
    }
    const container = document.createElement('div') as HTMLDivElement;
    container.classList.add('allVoteCardsContainer');
    var name: string | null = "";
    if (!empty) {
        name = sessionStorage.getItem('user');
    } 
    
    for (var user of users) {
        var isUser = true;
        if(!showAll) {
            isUser = (name == user);
        }
        if (empty) {
            isUser = false;
        }
        
        container.appendChild(createCard(user, isUser));
    }

    return container;
}

function vote(storyPoints: number) {
    disableButtons();
}

function disableButtons() {
    const buttons = document.querySelectorAll('.voteButton') as NodeListOf<HTMLButtonElement>;
    for (var button of buttons) {
        button.setAttribute('disabled', 'true');
        
    }
}