let InterviewList = [];
let RejectionList = [];
let currentStatus='all';
let total = document.getElementById('total');
let InterviewCount = document.getElementById('InterviewCount');
let RejectionCount = document.getElementById('RejectionCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const InterviewFilterBtn = document.getElementById('Interview-filter-btn');
const RejectionFilterBtn= document.getElementById('Rejection-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const deleted=document.getElementById('delete');
const filterSection=document.getElementById('filtered-section');
function calculateCount() {
    total.innerText = allCardSection.children.length ;
    InterviewCount.innerText = InterviewList.length;
    RejectionCount.innerText = RejectionList.length;
}
calculateCount();
function toggleStyle(id) {
    
     allFilterBtn.classList.add('bg-white', 'text-black')
    InterviewFilterBtn.classList.add('bg-white', 'text-black')
    RejectionFilterBtn.classList.add('bg-white', 'text-black')

    allFilterBtn.classList.remove( 'bg-blue-500', 'text-white')
    InterviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    RejectionFilterBtn.classList.remove('bg-blue-500', 'text-white')

    
    const selected = document.getElementById(id)

    currentStatus = id
    console.log(currentStatus);

    selected.classList.remove('bg-white', 'text-black' )
    selected.classList.add('bg-blue-500', 'text-white' )
     if (id == 'Interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
         
        
    } 
    else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } 
    else if (id == 'Rejection-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejection();
        
       
    }
}
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const company = parenNode.querySelector('.mobileThing').innerText;
        const post = parenNode.querySelector('.developThing').innerText;
        const location = parenNode.querySelector('.location').innerText;
        const description=parenNode.querySelector('.description').innerText;
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'Interview'

        const cardInfo = {
            company,
            post,
            location,
            description,
            status: 'Interview',
            notes
        }

        const plantExist = InterviewList.find(item => item.company == cardInfo.company)

        if (!plantExist) {
            InterviewList.push(cardInfo);
        }

        
        RejectionList = RejectionList.filter(item => item.company != cardInfo.company)
         calculateCount();
        
        if (currentStatus == 'Rejection-filter-btn') {
            renderRejection();
        }

        


    } 
    else if (event.target.classList.contains('rejected-btn')) {
        const parenNode = event.target.parentNode.parentNode;
        const company = parenNode.querySelector('.mobileThing').innerText;
        const post = parenNode.querySelector('.developThing').innerText;
        const location = parenNode.querySelector('.location').innerText;
        const description=parenNode.querySelector('.description').innerText;
        const status = parenNode.querySelector('.status').innerText;
        const notes = parenNode.querySelector('.notes').innerText;

        parenNode.querySelector('.status').innerText = 'Rejected'

        const cardInfo = {
            company,
            post,
            location,
            description,
            status: 'Rejected',
            notes
        }
        const plantExist = RejectionList.find(item => item.company == cardInfo.company)

        if (!plantExist) {
            RejectionList.push(cardInfo);
        }

        
        InterviewList = InterviewList.filter(item => item.company!= cardInfo.company)

        
        if (currentStatus == "Interview-filter-btn") {
            renderInterview();
        }
        calculateCount()

    }

})

function renderInterview() {
    filterSection.innerHTML = '';

   
    for (let interview of InterviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'card flex justify-between  p-8 mt-4 bg-white'
        div.innerHTML = `
        <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="mobileThing font-bold text-2xl">${interview.company}</p>
                        <p class="developThing text-gray-500">${interview.post}</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2  text-gray-500">
                      <p class="location" >${interview.location}</p>
                      <p class="description">${interview.description}</p>
                    </div>
                    <!-- part 3 -->
                     <button class="status bg-[#EEF4FF] px-4 py-2.5">${interview.status}</button>
                     <p class="notes  text-gray-500">${interview.notes}</p>

                     <div class="flex gap-5">
                        <button class="interview-btn  bg-green-200 px-4 py-2 text-green-400">interview</button>
                        <button class="rejected-btn bg-red-200 px-4 py-2 text-red-400">Rejected</button>
                     </div>
                </div>

                <!-- main part 2 -->
                <div id="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </div>
        `
        filterSection.appendChild(div)
    }
}

function renderRejection(){
    
    filterSection.innerHTML = ''
    
    for (let rejection of RejectionList) {

        let div = document.createElement('div');
        div.className = 'card flex justify-between  p-8 bg-white mt-4'
        div.innerHTML = `
        <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="mobileThing font-bold text-2xl">${rejection.company}</p>
                        <p class="developThing text-gray-500>${rejection.post}</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2  text-gray-500">
                      <p class="location" >${rejection.location}</p>
                      <p class="description">${rejection.description}</p>
                    </div>
                    <!-- part 3 -->
                     <button class="status bg-[#EEF4FF] px-4 py-2.5">${rejection.status}</button>
                     <p class="notes  text-gray-500">${rejection.notes}</p>

                     <div class="flex gap-5">
                        <button class="interview-btn  bg-green-200 px-4 py-2 text-green-400">interview</button>
                        <button class="rejected-btn bg-red-200 px-4 py-2 text-red-400">Rejected</button>
                     </div>
                </div>

                <!-- main part 2 -->
                <div id="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </div>
        
        `
        filterSection.appendChild(div)
    }
}