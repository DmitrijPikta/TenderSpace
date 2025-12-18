// ===== Configuration =====
const contractAddress = '0x05F951010560bC6fA817e19813007FB2cE8e7e8E'

let contractABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderFee",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "nextTenderIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tenderFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_maxParticipantsNumber",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_reward",
                "type": "uint256"
            }
        ],
        "name": "createTender",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_participant",
                "type": "address"
            }
        ],
        "name": "addCommitionParticipant",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            }
        ],
        "name": "releaseTender",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "offer",
                "type": "string"
            }
        ],
        "name": "participate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            }
        ],
        "name": "getTenderOffers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            },
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_participantAddress",
                "type": "address"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            }
        ],
        "name": "findWinner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            }
        ],
        "name": "getWinner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            }
        ],
        "name": "getTenderOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            }
        ],
        "name": "getTenderTitle",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            }
        ],
        "name": "getTenderDescription",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            }
        ],
        "name": "getTenderReward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            }
        ],
        "name": "getTenderMaxParticipantsNumber",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            }
        ],
        "name": "getTenderCurrentParticipantsNumber",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tenderIndex",
                "type": "uint256"
            }
        ],
        "name": "getIsReleased",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
let web3
let contract
let userAccount
let nextTenderIndex = 0


// ===== Initialize Web3 and Contract =====
async function initializeWeb3() {
    try {
        // Defensive: ensure Web3 library is loaded on the page
        if (typeof Web3 === 'undefined') {
            const msg = 'Web3 is not loaded on this page. Include web3 script before scripts.js.'
            console.error(msg)
            alert(msg)
            return false
        }

        web3 = new Web3('http://localhost:7545')
        const listening = await web3.eth.net.isListening()
        console.log('Connected:', listening)

        const accounts = await web3.eth.getAccounts()
        userAccount = accounts[0]

        if (!userAccount) {
            console.error('No accounts found. Make sure Ganache is running.')
            return false
        }

        // Populate account selector dropdown
        const selector = document.getElementById('account-selector')
        if (selector) {
            selector.innerHTML = ''
            for (let i = 0; i < Math.min(accounts.length, 10); i++) {
                const option = document.createElement('option')
                option.value = i
                option.textContent = `Account ${i}: ${accounts[i]}`
                if (i === 0) option.selected = true
                selector.appendChild(option)
            }
            selector.addEventListener('change', (e) => {
                userAccount = accounts[parseInt(e.target.value)]
                const accEl = document.getElementById('account')
                if (accEl) accEl.textContent = userAccount
                console.log('Switched to account:', userAccount)
            })
        }

        // Initialize contract
        contract = new web3.eth.Contract(contractABI, contractAddress)

        // Update account display if present
        const accEl = document.getElementById('account')
        if (accEl) accEl.textContent = userAccount

        console.log('Web3 and Contract initialized successfully')
        return true
    } catch (error) {
        console.error('Error initializing Web3:', error)
        return false
    }
}

// ===== Get Next Tender Index =====
async function getNextTenderIndex() {
    try {
        nextTenderIndex = await contract.methods.nextTenderIndex().call()
        console.log('Next Tender Index:', nextTenderIndex)
        return nextTenderIndex
    } catch (error) {
        console.error('Error getting nextTenderIndex:', error)
        return 0
    }
}

// ===== Create Tender Buttons =====
function createTenderButtons() {
    const container = document.getElementById('tenders-container')

    if (!container) {
        console.error('Tenders container not found')
        return
    }

    // Clear existing buttons
    container.innerHTML = ''

    // Create button for each tender
    for (let i = 0; i < nextTenderIndex; i++) {
        const button = document.createElement('button')
        button.className = 'tender-button'
        button.textContent = `tender number ${i}`
        button.onclick = () => viewTender(i)
        container.appendChild(button)
    }
}

// ===== View Tender (placeholder function) =====
function viewTender(tenderIndex) {
    //alert(`Viewing tender ${tenderIndex}. Implement detail view here.`)
    console.log('Viewing tender:', tenderIndex)
    window.open(`tender.html?tenderIndex=${tenderIndex}`, '_blank')
}

// ===== Release Tender (calls contract) =====
async function releaseTender(tenderIndex) {
    try {
        if (!contract) throw new Error('Contract is not initialized')
        if (tenderIndex === null || tenderIndex === undefined) throw new Error('Tender index is missing')

        const idx = Number(tenderIndex)
        if (Number.isNaN(idx)) throw new Error('Tender index is not a number')

        // estimate gas and send transaction from the connected account
        //const estimated = await contract.methods.releaseTender(idx).estimateGas({ from: userAccount })
        const tx = await contract.methods.releaseTender(idx).send({
            from: userAccount
            //gas: Math.floor(estimated * 1.2)
        })

        console.log('Tender released successfully', tx)
        return tx
    } catch (error) {
        console.error('Error releasing tender:', error)
        throw error
    }
}

// ===== Create Tender =====
async function createTender(event) {
    event.preventDefault()

    try {
        const form = document.getElementById('createTender')
        const title = form.elements['title'].value
        const description = form.elements['description'].value
        const maxParticipantsNumber = form.elements['maxParticipantsNumber'].value
        const reward = form.elements['reward'].value

        if (!title || !description || !maxParticipantsNumber || !reward) {
            console.error('All fields are required')
            return
        }

        const tenderFee = await contract.methods.tenderFee().call()
        const totalValue = BigInt(reward) + BigInt(tenderFee)

        const tx = await contract.methods.createTender(
            title,
            description,
            maxParticipantsNumber,
            reward
        ).send({
            from: userAccount,
            value: totalValue.toString(),
            gas: 3000000
        })

        console.log('Tender created successfully:', tx)
        form.reset()
        await getNextTenderIndex()
        createTenderButtons()
    } catch (error) {
        console.error('Error creating tender:', error)
    }
}

// Attach event listener to form
document.addEventListener('DOMContentLoaded', () => {
    const createTenderForm = document.getElementById('createTender')
    if (createTenderForm) {
        createTenderForm.addEventListener('submit', createTender)
    }
})


// ===== Main Initialization =====
async function init() {
    const initialized = await initializeWeb3()
    if (initialized) {
        await getNextTenderIndex()
        createTenderButtons()
    } else {
        console.error('Failed to initialize application')
    }
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', init)


// tender.html script

// add commition participant
async function addCommitionParticipant(tenderIndex, participantAddress) {
    try {
        const tx = await contract.methods.addCommitionParticipant(tenderIndex, participantAddress).send({
            from: userAccount,
            gas: 200000
        })
        console.log('Commission participant added:', tx)
    } catch (error) {
        console.error('Error adding commission participant:', error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const addParticipantForm = document.getElementById('addParticipantForm')
    if (addParticipantForm) {
        addParticipantForm.addEventListener('submit', async (event) => {
            event.preventDefault()
            const tenderIndex = parseInt(new URLSearchParams(window.location.search).get('tenderIndex'))
            const participantAddress = addParticipantForm.elements['participantAddress'].value
            await addCommitionParticipant(tenderIndex, participantAddress)
        })
    }
})

// participate in tender
async function participateInTender(tenderIndex, offer) {
    try {
        const tx = await contract.methods.participate(tenderIndex, offer).send({
            from: userAccount,
            gas: 200000
        })
        console.log('Participated in tender:', tx)
    } catch (error) {
        console.error('Error participating in tender:', error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const participateForm = document.getElementById('participateForm')
    if (participateForm) {
        participateForm.addEventListener('submit', async (event) => {
            event.preventDefault()
            const tenderIndex = parseInt(new URLSearchParams(window.location.search).get('tenderIndex'))
            const offer = participateForm.elements['offer'].value
            await participateInTender(tenderIndex, offer)
            location.reload()
        })
    }
})


// get offers for tender
async function getOffers(tenderIndex) {
    try {
        const result = await contract.methods.getTenderOffers(tenderIndex).call({
            from: userAccount
        })
        console.log('Tender offers:', result)
        return result
    } catch (error) {
        console.error('Error getting tender offers:', error)
        return null
    }
}

// vote for participant
async function voteForParticipant(tenderIndex, participantAddress) {
    try {
        const tx = await contract.methods.vote(tenderIndex, participantAddress).send({
            from: userAccount,
            gas: 200000
        })
        console.log('Voted for participant:', tx)
    } catch (error) {
        console.error('Error voting for participant:', error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const voteForm = document.getElementById('voteForm')
    if (voteForm) {
        voteForm.addEventListener('submit', async (event) => {
            event.preventDefault()
            const tenderIndex = parseInt(new URLSearchParams(window.location.search).get('tenderIndex'))
            const participantAddress = voteForm.elements['voteAddress'].value
            await voteForParticipant(tenderIndex, participantAddress)
        })
    }
})

// find winner 
async function findWinner(tenderIndex) {
    try {
        const tx = await contract.methods.findWinner(tenderIndex).send({
            from: userAccount,
            gas: 200000
        })
        console.log('Winner found:', tx)
        // get winner
        return getWinner(tenderIndex)
    } catch (error) {
        console.error('Error finding winner:', error)
    }
}

async function getWinner(tenderIndex) {
    try {
        const result = await contract.methods.getWinner(tenderIndex).call({
            from: userAccount
        })
        console.log('Tender winner:', result)
        return result
    } catch (error) {
        console.error('Error getting tender winner:', error)
        return null
    }
}

// get functions to display tender details
async function getTenderOwner(tenderIndex) {
    try {
        const owner = await contract.methods.getTenderOwner(tenderIndex).call(
            { from: userAccount }
        )
        console.log('Tender owner:', owner)
        return owner
    } catch (error) {
        console.error('Error getting tender owner:', error)
        return ''
    }
}

async function getTenderTitle(tenderIndex) {
    try {
        const title = await contract.methods.getTenderTitle(tenderIndex).call(
            { from: userAccount }
        )
        console.log('Tender title:', title)
        return title
    } catch (error) {
        console.error('Error getting tender title:', error)
        return ''
    }
}

async function getTenderDescription(tenderIndex) {
    try {
        const description = await contract.methods.getTenderDescription(tenderIndex).call(
            { from: userAccount }
        )
        console.log('Tender description:', description)
        return description
    } catch (error) {
        console.error('Error getting tender description:', error)
        return ''
    }
}

async function getTenderReward(tenderIndex) {
    try {
        const reward = await contract.methods.getTenderReward(tenderIndex).call(
            { from: userAccount }
        )
        console.log('Tender reward:', reward)
        return reward
    } catch (error) {
        console.error('Error getting tender reward:', error)
        return 0
    }
}

async function getTenderMaxParticipantsNumber(tenderIndex) {
    try {
        const maxParticipantsNumber = await contract.methods.getTenderMaxParticipantsNumber(tenderIndex).call(
            { from: userAccount }
        )
        console.log('Tender max participants number:', maxParticipantsNumber)
        return maxParticipantsNumber
    } catch (error) {
        console.error('Error getting tender max participants number:', error)
        return 0
    }
}

async function getTenderCurrentParticipantsNumber(tenderIndex) {
    try {
        const currentParticipantsNumber = await contract.methods.getTenderCurrentParticipantsNumber(tenderIndex).call(
            { from: userAccount }
        )
        console.log('Tender current participants number:', currentParticipantsNumber)
        return currentParticipantsNumber
    } catch (error) {
        console.error('Error getting tender current participants number:', error)
        return 0
    }
}

async function getIsReleased(tenderIndex) {
    try {
        const isReleased = await contract.methods.getIsReleased(tenderIndex).call(
            { from: userAccount }
        )
        console.log('Tender is released:', isReleased)
        return isReleased
    } catch (error) {
        console.error('Error getting tender isReleased status:', error)
        return false
    }
}